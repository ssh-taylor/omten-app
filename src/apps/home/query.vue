<!--
 * @Author: your name
 * @Date: 2019-12-04 15:41:00
 * @LastEditTime: 2019-12-12 19:16:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\home\query.vue
 -->
<template>
  <div class="page-query">
    <mt-header :title="title"></mt-header>
    <div class="container">
      <div style="margin-top:.1rem;" v-for="(item,index) in system" :key="index">
        <div  class="moduleMenu" v-if="item.children.length !== 0">
          <div class="menuTitle">{{item.F_FullName}}</div>
          <div class="module-box" v-for="(i,index) in item.children" :key="index">
            <div class="moduleItem">
              <span class="iconfont" :class="icon"></span>
              <p>{{i.F_FullName}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import header from "../commons/header";

export default {
  components: {
    MtHeader: header
  },
  data() {
    return {
      title: "应用功能",
      system: [],
      icon:'fa fa-camera-retro'
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.system = this.$store.getters.getallmenus;
      console.log(this.$store)
    }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
.page-query {
  height: calc(100% - 0.4rem);
  font-size: 0.16rem;
  .container {
    .moduleMenu,
    .applymodule {
      background-color: #fff;
      padding: 0.1rem 0;
      .menuTitle,
      .applyTitle {
        margin: 0 0.1rem .1rem;
        font-size: 0.15rem;
        color: #444;
        line-height: 0.3rem;
        padding-left: 0.05rem;
        border-bottom: 1px solid #eee;
      }
      .module-box,
      .apply-box {
        display: flex;
        flex-wrap: wrap;
        margin: 0 0.1rem;
        border-left: 1px solid #eee;
        .moduleItem,
        .apply-item {
          width: calc(100% / 3 - 1px);
          height: 0.6rem;
          text-align: center;
          border-bottom: 1px solid #eee;
          border-right: 1px solid #eee;
          border-top:1px solid #eee; 
          .iconfont {
            font-size: 0.25rem;
            display: block;
            height: 0.4rem;
            line-height: 0.4rem;
            color: #00b2ee;
          }
          p {
            font-size: 0.12rem;
            color: #999;
          }
        }
      }
    }
  }
}
</style>