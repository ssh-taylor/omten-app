<!--
 * @Author: your name
 * @Date: 2019-12-04 16:50:10
 * @LastEditTime: 2019-12-09 19:58:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\header.vue
 -->
<template>
  <div id="tabber">
    <mt-header :title="title">
      <mt-button @click="handleClose" slot="left">华谕科技</mt-button>
      <mt-button style="margin-right:20px;" icon="icon iconfont icon-sousuo1" slot="right"></mt-button>
      <mt-button icon="icon iconfont icon-icon-" slot="right"></mt-button>
    </mt-header>
    <div class=""></div>
  </div>
</template>

<script>
import { Header, Button } from "mint-ui";
export default {
  components: {
    MtHeader: Header,
    MtButton: Button
  },
  props:['title'],
  data(){
    return{

    }
  },
  methods: {
    handleClose() {}
  },
};
</script>

<style type="text/scss" lang="scss" scoped>

</style>