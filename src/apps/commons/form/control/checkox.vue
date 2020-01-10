<!--
 * @Author: your name
 * @Date: 2019-12-27 10:05:44
 * @LastEditTime : 2020-01-04 20:36:44
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\checkox.vue
 -->
<template>
  <div class="until-checkbox">
    <mt-checklist
      :title="element.title"
      disable="disabled"
      v-model="currentValue"
      :options="datasource"
      @change="handleclick"
      v-if="disabled===false"
    ></mt-checklist>
    <div class="checkbox-box" v-if="disabled === true">
      <span class="checkbox-label">{{element.title}}</span>
      <p class="checkbox-text">{{option}}</p>
    </div>
  </div>
</template>

<script>
import { Checklist } from "mint-ui";
export default {
  components: {
    MtChecklist: Checklist
  },
  props: {
    element: {
      type: Object
    },
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value ? this.value.split(",") : [],
      datasource: []
    };
  },
  computed:{
    option(){
      let checkboxvalue = [];
        this.currentValue.forEach(item => {
          const svalue = this.element.items.find(s => s.value === item);
          if (svalue) checkboxvalue.push(svalue.title);
        });
        return checkboxvalue.join(",");
    }
  },
  created() {
    this.init();
    console.log(this.value,'checkbox')
  },
  watch: {
    element: {
      deep: true,
      handler(val) {
        this.init();
      }
    },
    value(val) {
      if (val) this.currentValue = val.split(",");
    }
  },
  methods: {
    init() {
      if (this.element.dftype === "custom") {
        this.datasource = this.element.items.map(item => {
          return { value: item.value, label: item.title };
        });
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
      this.$emit("input", this.currentValue.join(","));
      this.$emit("change", val);
      // console.log(val)
    }
  }
};
</script>

<style>
.checkbox-box{
 height: 0.4rem;
  background-color: #fff;
  padding: .05rem .1rem;
  font-size: .16rem;
  display: flex;
}
.checkbox-label{
    line-height: .4rem;  
    text-align: center;
    max-width: 25%;
    min-width: 20%;
}
.checkbox-text{
  border-bottom: 1px solid #999;
  line-height: 0.3rem;
  padding-left: 0.05rem;
  height: .3rem;
  margin: .05rem 0;
  flex-grow: 1;
}
.mint-checklist {
  display: flex !important;
  flex-wrap: wrap;
  background-color: #fff !important;
  padding: 0.05rem 0.1rem;
  line-height: 0.4rem;
}
.mint-checklist-title {
  min-width: 20% !important;
  max-width: 25% !important;
  text-align: center !important;
  font-size: 0.16rem !important;
  color: #000 !important;
  margin: 0 !important;
}
.mint-checklist-label {
  padding: 0 0.05rem 0 0 !important;
}
.mint-checkbox-label {
  margin: 0 !important;
}
.mint-cell-wrapper {
  background-image: none !important;
  padding: 0 0.05rem !important;
}
.mint-cell {
  height: 100%;
}
</style>