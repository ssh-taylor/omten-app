<!--
 * @Author: your name
 * @Date: 2019-12-18 09:48:03
 * @LastEditTime : 2019-12-23 13:41:44
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\message\chatMessage.vue
 -->
<template>
  <div class="page-user-info">
    <mt-header title="">
      <div @click="back" slot="left">
        <mt-button class="iconfont" icon="back">聊天信息</mt-button>
      </div>
    </mt-header>
    <div class="container">
      <div class="userInfo">
        <div class="picture">
           <img :src="userInfo.F_HeadIcon" alt="">
        </div>
        <div class="Info">
          <p>{{userInfo.F_RealName}}</p>
          <span>微信号：1232123</span>
          <span>地区：浙江温州</span>
        </div>
      </div>
      <div class="options">
        <div class="settingoption unify">
          <div class="optionItem">
            <p class="text">设置备注和标签</p>
            <span class="fa fa-angle-right"></span>
          </div>
          <div class="optionItem">
             <p class="text">朋友权限</p>
            <span class="fa fa-angle-right"></span>
          </div>
        </div>
        <div class="moreInfo unify">
           <div class="optionItem">
            <p class="text">更多信息</p>
            <span class="fa fa-angle-right"></span>
          </div>
        </div>
        <div class="chat-mode">
           <div class="chat-mode-item">
            <p class="text"><span class="fa fa-commenting"></span>发消息</p>
          </div>
          <div class="chat-mode-item">
            <p class="text"><span class="fa fa-video-camera"></span>音视频通话</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Header,button} from "mint-ui";
import {session } from "../../utils/util";
export default {
components: {
    MtHeader: Header,
    MtButton: button,
  },
  data(){
    return{
      userInfo:{},
      backPath:''
    }
  },
   beforeRouteEnter:(to,from,next)=>{
      return this.backPath = from.path

      next()
    },
  mounted(){
    this.userInfo = session.getSession('userInfo')
    console.log(this.userInfo)
  },
  methods:{
    back(){
      console.log(this.backPath)
      // this.$router.push({path:this.backPath})
    }
  }
}
</script>

<style type="text/scss" lang="scss" scoped>
  .page-user-info{
    height: 100%;
    font-size: .16rem;
    color: #999;
    .container{
      // height: calc(100% - .4rem);
      .userInfo{
        background-color: #fff;
        display: flex;
        padding: .1rem 0;
        .picture{
          width: .5rem;
          height: .5rem;
          margin: 0 .2rem;
          img{
            display: block;
            width: 100%;
            height: 100%;
            border-radius: .05rem;
          }
        }
        .Info{
          p{
            font-size: .16rem;
            font-weight: bolder;
            line-height: 2;
            color: #444;
          }
          span{
            display:block;
            width: 100%;
            font-size: .13rem;
            color: #999;
            margin-bottom: .05rem;
          }
        }
      }
      .options{
        .unify{
          border: 1px solid #eee;
          background-color: #fff;
          padding-left: .15rem;
          .optionItem{
            position: relative;
            height: .4rem;
            .text{
              line-height: .4rem;
              font-size: .14rem;
              color: #444;
            }
            .fa-angle-right{
              position: absolute;
              top: calc(50% - 8px);
              right: .2rem;
            }
          }
          div:nth-of-type(2){
            border-top: 1px solid #eee;
          }
        }
        .moreInfo{
          margin-top: .1rem;
        }
        .chat-mode{
          background-color: #fff;
          margin-top: .1rem;
          .chat-mode-item{
            height: .4rem;
            border-top:1px solid #eee; 
            .text{
              text-align: center;
              line-height: .4rem;
              color:#012142;
              font-size: .14rem;
              span{
                margin-right: .05rem;
              }
            }
          }
          div:nth-of-type(2){
            border-bottom:1px solid #eee; 
          }
        }
      }
    }
  }
/deep/ .mint-button{
  color: #fff;
}
</style>>