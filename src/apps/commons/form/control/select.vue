<!--
 * @Author: your name
 * @Date: 2019-12-27 16:19:04
 * @LastEditTime : 2020-01-04 19:30:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\dialogselect.vue
 -->
<template>
  <div class="select">
    <span class="label">{{element.title}}</span>
    <div class="content">
         <select class="input" :class="disabled === true?'view':'edit'" v-model="currentValue" @change="handleclick(currentValue)" :disabled="disabled">
             <option :value="item.value" v-for="(item,index) in datasource" :key="index">{{item.title}}</option>
         </select>
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
      currentValue:this.multiple?(this.value?this.value.split(","):[]):this.value,
      datasource: []
    }
  },
  created(){
    this.init()
    console.log(this.value,'select')
  },
  methods:{
    init(){
      if (this.element.dftype === "custom") {
        this.datasource = this.element.items;
        return;
      }
      if (this.element.dftype === "data") {
        store.getdatabysourceset(this.element.sourceset, data => {
          this.datasource = data;
        });
        return;
      }
      if (this.element.dftype === "link") {
        store.getdatabydongset(this.element.dongset, data => {
          this.datasource = data;
        });
        return;
      }
      this.datasource = [];
    },
    handleclick(val) {
      // if (this.multiple) this.$emit("input", this.currentValue.join(","));else
       this.$emit("input", this.currentValue);
      this.$emit("change", val);
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
    width: 20%;
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
  width: 100%;
  padding: 0;
  padding-left:.05rem; 
  font-size: 0.17rem;
  display: block;
  box-sizing: border-box;
  color: #444;
  border: none;
  background-color: #fff;
}
.edit{
  height: 0.25rem;
   border: #1e90ff 1px dashed!important;
}
.view{
  height: .3rem;
 border-bottom: 1px solid #999!important;
 appearance:none; 
 -webkit-appearance:none;
 -moz-appearance:none;
}
</style>