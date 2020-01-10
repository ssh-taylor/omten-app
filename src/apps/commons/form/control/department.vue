<!--
 * @Author: your name
 * @Date: 2019-12-27 17:55:49
 * @LastEditTime : 2020-01-09 21:25:33
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\input.vue
 -->
<template>
  <div class="until-department">
    <span class="label">{{element.title}}</span>
    <div class="content">
      <input class="input" :class="disabled===true?'view':'edit'" :disabled="disabled" type="text" v-model="currentvalue" readonly  @focus="open" @change="handlechange"/>
    </div>
    <mt-popup v-model="popupVisible" position="bottom" style="width:100%">
      <div class="select-content">
        <div class="nav-picker">
          <span class="abrogate" @click="close=>popupVisible=false">取消</span>
          <span class="confirm" @click="sure()">确定</span>
        </div>
        <mt-picker :slots="slots" value-key="F_FullName" @change="onValuesChange"></mt-picker>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import { Popup, Picker } from "mint-ui";
export default {
  components: {
    MtPopup: Popup,
    MtPicker: Picker
  },
  props: {
    element: {
      type: Object,
      default: {}
    },
    value: [String, Number],
    disabled:{
      type:Boolean,
      default:false,
    }
  },
  data() {
    return {
      popupVisible: false,
      currentvalue:'',
      selectVal:'',
      slots: [
        {
          flex: 1,
          values:this.$store.getters.department,
          className: "slot1",
          textAlign: "center"
        }
      ]
    };
  },
  watch:{
    value(newval){
      this.handlechange(newval)
    }
  },
  created(){
    this.init()
  },
  methods: {
    init(){
      if(this.value!==''){
        this.currentvalue = this.$store.getters.department.find(item=>{return item.F_DepartmentId == this.value}).F_FullName
      }
    },
    open() {
      this.popupVisible = true;
    },
    onValuesChange(picker, values) {
        this.selectVal = values[0]
    },
    sure(){
      this.currentvalue = this.selectVal.F_FullName
      console.log(this.selectVal)
      this.popupVisible = false
    },
    handlechange(val){
       this.$emit('change',val)
    }
  }
};
</script>

<style scoped>
.until-department {
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
  flex-grow: 1;
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
.nav-picker {
  position: relative;
  height: .4rem;
  background: #eee;
}
.abrogate {
  color: #999;
  position: relative;
  left: 0.2rem;
  line-height: .4rem;
}
.confirm {
  color: #1e90ff;
  position: absolute;
  right: 0.2rem;
  line-height: .4rem;
}
</style>