<!--
 * @Author: your name
 * @Date: 2019-12-26 16:13:39
 * @LastEditTime : 2019-12-26 18:04:24
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\formshow.vue
 -->
<template>
  <div class="page-formshow">
    <template v-for="(item,index) in formseche">
      <formshow v-if="item.type!=='tabs'" :element="item" :formdata="formdata" :key="index"></formshow>
    </template>
  </div>
</template>

<script>
import formshow from "./formitem";
export default {
  components: {
    formshow
  },
  props: {
    formseche: {
      type: Array,
      default: []
    },
    formdata: {
      type:Object,
      default:{}
    }
  }
};
</script>

<style>
</style>