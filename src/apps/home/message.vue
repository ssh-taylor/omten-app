<!--
 * @Author: your name
 * @Date: 2019-12-04 14:34:52
 * @LastEditTime: 2019-12-13 17:18:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\home\message.vue
 -->
<template>
  <div class="page-message">
    <mt-header :title="title"></mt-header>
    <div class="container">
      <mt-loadmore
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        :auto-fill="false"
        ref="loadmore"
      >
        <div class="message-item-box" @click="skip(item)" v-for="(item,index) in messageList" :key="index">
          <div class="message-left">
            <img :src="item.F_HeadIcon" alt />
            <span v-if="item.F_IsRead === 2" class="Bubble"></span>
          </div>
          <div class="message-middle">
            <span>{{item.F_RealName}}</span>
            <p>{{item.F_Content}}</p>
          </div>
          <div class="message-right">
            <p>{{item.F_Time}}</p>
          </div>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import header from "../commons/header";
import { getcontactlist } from "../../Api/message";
import { getuserlistss} from "@/Api/user";
import { Loadmore } from "mint-ui";
import settings from '@/utils/settings'
export default {
  components: {
    MtHeader: header,
    MtLoadmore: Loadmore
  },
  data() {
    return {
      title: "消息",
      messageList: [],
      allLoaded: false,
      page:1
    };
  },
  created() {
    this.init(1);
  },
  methods: {
    init(flag) {
      let userId = this.$store.getters.userInfo.userId;
      let userList = this.$store.getters.userLists;
      let pagination = {
        rows: 12,
        page: this.page,
        sord: "DESC",
        sidx: "",
        records:0,
      };
      getcontactlist(pagination, userId).then(data => {
        data.forEach(item => {
           item['F_HeadIcon'] = this.geturl(item.F_OtherUserId)
          userList.forEach(i => {
            if (item.F_OtherUserId === i.F_UserId) {
              item["F_RealName"] = i.F_RealName;
              let before = i.F_HeadIcon!== null ? i.F_HeadIcon : '.jpg'
              item.F_HeadIcon += before 
              item.F_Time = item.F_Time.slice(5, 10)
              this.messageList.push(item);
            }
          });
        });
      });
      this.page += 1
    },  
    loadBottom: function() {
      this.$refs.loadmore.onBottomLoaded();
      this.init();
    },
    skip(val) {
      this.$router.push({ path: "/chat", query: { item:val} });
    },
    geturl(userId){
        let url = settings.apiUrl+'/learun/adms/user/img?token'+this.$store.getters.token+'&loginMark='+settings.loginMark+'&data'+userId
         return url
    }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
.page-message {
  height: calc(100% - 0.4rem);
  .container {
    height: calc(100% - 40px);
    overflow-y: scroll;
    .message-item-box {
      height: 0.55rem;
      display: flex;
      padding: 0 0.15rem;
      background-color: #fff;
      border-bottom: 1px solid #eee;
      .message-left {
        height: 100%;
        width: 0.5rem;
        position: relative;
        img {
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          display: block;
          margin-top: 0.075rem;
        }
        .Bubble {
          position: absolute;
          top: 0.07rem;
          right: 0.07rem;
          width: 0.08rem;
          height: 0.08rem;
          background: #ff3030;
          border-radius: 50%;
        }
      }
      .message-middle {
        height: 100%;
        width: calc(100% - 1rem);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow: hidden;
        span {
          font-size: 0.14rem;
          color: #444;
          height: 0.3rem;
          line-height: 0.3rem;
          display: block;
        }
        p {
          font-size: 0.11rem;
          color: #666;
        }
      }
      .message-right {
        height: 100%;
        width: 0.5rem;
        p {
          font-size: 0.1rem;
          text-align: right;
          color: #999;
          margin-top: 0.1rem;
        }
      }
    }
  }
}
/deep/ .mint-loadmore-text{
  font-size: .12rem;
}
</style>