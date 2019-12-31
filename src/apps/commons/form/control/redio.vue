<!--
 * @Author: your name
 * @Date: 2019-12-27 10:07:43
 * @LastEditTime : 2019-12-27 14:37:15
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\redio.vue
 -->
<template>
  <mt-radio title="radio list" v-model="value" :options="options"></mt-radio>
</template>

<script>
import { Radio } from "mint-ui";
export default {
  components: {
    MtRadio: Radio
  },
  data() {
    return {
      value: "",
      options: [
        {
          label: "optionA",
          value: "valueA"
        },
        {
          label: "optionB",
          value: "valueB"
        }
      ]
    };
  },
  created() {
  },
  methods: {
  }
}

</script>

<style>
</style>