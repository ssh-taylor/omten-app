<!--
 * @Author: your name
 * @Date: 2019-12-27 16:19:04
 * @LastEditTime : 2019-12-30 18:35:57
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\dialogselect.vue
 -->
<template>
  <div class="select">
    <span class="label">{{element.title}}</span>
    <div class="content">
         <!-- <input class="input" type="text" v-model="value"  list="selectoption"/>
         <datalist id="selectoption">
             <option>选项1</option>
             <option>选项2</option>
         </datalist> -->
         <select class="input" name="" id="">
             <option value="1">选项1</option>
             <option value="2">选项2</option>
         </select>
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
.select {
  height: 0.4rem;
  background-color: #fff;
  padding: .05rem .1rem;
  font-size: .16rem;
  display: flex;
}
.select .label{
    line-height: .4rem;
    text-align: center;
}
.select .content {
  line-height: 0.4rem;
  padding-left: 0.05rem;
  height: 100%;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.content > .input {
  outline: none;
  height: 0.25rem;
  width: 100%;
  padding: 0;
  font-size: 0.17rem;
  display: block;
  box-sizing: border-box;
   border: #1e90ff 1px dashed;
   padding: 0 0 0 .05rem;
   color: #444;
}
</style>