<!--
 * @Author: your name
 * @Date: 2019-12-27 17:32:50
 * @LastEditTime : 2019-12-30 09:43:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\common\input.vue
 -->
<template>
  <div class="input-box">
    <input type="text" readonly="true"/>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.input-box {
  line-height: 0.4rem;
  width: 100%;
  /* padding-left: 0.05rem; */
  height: 100%;
  display: flex;
  align-items: center
}
.input-box > input {
  outline: none;
  height: 0.25rem;
  width: 100%;
  padding: 0;
  font-size: 0.17rem;
  display: block;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
</style>