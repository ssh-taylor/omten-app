<!--
 * @Author: your name
 * @Date: 2019-12-04 16:50:10
 * @LastEditTime: 2019-12-10 15:54:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\header.vue
 -->
<template>
  <div id="tabber">
    <mt-header :title="title">
      <mt-button slot="left">华谕科技</mt-button>
      <mt-button style="margin-right:20px;" icon="icon iconfont icon-sousuo1" slot="right" @click.native="search"></mt-button>
      <mt-button icon="icon iconfont icon-icon-" slot="right" @click.native="openmore"></mt-button>
    </mt-header>
    <div class="picke" v-if="visibility">
      <div class="picke-item" @click="sweepCode">
        <span class="icon iconfont icon-saoyisao"></span>
        <p class="text">扫一扫</p>
      </div>
    </div>
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
      visibility:false,
    }
  },
  methods: {
    openmore() {
      if(this.visibility === false){
        this.visibility = true
      }else if(this.visibility === true){
        this.visibility = false
      }
    },
    sweepCode(){
      this.$router.push({path:'/code'})
    },
    search(){
      this.$router.push({path:'/search'})
    }
  },
};
</script>

<style type="text/scss" lang="scss" scoped>
#tabber{
  position: relative;
  height: .4rem;
  font-size: .16rem;
   .picke{
    width: 1.3rem;
    position: absolute;
    right: 0;
    bottom:- .45rem;
    background-color:#4D4D4D;
    color: #FCFCFC;
    border-radius: .05rem;
    .picke-item{
      display: flex;
      padding:.1rem 0 .1rem .15rem;
      .iconfont{
        display: inline-block;
        font-size: .24rem;
        margin-right: .05rem;
        vertical-align: middle;
      }
      .text{
        font-size: .15rem;
        line-height: .24rem;
        width: calc(100% - .3rem)
      }
    }
  }
  .picke::before{
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right:5px solid transparent;
    border-bottom: 5px solid #4D4D4D;
    content: '';
    position: absolute;
    top: -5px;
    right: 15px;
  }
}
 
</style>