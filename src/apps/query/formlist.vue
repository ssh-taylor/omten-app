<!--
 * @Author: your name
 * @Date: 2019-12-23 11:02:10
 * @LastEditTime : 2019-12-30 17:05:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\query\formlist.vue
 -->

<template>
  <div class="page-formlist">
      <mt-header title="销售订单">
        <div slot="left">
          <mt-button class="iconfont" icon="back"></mt-button>
        </div>
        <mt-button icon="more" slot="right" @click.native="openmore"></mt-button>
      </mt-header>
    <div class="container">
      <div class="form-box" v-for="(item,index) in orderList" :key="index" data-type="0">
        <div
          class="formItem"
          @click="tofrom(item)"
          @touchstart.capture="touchStart"
          @touchend.capture="touchEnd"
        >
          <div class="left">
            <p class="title">{{item.title}}</p>
            <span class="creatName">{{item.f_createusername}}</span>
          </div>
          <div class="right">
            <p class="editDate">{{item.f_modifydate.slice(0,10)}}</p>
            <span class="editName">{{item.f_modifyusername}}</span>
          </div>
        </div>
        <div class="delete" :data-index="index">
          <div class="menuicon add"  @click="add()">
            <span class="fa fa-plus-square-o"></span>
          </div>
          <div class="menuicon edit"  @click="edit(item)">
            <span class="fa fa-pencil-square-o"></span>
          </div>
          <div class="menuicon dele" @click="remove($event,item)">
            <span class="fa fa-trash-o"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Header, button, Loadmore, Toast } from "mint-ui";
import { getinstancelist, getFormScheme } from "../../Api/form";
import {deleteinstanceform} from '../../Api/formdata'
import {seesion, session} from '../../utils/util'
export default {
  components: {
    MtHeader: Header,
    MtButton: button,
    MtLoadmore: Loadmore
  },
  data() {
    return {
      order: {},
      orderList: [],
      orderModle: [],
      visibility: false,
      startX: 0,
      endX: 0
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.order = session.getSession('order')
      // this.order.F_ModuleId
      getFormScheme(this.order.F_ModuleId).then(res => {
        this.orderModle = JSON.parse(res.F_Scheme);
        getinstancelist(this.order.F_ModuleId).then(data => {
          this.orderList = data.rows;
          data.rows.forEach(i => {
            i["title"] = this.orderModle.SchemeData.filter(
              item => item.type === "label"
            )[0].title;
          });
        });
      });
    },
    tofrom(val) {
      this.$router.push({
        name: "query_forms",
        params: { modle: this.orderModle, orderData: val }
      });
    },
    open() {
      console.log(1111);
    },
    openmore() {
      if (this.visibility === false) {
        this.visibility = true;
      } else if (this.visibility === true) {
        this.visibility = false;
      }
    },
    add() {
      this.$router.push({name:'query_editform',params:{title:"新增表单",orderModle:this.orderModle,}})
    },
    edit(val) {
      this.$router.push({name:'query_editform',params:{title:'修改表单',orderModle:this.orderModle,orderData:val}})
    },
    remove(e,val) {
     let index = e.currentTarget.parentElement.dataset.index
     console.log(this.orderModle,val)
     deleteinstanceform(this.order.F_ModuleId,val.f_id).then(res=>{
        this.restSlide();
        this.orderList.splice(index,1)
     })
    },
    //滑动开始
    touchStart(e) {
      // 记录初始位置
      this.startX = e.touches[0].clientX;
    },
    //滑动结束
    touchEnd(e) {
      // 当前滑动的父级元素
      let parentElement = e.currentTarget.parentElement;
      // 记录结束位置
      this.endX = e.changedTouches[0].clientX;
      // 左滑
      if (parentElement.dataset.type == 0 && this.startX - this.endX > 30) {
        this.restSlide();
        parentElement.dataset.type = 1;
      }
      // 右滑
      if (parentElement.dataset.type == 1 && this.startX - this.endX < -30) {
        this.restSlide();
        parentElement.dataset.type = 0;
      }
      this.startX = 0;
      this.endX = 0;
    },
    //判断当前是否有滑块处于滑动状态
    checkSlide() {
      let listItems = document.querySelectorAll(".form-box");
      console.log(listItems,1111)
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].dataset.type == 1) {
          return true;
        }
      }
      return false;
    },
    //复位滑动状态
    restSlide() {
      let listItems = document.querySelectorAll(".form-box");
      // 复位
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].dataset.type = 0;
      }
    }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
.page-formlist {
  font-size: 0.16rem;
  height: 100%;
  box-sizing: border-box;
  .container {
    height: calc(100% - 0.42rem);
    width: 100%;
    overflow-x: hidden;
    form-box:nth-of-type(1) {
      border-top: 1px solid #eee;
    }
    .form-box {
      border-bottom: 1px solid #eee;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      height: 0.5rem;
      position: relative;
    }
    .form-box[data-type="0"] {
      transform: translate3d(0, 0, 0);
    }
    .form-box[data-type="1"] {
      transform: translate3d(-1rem, 0, 0);
    }
    .formItem {
      background-color: #fff;
      display: flex;
      padding: 0.05rem 0.1rem;
      align-items: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      justify-content: flex-end;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      .left {
        width: 50%;
        .title {
          font-size: 0.17rem;
          font-weight: 500;
        }
        .creatName {
          font-size: 0.13rem;
          color: #999;
        }
        .creatName::before {
          content: "创建";
          font-size: 0.13rem;
          background-color: #1e90ff;
          color: #fff;
          margin-right: 0.05rem;
          padding: 0 2px;
          border-radius: 2px;
        }
      }
      .right {
        width: 50%;
        text-align: right;
        .editDate {
          color: #999;
        }
        .editName {
          font-size: 0.13rem;
          color: #ff3030;
        }
        .editName::before {
          content: "修改";
          font-size: 0.13rem;
          background-color: #ff3030;
          color: #fff;
          margin-right: 0.05rem;
          padding: 0 2px;
          border-radius: 2px;
        }
      }
    }
    .form-box .delete {
      width: 1rem;
      height: 0.5rem;
      background: #eee;
      font-size: 17px;
      color: #444;
      text-align: center;
      line-height: .5rem;
      position: absolute;
      top: 0;
      right: -1rem;
      .menuicon{
        // border: 1px solid red;
        width: 33%;
        float: left;
        color: #fff;
      }
      .add,.edit{
        background-color: #1e90ff;
      }
      .dele{
        background-color: #ff3030;
      }
    }
  }
}
/deep/ .mint-header-button {
  height: 0.4rem;
}
/deep/ .mint-button--default {
  height: 0.4rem;
}
</style>