<!--
 * @Author: your name
 * @Date: 2019-12-27 16:19:04
 * @LastEditTime : 2019-12-30 20:23:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\dialogselect.vue
 -->
<template>
  <div class="dialogselect">
    <span class="label">{{element.title}}</span>
    <div class="content">
         <input class="input" type="text" v-model="value" readonly="true" @focus="open"/>
    </div>
  </div>
</template>

<script>
export default {
  props:{
      element:Object
  },
  data(){
    return{
      value:''
    }
  },
  methods:{
    open(){
      
    }
  }
};
</script>

<style scoped>
.dialogselect {
  height: 0.4rem;
  background-color: #fff;
  padding: .05rem .1rem;
  font-size: .16rem;
  display: flex;
}
.dialogselect .label{
    line-height: .4rem;  
    text-align: center;
}
.dialogselect .content {
  line-height: 0.4rem;
  padding-left: 0.05rem;
  height: 100%;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.content > input {
  outline: none;
  height: 0.25rem;
  width: 100%;
  padding: 0;
  font-size: 0.17rem;
  display: block;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
   border: #1e90ff 1px dashed;
}
</style>