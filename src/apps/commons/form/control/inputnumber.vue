<!--
 * @Author: your name
 * @Date: 2019-12-27 17:55:49
 * @LastEditTime : 2020-01-04 19:28:03
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\input.vue
 -->
<template>
  <div class="until-inputnumber">
    <span class="label">{{element.title}}</span>
    <div class="content">
      <span @click="subtract" v-show="disabled === false">-</span>
      <input
        class="input"
        v-model="currentValue"
        type="number"
        @change="handlechange(currentValue)"
        :disabled="disabled"
        :class="disabled===true?'view':'edit'"
      />
      <span @click="adder"  v-show="disabled === false">+</span>
    </div>
  </div>
</template>

<script>
import { Field } from "mint-ui";
export default {
  components: {
    MtField: Field
  },
  props: {
    element: {
      type: Object,
      default: {}
    },
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue:this.value,
      datasource: []
    };
  },
  created() {
    this.init();
    console.log(this.value,'计数器')
  },
  watch: {
    element: {
      deep: true,
      handler(val) {
        this.init();
      }
    },
    currentValue(newval) {
      this.currentValue = newval;
    }
  },
  methods: {
    init() {
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
    subtract() {
      if (this.currentValue> -999) {
        this.currentValue--;
        this.handlechange(this.currentValue);
      }
    },
    adder() {
     if(this.currentValue<999){
        this.currentValue++;
        this.handlechange(this.currentValue);
     }
    },
    handlechange(val) {
      let element = val;
      if (element === "") {
        this.number = 0;
      }
      if (this.currentValue.length > 4) {
        this.currentValue = parseInt(this.currentValue.toString().slice(0, 4));
      }
      if (
        this.currentValue.length > 1 &&
        parseInt(this.currentValue.toString().slice(0, 1)) === 0
      ) {
        this.currentValue = parseInt(this.currentValue.toString().substring(1));
      }
      this.$emit('change',val)
    }
  }
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
  width: 20%;
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
  width: 0.7rem;
  padding-left: 0.05rem;
  line-height: 0.27rem;
  font-size: 0.17rem;
  display: block;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background: #fff;
}
.view{
  height: .3rem;
  border: none;
  border-bottom: 1px solid #999;
  text-align: center;
}
.edit{
  height: 0.27rem;
  border-top: #1e90ff 1px dashed;
  border-bottom: #1e90ff 1px dashed;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
.content > span {
  border: 1px dashed #1e90ff;
  height: 0.25rem;
  line-height: 0.25rem;
  font-size: 0.2rem;
  font-weight: bold;
  width: 0.2rem;
  text-align: center;
}
.content > span:nth-of-type(1) {
  border-right: none;
}
.content > span:nth-of-type(2) {
  border-left: none;
}
</style>