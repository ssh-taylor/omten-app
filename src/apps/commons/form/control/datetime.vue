<!--
 * @Author: your name
 * @Date: 2019-12-27 16:19:04
 * @LastEditTime : 2020-01-06 19:22:10
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\dialogselect.vue
 -->
<template>
  <div class="until-datetime">
    <div class="datetime">
      <span class="label">{{element.title}}</span>
      <div class="content">
        <input class="input" :class="disabled===true?'view':'edit'" v-model="currentValue" :disabled="disabled" readonly="true" type="text" @focus="openPicker">
      </div>
    </div>
     <mt-datetime-picker
                :type="this.dateformat.toLowerCase() == 'yyyy-mm-dd'?'date':'datetime'"
                ref="picker"
                year-format="{value}"
                month-format="{value}月"
                date-format="{value}日"
                hour-format="{value}时"
                minutes-format="{value}分"
                @confirm="handleConfirm"
                :startDate="startDate"
             >
      </mt-datetime-picker>
  </div>
</template>

<script>
import {  DatetimePicker,Toast,Popup,Picker  } from "mint-ui";
export default {
  components: {
    MtDatetimePicker:DatetimePicker,
    MtPopup:Popup,
    MtPicker:Picker
  },
  props: {
    element:{
      type: Object,
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
      currentValue: "",
      isClicked:false,
      year:'',
      startDate:new Date(),
      dateformat: this.element.dateformat,
      formatType:'',
    };
  },
  created() {
    // this.init()
    console.log(this.value,'datetime')
  },
  methods: {
    init(){
      if(this.dateformat.toLowerCase() == 'yyyy-mm-dd'){
        this.formatType = 'date'
      }else if(this.dateformat.toLowerCase() =='yyyy-mm-dd hh:mm:ss'){
        this.formatType = 'datetime'
      }
    },
     openPicker() {
      this.$refs.picker.open();
    },
    handleConfirm (value) {
      console.log(this.dateformat,222);
      this.year = value.getFullYear();
      this.month = value.getMonth() + 1;
      this.date = value.getDate();
      this.hour = value.getHours();
      this.minutes = value.getMinutes()
      this.isClicked = true;
      console.log(this.year,this.month,this.date,this.hour,this.minutes,121212)
      this.currentValue = this.year+'-'+this.month+'-'+this.date
    },
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
  width: 20%;
}
.datetime .content {
  line-height: 0.4rem;
  padding-left: 0.05rem;
  height: 100%;
  display: flex;
  align-items: center;
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