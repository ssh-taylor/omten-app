<!--
 * @Author: your name
 * @Date: 2019-12-27 16:19:04
 * @LastEditTime : 2019-12-31 10:01:08
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\dialogselect.vue
 -->
<template>
  <div class="until-datetime">
    <div class="datetime">
      <span class="label">{{element.title}}</span>
      <div class="content">
        <div class="input">
          <input class="year" type="text" placeholder="年">-
          <input class="month" type="text" placeholder="月">-
          <input class="day" type="text" placeholder="日">
          <input class="hour" type="text" placeholder="时">:
          <input class="minute" type="text" placeholder="分">:
          <input class="second" type="text" placeholder="秒">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import
export default {
  props: {
    element: Object
  },
  data() {
    return {
      value: "",
      dateformat:this.element.dateformat,
    };
  },
  mounted(){
    console.log(this.element,1111)
  },
  methods: {
    open() {}
  }
};
</script>

<style scoped>
.datetime {
  height: 0.4rem;
  background-color: #fff;
  padding: 0.05rem 0.1rem;
  font-size: 0.16rem;
  display: flex;
}
.datetime .label {
  line-height: 0.4rem;
  text-align: center;
}
.datetime .content {
  line-height: 0.4rem;
  width: 80%;
  padding-left: 0.05rem;
  height: 100%;
  display: flex;
  align-items: center;
}
.content .input {
  height: 0.25rem;
  width: 100%;
  padding: 0;
  display: flex;
  line-height: .25rem;
  border: #1e90ff 1px dashed;
}
.input>input{
  padding: 0;
  font-size: 0.17rem;
  display: block;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border: none;
  text-align: center;
}
.year{
  width: .5rem;
}
.month{
  width: .4rem;
}
.day{
  width: .4rem;
}
.hour{
  width: .3rem;
}
.minute{
  width: .3rem;
}
.second{
  width: .3rem;
}
</style>