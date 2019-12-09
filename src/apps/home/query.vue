<template>
  <div class="page-query">
    <mt-header :title="title"></mt-header>
    <div class="container">
      <div class="applymodule">
        <div class="applyTitle">企业应用</div>
        <div class="applymenu">
          <div class="apply-box">
            <div class="apply-item">

            </div>
          </div>
        </div>
      </div>
      <div class="moduleMenu">
        <div class="menuTitle">系统功能</div>
        <div class="module-box">
          <div class="moduleItem">
            <span class="icon iconfont icon-zuzhi"></span>
            <p>组织用户</p>
          </div>
          <div class="moduleItem">
            <span class="icon iconfont icon-jiaosequanxian"></span>
            <p>角色权限</p>
          </div>
          <div class="moduleItem">
            <span class="icon iconfont icon-ico_kufangguanli_danjuchaxun"></span>
            <p>单据编码</p>
          </div>
          <div class="moduleItem">
            <span class="icon iconfont icon-biaodan"></span>
            <p>自定义表单</p>
          </div>
          <div class="moduleItem">
            <span class="icon iconfont icon-NB-IotSDKyujicheng"></span>
            <p>数据集成</p>
          </div>
          <div class="moduleItem">
            <span class="icon iconfont icon-tubiao"></span>
            <p>图表管理</p>
          </div>
          <div class="moduleItem">
            <span class="icon iconfont icon-liucheng"></span>
            <p>流程管理</p>
          </div>
           <div class="moduleItem">
            <span class="icon iconfont icon-shebeiguanli"></span>
            <p>MQTT</p>
          </div>
           <div class="moduleItem">
            <span class="icon iconfont icon-renwuguanli"></span>
            <p>任务管理</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import header from '../commons/header'
export default {
  components:{
    MtHeader:header
  },
  data(){
    return{
      title:'应用功能'
    }
  }
}
</script>

<style type="text/scss" lang="scss" scoped>
.page-query{
  height: calc(100% - .4rem);
  font-size: .16rem;
  .container{
    .applymodule{
      background: #fff;
      margin-bottom: .1rem;
      padding: .1rem;
      .applyTitle{
        border: 1px solid #eee;
        font-size: .15rem;
        color: #444;
        line-height: .3rem;
        padding-left: .05rem;
      }
    }
    .moduleMenu{
      background-color:#fff;
      padding: .1rem 0;
      .menuTitle{
        margin:0 .1rem;
        font-size: .15rem;
        color: #444;
        line-height: .3rem;
        padding-left: .05rem;
        border: 1px solid #eee;
      }
      .module-box{
        display: flex;
        flex-wrap: wrap;
        margin: 0 .1rem;
        border-left: 1px solid #eee;
        .moduleItem{
          width: calc(100% / 3 - 1px);
          height: .6rem;
          text-align: center;
          border-bottom:1px solid #eee; 
          border-right:1px solid #eee; 
          .iconfont{
            font-size: .25rem;
            display: block;
            height: .4rem;
            line-height: .4rem;
            color:#00B2EE;
          }
          p{
            font-size: .12rem;
            color: #999;
          }
        }
      }
    }
  }
}
</style>