<!--
 * @Author: your name
 * @Date: 2019-12-27 10:05:44
 * @LastEditTime : 2019-12-30 20:22:38
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\checkox.vue
 -->
<template>
  <mt-checklist :title="element.title" v-model="value" :options="datasource"></mt-checklist>
</template>

<script>
import { Checklist } from "mint-ui";
export default {
  components: {
    MtChecklist: Checklist
  },
  props: {
    element: {
      type: Object,
    },
    // value:[]
  },
  data() {
    return {
      value: [],
      datasource: []
    };
  },
  created(){
      this.init()
  },
  methods: {
    init() {
      if (this.element.dftype === "custom") {
        this.datasource = this.element.items.map(item=>{return{value:item.value,label:item.title}})
        return;
      }
      this.datasource = [];
    }
  }
};
</script>

<style scoped>
.mint-checklist{
    height: .4rem;
}
</style>