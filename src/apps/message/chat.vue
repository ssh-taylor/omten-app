<!--
 * @Author: your name
 * @Date: 2019-12-12 16:01:32
 * @LastEditTime: 2019-12-13 19:35:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\message\chat.vue
 -->
<template>
  <div class="page-chat">
    <mt-header :title="userInfo.F_RealName">
      <router-link to="/" slot="left">
        <mt-button class="iconfont" icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="content-box">
      <div class="content-message">
        <div class="messsage-item" v-for="(item,index) in messageList.rows" :key="index">
          <div class="picture left">
            <img :src="src" alt="" />
          </div>
          <p class="message left-text">{{item.F_Content}}</p>
        </div>
        <!-- <div class="messsage-item">
          <div class="picture right">
            <img :src="src" alt="" />
          </div>
          <p class="message right-text">在的</p>
        </div> -->
      </div>
      <div class="textEditing">
        <div class="innerText">
          <input v-model="value" type="text" />
        </div>
        <div class="send">
          <button @click="sender">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Header, button } from "mint-ui";
import { getMessageList } from "@/Api/message";
export default {
  components: {
    MtHeader: Header,
    MtButton: button
  },
  data() {
    return {
      userInfo: {},
      rows: 10,
      messageList:[],
      page: 1,
      value: "",
      src:'http://192.168.1.200:8002/learun/adms/user/img?token2b58fd98-7533-479f-8a55-d26d86d8cb6f&loginMark=erpclient123456789&data1fc0e985-1373-4adc-b3a7-f68b89093f1c.jpg'
    };
  },
  mounted() {
    this.userInfo = this.$route.query.item;
    this.init();
  },
  methods: {
    init() {
      let item = {
        sendUserId: this.userInfo.F_MyUserId,
        recvUserId: this.userInfo.F_OtherUserId,
        keyword: ""
      };
      let pagination = {
        row: this.rows,
        page: this.page,
        sord: "DESC",
        sidx: "F_CreateDate"
      };
      getMessageList(pagination, item, {}).then(data => {
        this.messageList = data
      });
    },
    sender() {
      console.log(this.value);
    }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
.page-chat {
  font-size: 0.14rem;
  height: 100%;
  .iconfont {
    color: #fff;
  }
  /deep/ .mint-header-title {
    line-height: 0.14rem;
    height: 0.14rem;
    overflow: none;
  }
  .content-box {
    height: calc(100% - 0.4rem);
    .content-message {
      height: calc(100% - 0.41rem);
      padding: .1rem .2rem 0;
      box-sizing: border-box;
    }
    .messsage-item{
      // border: 1px solid red;
      height: .5rem;
      clear: both;
      .picture{
        width: .4rem;
        height: .4rem;  
        img{
          width: 100%;
          height: 100%;
          border-radius:.05rem; 
        }
      }
      .message{
        background: #fff;
        display: inline;
        padding: .05rem;
      }
      .left,.left-text{
        float: left;
      }
      .left-text{
        position: relative;
        margin-right: .1rem;
        max-width: 80%;
      }
      .left-text::before{
        width: 0;
        height: 0;
        content:'';
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        border-right: 5px solid #fff;
        position: absolute;
        top: 50%;
        left: -5px;
      }
      .right,.right-text{
        float: right;
        margin-left: .1rem;
        position: relative;
      }
      .right-text::after{
         width: 0;
        height: 0;
        content:'';
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        border-left: 5px solid #fff;
        position: absolute;
        top: 50%;
        right: -5px;
      }
    }
    .textEditing {
      background-color: #fcfcfc;
      border-top: 1px solid #eee;
      height: 0.4rem;
      display: flex;
      padding: 0 0.2rem;
      .innerText {
        width: 80%;
        height: 0.4rem;
        text-align: right;
        line-height: 0.4rem;
        margin-right: 0.1rem;
        input {
          height: 0.22rem;
          width: 100%;
          outline: none;
          border: 1xp solid #eee;
        }
      }
      .send {
        line-height: 0.4rem;
        width: 20%;
        button {
          border: none;
          height: 0.28rem;
          width: 100%;
          outline: none;
          background: #26a2ff;
          color: #fff;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>