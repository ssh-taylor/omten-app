<!--
 * @Author: your name
 * @Date: 2019-12-12 16:01:32
 * @LastEditTime : 2019-12-18 11:31:10
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\message\chat.vue
 -->
<template>
  <div class="page-chat">
    <mt-header :title="userInfo.F_RealName">
      <router-link to="/" slot="left">
        <mt-button class="iconfont" icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click.native="pageChatMessage"></mt-button>
    </mt-header>
    <div class="content-box">
      <mt-loadmore
        :top-method="loadMore"
        @bottom-status-change="handleBottomChange"
        :bottom-all-loaded="allLoaded"
        ref="loadmore"
        :auto-fill="false"
        class="content-message"
      >
        <div class="messsage-item" v-for="(item,index) in messageList" :key="index">
          <div
            v-if="item.IntervalF_Date > 180"
            class="message-date"
          >{{item.F_CreateDate.substring(11,16)}}</div>
          <div
            class="picture"
            :class="item.F_OtherUserId === userInfo.F_OtherUserId?'left':'right'"
          >
            <img :src="item.F_OtherUserId === userInfo.F_OtherUserId?RecvHeadIcon:sendHeadIcon" alt />
          </div>
          <p
            class="message"
            :class="item.F_OtherUserId === userInfo.F_OtherUserId?'left-text':'right-text'"
          >{{item.F_Content}}</p>
        </div>
      </mt-loadmore>
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
import { Header, button, Loadmore, Toast } from "mint-ui";
import { getMessageList, sendMessage} from "@/Api/message";
import { time,session } from "../../utils/util";
export default {
  components: {
    MtHeader: Header,
    MtButton: button,
    MtLoadmore: Loadmore
  },
  data() {
    return {
      userInfo: {},
      rows: 11,
      messageList: [],
      page: 1,
      allLoaded: false, //false：加载未完成,可以继续加载；true：加载完成，不能继续加载
      bottomStatus: "",
      loading: false,
      value: "",
      sendHeadIcon: "",
      RecvHeadIcon: ""
    };
  },
  mounted() {
    this.userInfo = session.getSession('userInfo');
    this.sendHeadIcon = this.$store.getters.userico;
    this.RecvHeadIcon = this.userInfo.F_HeadIcon;
    this.loadMore();
  },
  methods: {
    loadMore() {
      this.allLoaded = true;
      let item = {
        sendUserId: this.userInfo.F_MyUserId,
        recvUserId: this.userInfo.F_OtherUserId,
        keyword: ""
      };
      let pagination = {
        rows: this.rows,
        page: this.page,
        sord: "DESC",
        sidx: "F_CreateDate"
      };
      getMessageList(pagination, item, {}).then(data => {
        if (data.rows.length <= 0) {
          this.allLoaded = false;
          this.$refs.loadmore.onBottomLoaded();
        } else {
          data.rows.forEach((item, index) => {
            
            this.messageList.unshift(item);
            this.allLoaded = false;
            this.$refs.loadmore.onBottomLoaded();
          });
        }
      });
      this.page += 1;
      this.scrollToBottom();
    },
    sender() {
      let message = {
        F_SendUserId: this.userInfo.F_MyUserId,
        F_RecvUserId: this.userInfo.F_OtherUserId,
        F_Content: this.value,
        F_IsRead: 1
      };
      if (message.F_Content !== "") {
        sendMessage(message).then(data => {
          let dataItem = {
            F_Content: this.value,
            F_CreateDate: time(),
            F_RecvUserId: this.userInfo.F_OtherUserId,
            F_RecvUserName: this.userInfo.F_RealName,
            F_SendUserId: this.userInfo.F_MyUserId,
            IntervalF_Date:(Date.parse(time()) - Date.parse(this.messageList[this.messageList.length - 1].F_CreateDate)) /1000
          };
          this.messageList.push(dataItem);
          this.value = "";
          this.scrollToBottom()
        });
      } else {
        Toast({
          message: "请输入内容",
          position: "midden",
          duration: 1000
        });
      }
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    scrollToBottom() {
      this.$nextTick(() => {
        let contanier = this.$el.querySelector(".mint-loadmore");
        contanier.scrollTop = contanier.scrollHeight;
      });
    },
    pageChatMessage(){
      this.$router.push({path:'/chatsetting'})
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
      padding: 0.1rem 0.2rem 0;
      box-sizing: border-box;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      touch-action: none;
    }
    .messsage-item {
      // border: 1px solid red;
      height: 100%;
      clear: both;
      overflow: hidden;
      margin-top: 0.1rem;
      .message-date {
        margin-bottom: 0.1rem;
        text-align: center;
        color: #999;
      }
      .picture {
        width: 0.4rem;
        height: 0.4rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.05rem;
        }
      }
      .message {
        background: #fff;
        display: inline-block;
        padding: 0.05rem;
        max-width: calc(100% - 0.4rem);
        word-wrap: break-word;
        word-break: break-all;
        // overflow: hidden;
        margin-bottom: 0.1rem;
      }
      .left,
      .left-text {
        float: left;
      }
      .left-text {
        position: relative;
        margin-left: 0.1rem;
        max-width: 80%;
      }
      .left-text::before {
        width: 0;
        height: 0;
        content: "";
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        border-right: 5px solid #fff;
        position: absolute;
        top: 0.1rem;
        left: -5px;
      }
      .right,
      .right-text {
        float: right;
      }
      .right-text {
        margin-right: 0.1rem;
        position: relative;
        max-width: 80%;
      }
      .right-text::after {
        width: 0;
        height: 0;
        content: "";
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        border-left: 5px solid #fff;
        position: absolute;
        top: 0.1rem;
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