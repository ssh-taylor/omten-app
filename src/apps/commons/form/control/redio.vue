<!--
 * @Author: your name
 * @Date: 2019-12-27 10:07:43
 * @LastEditTime : 2020-01-04 20:18:37
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\redio.vue
 -->
<template>
<div class="until-radio">
  <mt-radio v-if="disabled===false" :title="element.title" value-key="title" v-model="currentValue" :options="datasource" @change="handleclick"></mt-radio>
  <div class="radio-box" v-if="disabled === true">
    <span class="radio-label">{{element.title}}</span>
    <p class="radio-text">{{option.label}}</p>
  </div>
</div>
</template>

<script>
import { Radio } from "mint-ui";
export default {
  components: {
    MtRadio: Radio
  },
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
  data() {
    return {
      currentValue:this.value,
      datasource: [],
    };
  },
  computed:{
    option(){
      return this.datasource.find(i=>{return i.value==this.currentValue})
    }
  },
  created() {
    this.init()
  },
   watch: {
    element: {
      deep: true,
      handler(val) {
        this.init();
      }
    }
  },
  methods: {
    init(){
       if (this.element.dftype === "custom") {
        this.datasource = this.element.items.map(i=>{return{value:i.value,label:i.title}})
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
      this.$emit("input", this.currentValue);
      this.$emit("change", val);
    }
  }

}

</script>

<style>
.until-radio{
 
}
.radio-box{
 height: 0.4rem;
  background-color: #fff;
  padding: .05rem .1rem;
  font-size: .16rem;
  display: flex;
}
.radio-label{
    line-height: .4rem;  
    text-align: center;
    max-width: 25%;
    min-width: 20%;
}
.radio-text{
  border-bottom: 1px solid #999;
  line-height: 0.3rem;
  padding-left: 0.05rem;
  height: .3rem;
  margin: .05rem 0;
  flex-grow: 1;
}
.mint-radiolist{
  display: flex!important;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  background-color:#fff!important; 
  min-height: 0.4rem!important;
  padding: .05rem .1rem!important;
  position: relative;
}
.mint-radiolist-title{
  min-width: 20%!important;
  max-width: 25%!important;
  height: 100%;
  text-align: center!important;
  font-size: .16rem!important;
  color: #000!important;
  margin: 0!important;
  line-height: .4rem;
}
.mint-radiolist-label{
  padding: 0 .05rem 0 0!important;
}
.mint-radio-label{
  margin: 0!important;
}
.mint-cell-wrapper{
  background-image: none!important;
  padding: 0 .05rem!important;
}
.mint-cell{
  min-height: .4rem!important;
  background-image: none!important;
  line-height: .4rem!important;
}
</style>