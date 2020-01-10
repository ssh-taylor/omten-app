<!--
 * @Author: your name
 * @Date: 2019-12-27 16:19:04
 * @LastEditTime : 2020-01-06 19:17:05
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\dialogselect.vue
 -->
<template>
  <div class="until-datetime">
    <div class="datetime">
      <span class="label">{{element.title}}</span>
      <div class="content">
        <input class="input" placeholder="自动生成" :class="disabled===true?'view':'edit'" v-model="currentValue" disabled="true" readonly="true" type="text">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    element:{
      type: Object,
      default:{}
    },
    value:[String,Number],
    disabled:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      currentValue: this.value==''?'':this.value,
    };
  },
  created() {
    // this.init()
    console.log(this.value,'datetime')
  },
  methods: {
   
  }
};
</script>

<style scoped>
.datetime {
  height: 0.4rem;
  background-color: #fff;
  padding: 0.05rem 0.1rem;
  font-size: 0.16rem;
  display: flex;
}
.datetime .label {
  line-height: 0.4rem;
  text-align: center;
  width: 20%;
}
.datetime .content {
  line-height: 0.4rem;
  padding-left: 0.05rem;
  height: 100%;
  display: flex;
  align-items: center;
}
.content > input {
   outline: none;
  width: 100%;
  padding: 0;
  padding-left: .05rem;
  font-size: 0.17rem;
  display: block;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
   background-color: #fff;
}
.view{
  border: none;
  height: .3rem;
  border-bottom:1px solid #999; 
}
.edit{
  height: 0.25rem;
 border: #1e90ff 1px dashed;
}
</style>