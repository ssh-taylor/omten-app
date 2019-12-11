<template>
  <div class="page-mail">
    <mt-header :title="title"></mt-header>
    <div class="classify">
      <div class="department">
        <span  style="background-color:#228B22" class="icon-box icon iconfont icon-bumen"></span>
        <p class="text">按部门查找</p>
      </div>
      <div class="role">
        <span style="background-color:#00B2EE" class="icon-box icon iconfont icon-jiaoseguanli"></span>
        <p  class="text">按角色查找</p>
      </div>
    </div>
    <mt-index-list>
      <mt-index-section :index="item.title" :key="item.title" v-for="item in cityArr">
        <mt-cell :title="i" :key="i" v-for="i in item.lists" @click.native="selectedCity(i)"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import header from '../commons/header'
import { IndexList, IndexSection,cell,} from "mint-ui";
import ctiy from "../../utils/ctiy.json";
export default {
  components: {
    MtIndexList: IndexList,
    MtIndexSection: IndexSection,
    MtCell:cell,
    MtHeader:header,
  },
  data() {
    return {
      cityArr: [],
      title:'通讯录'
    };
  },
  created() {
    this.getCity(ctiy);
  },
  methods: {
    selectedCity(v) {
      console.log(v);
    },
    getCity(ctiy) {
      // 读取json文件
      this.cityArr = ctiy.city;
      console.log(this.cityArr);
    },
    selectedCity(i){
      console.log(i)
    }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
.page-mail{
  height: calc(100% - .4rem -40px);
}
/deep/ .mint-indexsection-index{
  font-size: .13rem
}
/deep/ .mint-indexlist-nav{
  border: none;
  background: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 9999;
}
/deep/ .mint-indexlist-content{
  width: 100%;
  position: relative;
}
.classify{
  font-size: .14rem;
  .department,.role{
    height: .45rem;
    background: #fff;
    display: flex;
  }
  .icon-box{
    width: .35rem;
    height: .35rem;
    background-color: aqua;
    margin: .05rem .15rem;
    font-size: .25rem;
    color: #fff;
    text-align: center;
    line-height: .35rem;
    border-radius: .03rem;
  }
  .text{
    width: calc(100% - .65rem);
    border-bottom: 1px solid #eee;
    line-height: .45rem;
    color: #444;
  }
}
</style>
