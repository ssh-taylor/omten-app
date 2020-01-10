<!--
 * @Author: your name
 * @Date: 2019-12-27 17:55:49
 * @LastEditTime : 2020-01-04 19:25:37
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\input.vue
 -->
<template>
  <div class="until-input">
    <span class="label">{{element.title}}</span>
    <div class="content">
      <input class="input" :class="disabled===true?'view':'edit'" type="text" :disabled="disabled" v-model="currentValue" @change="handlechange(currentValue)" :placeholder="element.options.placeholder">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      default: {}
    },
    value:[String,Number],
    disabled:{
      type:Boolean,
      default:false,
    }
  },
  data(){
    return{
      currentValue:this.value,
      datasource: []
    }
  },
   watch: {
    element: {
      deep: true,
      handler(val) {
        this.init();
      }
    }
  },
  created(){
    this.init()
    console.log(this.value,'input')
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
    handlechange(val){
      console.log(this.datasource)
      this.$emit('change',val)
    }
  }
};
</script>

<style scoped>
.until-input {
  height: 0.4rem;
  padding: 0.05rem 0.1rem;
  background-color: #fff;
  display: flex;
    font-size: 0.16rem;
}
.label {
  line-height: 0.4rem;
  text-align: center;
  width: 20%;
}
.content {
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