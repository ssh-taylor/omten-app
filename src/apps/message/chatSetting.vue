<!--
 * @Author: your name
 * @Date: 2019-12-18 09:48:03
 * @LastEditTime : 2019-12-19 17:37:54
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\message\chatMessage.vue
 -->
<template>
  <div class="page-chatMessage">
    <mt-header title="">
      <router-link to="/ltxq" slot="left">
        <mt-button class="iconfont" icon="back">聊天信息</mt-button>
      </router-link>
    </mt-header>
    <div class="container">
      <div class="Contacts">
        <div class="picture">
          <img :src="userInfo.F_HeadIcon" alt="">
          <p>{{userInfo.F_RealName}}</p>
        </div>
        <div class="adduser">
          <span class="fa fa-plus"></span>
        </div>
      </div>
      <div class="options">
        <div class="optionItem">
          <p class="text">查找聊天记录</p>
           <span class="fa fa-angle-right"></span>
        </div>
        <div class="power">
          <div class="powerItem">
            <p class="text">消息免打扰</p>
            <mt-switch class="switch" v-model="disturb"></mt-switch>
          </div>
          <div class="powerItem">
            <p class="text">聊天置顶</p>
            <mt-switch class="switch" v-model="toTop"></mt-switch>
          </div>
          <div class="powerItem">
            <p class="text">强提醒</p>
            <mt-switch class="switch" v-model="reminder"></mt-switch>
          </div>
        </div>
        <div class="optionItem">
          <p class="text">设置当前聊天背景</p>
           <span class="fa fa-angle-right"></span>
        </div>
        <div class="optionItem">
          <p class="text">清空聊天记录</p>
           <span class="fa fa-angle-right"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Header,button,Switch} from "mint-ui";
import {session} from '../../utils/util'
export default {
components: {
    MtHeader: Header,
    MtButton: button,
    MtSwitch:Switch,
  },
  data(){
    return{
      userInfo:{},
      disturb:'',
      toTop:'',
      reminder:'',
    }
  },
  mounted(){
    this.userInfo = session.getSession('userInfo')
    console.log(this.userInfo)
  }
}
</script>

<style type="text/scss" lang="scss" scoped>
  .page-chatMessage{
    height: 100%;
    font-size: .16rem;
    .container{
      .Contacts{
        padding: .1rem;
        background: #fff;
        display: flex;
        margin-top: .1rem;
        .picture{
          width: .5rem;
          img{
            display: block;
            width: .45rem;
            height: .45rem;
            margin: 0 auto;
            border-radius: .05rem;
          }
          p{
            font-size: .13rem;
            color: #999;
            margin-top: .05rem;
            text-align: center;
          }
        }
        .adduser{
          border: 1px solid #eee;
          width: .5rem;
          height: .5rem;
          margin-left: .3rem;
          text-align: center;
          span{
            font-size: .3rem;
            line-height: .5rem;
            color: #D3D3D3;
          }
        }
      }
      .options{
        margin-top: .1rem;
        .optionItem{
          height: .4rem;
          background-color:#fff;
          padding-left: .1rem;
          position: relative;
          margin: .05rem 0;
          border-top:1px solid #eee;
          border-bottom:1px solid #eee; 
          .text{
            line-height: .4rem;
            font-size: .14rem;
          } 
          span{
            position: absolute;
            top: calc(50% - 8px);
            right: .2rem;
          }
        }
        .power{
          padding-left: .1rem;
           background: #fff;
          .powerItem{
            height: .4rem;
            border-bottom: 1px solid #eee;
            position: relative;
            .text{
              line-height: .4rem;
              font-size: .14rem;
            }
            .switch{
              position: absolute;
              top: calc(50% - .1rem);
              right: .2rem;
            }
          }
        }
      }
    }
  }
/deep/ .mint-button{
  color: #fff;
}
/deep/ .mint-switch{
  height: .2rem;
  width: .37rem
}
/deep/ .mint-switch-core{
  height: .17rem;
  width: .37rem
}
/deep/ .mint-switch-core::after{
  height: .15rem;
  width: .15rem
}
/deep/ .mint-switch-core::before{
  height: .15rem;
  width: .15rem
}
</style>>

