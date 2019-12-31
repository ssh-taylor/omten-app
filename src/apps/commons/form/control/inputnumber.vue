<!--
 * @Author: your name
 * @Date: 2019-12-27 17:55:49
 * @LastEditTime : 2019-12-30 20:16:08
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\input.vue
 -->
<template>
  <div class="until-inputnumber">
    <span class="label">{{element.title}}</span>
    <div class="content">
      <span @click="subtract">-</span>
      <input class="input" v-model="number" type="number" @change="exavalue($event)">
      <span @click="adder">+</span>
    </div>
  </div>
</template>

<script>
import { Field } from 'mint-ui';
export default {
    components:{
        MtField:Field
    },
  props: {
    element: {
      type: Object,
      default: {}
    },
  },
  data(){
        return{
            number:0,
        }
    },
  mounted(){
      console.log(this.element)
  },
  methods:{
      subtract(){
          this.number --
      },
      adder(){
          this.number ++
      },
      exavalue(e){
        let element = e.target.value
        console.log(element)
        if(element===""){
            this.number = 0
        }
        if(this.number.length>6){
            this.number = parseInt(this.number.toString().slice(0,6))
        }
        if(this.number.length>1&&parseInt(this.number.toString().slice(0,1)) === 0){
            this.number = parseInt(this.number.toString().substring(1))
        }
      }
  },
};
</script>

<style scoped>
.until-inputnumber {
  height: 0.4rem;
  padding: 0.05rem 0.1rem;
  background-color: #fff;
  display: flex;
    font-size: 0.16rem;
}
.label {
  line-height: 0.4rem;
  text-align: center;
}
.content {
  line-height: 0.4rem;
  padding-left: 0.05rem;
  height: 100%;
  display: flex;
  align-items: center;
  color: #444;
}
.content > input {
  outline: none;
  height: 0.27rem;
  width:.7rem;
  padding-left: .05rem;
  line-height: .27rem;
  font-size: 0.17rem;
  display: block;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border-top: #1e90ff 1px dashed;
  border-bottom: #1e90ff 1px dashed;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
.content>span{
    border: 1px dashed #1e90ff;
    height: .25rem;
    line-height: .25rem;
    font-size: .2rem;
    font-weight: bold;
    width: .2rem;
    text-align: center;
}
.content>span:nth-of-type(1){
    border-right: none;
}
.content>span:nth-of-type(2){
    border-left: none;
}
</style>