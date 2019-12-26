<!--
 * @Author: your name
 * @Date: 2019-12-06 10:08:14
 * @LastEditTime : 2019-12-19 15:06:37
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\footer.vue
 -->
<template>
  <div id="tabber">
    <router-link class="tablebar-item" :class="{'active':selected.name==='home_message'}" :to="{path:'/message'}">
      <span class="icon iconfont icon-xiaoxi"></span>
      <span class="text">消息</span>
    </router-link>
    <router-link class="tablebar-item" :class="{'active':selected.name==='home_query'}" :to="{path:'/query'}">
      <span class="icon iconfont icon-iconfront-"></span>
      <span class="text">功能</span>
    </router-link>
     <router-link class="tablebar-item" :class="{'active':selected.name==='home_mail'}" :to="{path:'/mail'}">
      <span class="icon iconfont icon-tongxunlu"></span>
      <span class="text">通讯录</span>
    </router-link>
    <router-link class="tablebar-item" :class="{'active':selected.name==='home_mine'}" :to="{path:'/mine'}">
      <span class="icon iconfont icon-sousuo"></span>
      <span class="text">我的</span>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "app_header",
  data() {
    return {
      selected: "home_message"
    };
  },
  watch:{
    '$route'(newval){
      this.selected = newval
      console.log(newval)
    }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
#tabber{
  height: .4rem;
  position: fixed;
  bottom:0;
  width: 100%;
  background-color:#fff; 
  clear: both;
  .tablebar-item{
    width: 25%;
    height: .4rem;
    display: inline-block;
    float: left;
    text-align: center;
  }
   span{
      display: block;
    }
    .icon{
      font-size: .18rem!important;
      margin-top: .05rem;
    }
    .text{
      font-size: .1rem;
      letter-spacing: .02rem;
      transform: scale(0.8);
      line-height: .1rem;
      color: #666;
    }
}
.active{
  color: #3BB1EF!important;
  .text{
    color: #3BB1EF!important;
  }
}
</style>