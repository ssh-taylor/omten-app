<!--
 * @Author: your name
 * @Date: 2019-12-10 19:41:36
 * @LastEditTime: 2019-12-13 19:32:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\Login.vue
 -->
<template>
  <div class="page-login">
    <div class="header">
      <div class="logo">
        <img src="../../assets/otlogo.png" alt="">
      </div>
    </div>
    <div class="container">
      <div class="form">
        <div class="userName">
          <span class="fa fa-user-o"></span>
          <input v-model="userInfo.username" type="text" placeholder="用户名">
        </div>
        <div class="password">
          <span class="fa fa-key"></span>
          <input v-model="userInfo.password" type="password" placeholder="输入密码">
        </div>
        <div class="button-group">
          <p>
            <span class="checkText"><input v-model="checked" type="checkbox">记住密码</span>
            <span class="text">忘记密码</span>
          </p>
          <mt-button @click.native="login" class="button" type="primary" size="normal">登录</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {login, saveUser} from '../../Api/user'
import { Button } from 'mint-ui'
export default {
  components:{
    MtButton:Button
  },
  data(){
    return{
      checked:true,
      userInfo:{
        username:'',
        password:''
      }
    }
  },
methods:{
  login(){
    login(this.userInfo).then(res=>{
        this.$store.dispatch('SaveUserInfo',res.baseinfo)
    }).then(msg => {
          this.$store.dispatch('SetMenu')
      }).then(meg=>{
      this.$store.dispatch('SetUserList').then(msg=>{
        this.$router.replace({path:'/'})
      })
    })
  }
}
}
</script>

<style type="text/scss" lang="scss" scoped>
.page-login{
  height:100%;
  box-sizing: border-box;
  .header{
    height: 30%;
    position: relative;
    .logo{
     display: block;
     width:50%;
     height:50%;
     position: absolute;
     top:calc(50% - 25%);
     left: calc(50% - 25%);
     img{
       width: 100%;
       height: 100%;
     }
    }
  }
  .container{
    height: 40%;
    .form{
      height: 100%;
      .userName,.password{
        height: .5rem;
        width: 75%;
        margin: .15rem auto 0;
        display: flex;
        .fa{
          font-size: .2rem;
          border: 1px solid rgb(14,81,168);
          border-radius: 50%;
          color: rgb(14,81,168);
          width: .3rem;
          height: .3rem;
          text-align: center;
          line-height: .3rem;
          margin: .15rem .1rem 0 0;
        }
        input{
          width: calc(100% - .3rem);
          display:block;
          margin: .05rem auto;
          border: none;
          outline: none;
          background: none!important;
          padding: 0 .1rem;
          border-bottom:1px solid rgb(166,182,210);
          margin: 0;
          font-size: .15rem;
        }
      }
      .button-group{
        text-align: center;
        font-size: .13rem;
        p{
          width: 70%;
          margin: .3rem auto .2rem;
          text-align: left;
          .checkText{
            color: #444;
            margin-right: .1rem;
            input{
              vertical-align: middle;
            }
          }
          .text{
            color: rgb(166,182,210)
          }
        }
        .button{
          width: 80%;
          height: .4rem;
          border-top-left-radius: .2rem;
          border-top-right-radius: .2rem;
          border-bottom-left-radius: .2rem;
          border-bottom-right-radius: .2rem;
        }
      }
    }
  }
}
</style>