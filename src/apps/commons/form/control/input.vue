<!--
 * @Author: your name
 * @Date: 2019-12-27 17:55:49
 * @LastEditTime : 2019-12-30 18:36:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\input.vue
 -->
<template>
  <div class="until-input">
    <span class="label">{{element.title}}</span>
    <div class="content">
      <input type="text" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      default: {}
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
  height: 0.25rem;
  width: 100%;
  padding: 0;
  font-size: 0.17rem;
  display: block;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border: #1e90ff 1px dashed;
}
</style>