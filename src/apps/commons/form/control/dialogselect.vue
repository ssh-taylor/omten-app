<!--
 * @Author: your name
 * @Date: 2019-12-27 16:19:04
 * @LastEditTime : 2020-01-09 18:28:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\dialogselect.vue
 -->
<template>
  <div class="dialogselect">
    <span class="label">{{element.title}}</span>
    <div class="content">
         <input class="input" :class="disabled===true?'view':'edit'" :disabled="disabled" type="text" readonly v-model="currentvalue"  @focus="open"/>
    </div>
  </div>
</template>

<script>
export default {
  props:{
      element:{
        type:Object,
        default:{}
      },
      value:[String,Number],
      disabled:{
        type:Boolean,
        default:false
      }
  },
  data(){
    return{
      currentvalue:this.value,
    }
  },
  created(){
    this.init()
  },
  methods:{
    init(){
      console.log(this.value,'dialogselect')
    },
    open(){
      console.log(1111)
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
    /* width: 20%; */
    max-width: 25%;
    min-width: 20%;
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