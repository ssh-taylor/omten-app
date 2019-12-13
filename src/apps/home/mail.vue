<!--
 * @Author: your name
 * @Date: 2019-12-04 15:28:02
 * @LastEditTime: 2019-12-13 10:41:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\home\mail.vue
 -->
<template>
  <div class="page-mail">
    <mt-header :title="title"></mt-header>
    <div class="classify">
      <div class="department">
        <span style="background-color:#228B22" class="icon-box icon iconfont icon-bumen"></span>
        <p class="text">按部门查找</p>
      </div>
      <div class="role">
        <span style="background-color:#00B2EE" class="icon-box icon iconfont icon-jiaoseguanli"></span>
        <p class="text">按角色查找</p>
      </div>
      <div class="search-box" v-for="(value, key, index) in totalQyList" v-if="value.length!==0">
      <div class="search-href font-number" :id="key">{{key}}</div>
      <div class="search-content">
        <ul>
          <li v-for="item in value" @click="linkToRzmx(item)">
            <div class="picture"><img src="../../assets/logo.png" alt=""></div>
            <p>{{item.F_RealName}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="lyss-init-link">
      <ul>
        <li v-for="link in links">
          <a class="font-number" :href="link.link" >{{link.linkName}}</a>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
import header from "../commons/header";
import { IndexList, IndexSection, cell } from "mint-ui";
import { getPy } from "../../utils/util";
export default {
  components: {
    MtIndexList: IndexList,
    MtIndexSection: IndexSection,
    MtCell: cell,
    MtHeader: header
  },
  data() {
    return {
      cityArr: [],
      title: "通讯录",
      totalQyList: {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: [],
        I: [],
        J: [],
        K: [],
        L: [],
        M: [],
        N: [],
        O: [],
        P: [],
        Q: [],
        R: [],
        S: [],
        T: [],
        U: [],
        V: [],
        W: [],
        X: [],
        Y: [],
        Z: [],
        1: []
      },
      links: [
        { link: "#A", linkName: "A" },
        { link: "#B", linkName: "B" },
        { link: "#C", linkName: "C" },
        { link: "#D", linkName: "D" },
        { link: "#E", linkName: "E" },
        { link: "#F", linkName: "F" },
        { link: "#G", linkName: "G" },
        { link: "#H", linkName: "H" },
        { link: "#I", linkName: "I" },
        { link: "#J", linkName: "J" },
        { link: "#K", linkName: "K" },
        { link: "#L", linkName: "L" },
        { link: "#M", linkName: "M" },
        { link: "#N", linkName: "N" },
        { link: "#O", linkName: "O" },
        { link: "#P", linkName: "P" },
        { link: "#Q", linkName: "Q" },
        { link: "#R", linkName: "R" },
        { link: "#S", linkName: "S" },
        { link: "#T", linkName: "T" },
        { link: "#U", linkName: "U" },
        { link: "#V", linkName: "V" },
        { link: "#W", linkName: "W" },
        { link: "#X", linkName: "X" },
        { link: "#Y", linkName: "Y" },
        { link: "#Z", linkName: "Z" },
        { link: "#1", linkName: "#" }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    selectedCity(v) {
      console.log(v);
    },
    init() {
      this.cityArr = this.$store.getters.userLists;
      let arr = [];
      this.cityArr.forEach(item => {
        let letter = getPy(item.F_RealName.slice(0, 1));
        this.totalQyList[letter].push(item);
      });
    },
    linkToRzmx(item) {
      // console.log(item);
    },
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
.page-mail {
  height: calc(100% - 0.4rem);
  font-size: 0.13rem;
}
.classify {
  font-size: 0.14rem;
  overflow-y: scroll;
  height: calc(100% - .4rem);
  .department,
  .role {
    height: 0.45rem;
    background: #fff;
    display: flex;
  }
  .icon-box {
    width: 0.35rem;
    height: 0.35rem;
    background-color: aqua;
    margin: 0.05rem 0.15rem;
    font-size: 0.25rem;
    color: #fff;
    text-align: center;
    line-height: 0.35rem;
    border-radius: 0.03rem;
  }
  .text {
    width: calc(100% - 0.65rem);
    border-bottom: 1px solid #eee;
    line-height: 0.45rem;
    color: #444;
  }
  .search-box{
    .font-number{
      background-color: #eee;
      padding-left: .1rem;
      line-height: .3rem;
    }
    .search-content{
      background-color: #fff;
      li{
        font-size: .15rem;
        height: .45rem;
        line-height: .45rem;
        display:flex;
        .picture{
          width: .35rem;
          height: .35rem;
          margin: .05rem .1rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
        p{
          width: calc(100% - .55rem);
          border-bottom: 1px solid #eee;
        }
      }
    }
  }
  .lyss-init-link{
    position: fixed;
    bottom: .5rem;
    right: .1rem;
    text-align: center;
    // font-size: .12rem;

  }
}
</style>
