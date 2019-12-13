
<template>
  <div class="page-mine">
    <div class="page-container">
       <div class="userInfo">
      <div class="userInfo-box">
        <div class="info">
          <div class="left">
            <p>黄潇潇</p>
          </div>
          <div class="right">
            <img class="portrait" src="../../assets/logo.png" alt="">
          </div>
        </div>
      <div class="code">
        <p>我的名片</p>
        <div class="right-icon">
          <span class="fa fa-qrcode"></span>
          <span class="fa fa-angle-right"></span>
        </div>
      </div>
      </div>
    </div>
    <div class="about">
      <div class="item-setting">
        <span style="color:#00B2EE" class="icon iconfont icon-zonggongshi"></span>
        <span class="text">我的工时</span>
      </div>
      <div class="item-setting">
        <span style="color:	#CD4F39" class="icon iconfont icon-xinzi"></span>
        <span class="text">我的薪资</span>
      </div>
      <div class="item-setting">
        <span style="color:#228B22" class="icon iconfont icon-kaoqintongji"></span>
        <span class="text">我的考勤</span>
      </div>
    </div>
    </div>
    <div class="setting-nume">
      <div class="nume-item">
        <span style="color:#1C86EE" class="lefticon icon iconfont icon-jihua"></span>
        <p class="borb">工作计划</p>
        <span class="rightarrow icon iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></span>
      </div>
      <div class="nume-item">
        <span style="color:	#FF4500" class="lefticon icon iconfont icon-qingjia"></span>
        <p>假期管理</p>
        <span class="rightarrow icon iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></span>
      </div>
      <div class="nume-item nume-next">
        <span style="color:#1C86EE" class="lefticon icon iconfont icon-NMStubiao-"></span>
        <p>设置</p>
        <span class="rightarrow icon iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></span>
      </div>
      <div class="nume-item loginout">
        <mt-button class="button" type="danger" @click.native="loginout">退出登录</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'mint-ui';
export default {
  components:{
    MtButton:Button
  },
  methods:{
    loginout(){
      this.$store.dispatch('LoginOut')
      this.$router.replace({path:'/login'})
    }
  }
}
</script>

<style type="text/scss" lang="scss" scoped>
.page-mine{
  height: calc(100% - .4rem);
  font-size: .16rem;
  .page-container{
    background: #FCFCFC;
  }
  .userInfo{
    height: 1.5rem;
    padding: .2rem .2rem 0;
    .userInfo-box{
      width: 100%;
      height: 100%;
       background-color:#fff; 
       border-bottom-left-radius: .1rem;
       border-bottom-right-radius: .1rem;
    }
    .info{
      width: 100%;
      height: 1.2rem;
       background-color:#eee; 
       border-radius: .1rem;
       position: relative;
       p{
         padding-left:.15rem; 
         line-height: .5rem;
         font-weight: 500;
         font-size:.17rem;
         border-top-left-radius: .1rem;
         border-top-right-radius: .1rem;
       }
       .right{
         position: absolute;
         top: .2rem;
         right: .3rem;
         .portrait{
           width: .3rem!important;
           height: .3rem;
           border-radius: 50%;
           display: block;
         }
       }
    }
    .code{
      height: .3rem;
      padding-left: .15rem;
      position: relative;
      p{
        line-height: .3rem;
        font-size: .13rem;
      }
      .right-icon{
        position: absolute;
        top: 0;
        right:0;
        clear: both;
        color: #999;
        span{
          display:block;
          font-size: .18rem;
          float: left;
          margin-right: .1rem;
          line-height: .3rem;
        }
      }
    }
  }
  .about{
    width: 100%;
    height: .55rem;
    display: flex;
    flex-wrap: nowrap;
    margin: .05rem 0 .1rem;
  }
  .item-setting{
    width: calc(100% / 3);
    height: 100%;
    text-align: center;
    .iconfont{
      font-size: .25rem;
      display:block;
      margin-top: .05rem;
    }
    .text{
      font-size: .1rem;
      transform: scale(0.8);
      color: #999;
    }
  }
  .setting-nume{
    
    .nume-item{
      height: .45rem;
      // border: 1px solid red;
      background: #FCFCFC;
      display: flex;
      position: relative;
      .lefticon{
        font-size: .22rem;
        display: inline-block;
        line-height: .45rem;
        margin:0 .1rem 0 .15rem;
        vertical-align: middle;
      }
      p{
        line-height: .45rem;
        font-size: .13rem;
        width: 100%;
      }
      .borb{
        border-bottom:1px solid #eee;
      }
      .rightarrow{
        display: block;
        position: absolute;
        right: .1rem;
        line-height: .45rem;
        color: #999;
      }
    }
    .nume-next{
      margin-top: .1rem;
    }
    .loginout{
      margin-top: .3rem!important;
      background: none!important;
      .button{
        width: 80%;
        height: .4rem;
        margin: 0 auto;
      }
    }
  }
}
</style>