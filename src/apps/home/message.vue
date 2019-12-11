<!--
 * @Author: your name
 * @Date: 2019-12-04 14:34:52
 * @LastEditTime: 2019-12-11 16:50:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\home\message.vue
 -->
<template>
  <div class="page-message">
    <mt-header :title="title"></mt-header>
    <div class="container" @click="handleClose">
      <div class="message-item-box">
        <div class="message-left">
          <img src="../../assets/logo.png" alt="">

        </div>
        <div class=message-middle>
          <span>系统消息</span>
          <p>系统发来一封邮件点击预览</p>
        </div>
        <div class="message-right">
          <p>11月6日</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import header from '../commons/header'
import{getcontactlist} from '../../Api/message' 
export default {
  components: {
    MtHeader:header,
  },
  data(){
    return{
      title:'消息',
    }
  },
  methods: {
    init(){

    },
    handleClose() {
      console.log(this.$store)
    }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
.page-message {
  height: calc(100% - 0.4rem);
  .container{
    height: calc(100% - 40px);
    .message-item-box{
      height: .55rem;
      display: flex;
      padding: 0 .15rem;
      background-color: #fff;
      border-bottom:1px solid #eee;
      .message-left{
        height: 100%;
        width: .5rem;
        position: relative;
        img{
          width: .4rem;
          height: .4rem;
          border-radius: 50%;
          display:block; 
          margin-top: .075rem
        }
        .Bubble{
          position: absolute;
          top: 0;
          right: - .2rem;
        }
      }
      .message-middle{
        height: 100%;
        width:calc(100% - 1rem);
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;  overflow: hidden;   
        span{
          font-size: .14rem;
          color: #444;
          height: .3rem;
          line-height: .3rem;
          display:block;
        }
        p{
          font-size: .11rem;
          color: #666;
        }
      }
      .message-right{
        height: 100%;
        width: .5rem;
        p{
          font-size: .1rem;
          text-align:right;
          color: #999;
          margin-top: .1rem
        }
      }
    }
  }
}
</style>