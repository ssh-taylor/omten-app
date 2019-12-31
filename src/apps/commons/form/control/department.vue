<!--
 * @Author: your name
 * @Date: 2019-12-27 17:55:49
 * @LastEditTime : 2019-12-30 18:33:51
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\input.vue
 -->
<template>
  <div class="until-department">
    <span class="label">{{element.title}}</span>
    <div class="content">
      <input class="input" type="text" v-model="value" readonly="true" @focus="open" @onchange="handlechange"/>
    </div>
    <mt-popup v-model="popupVisible" position="bottom" style="width:100%">
      <div class="select-content">
        <div class="nav-picker">
          <span class="abrogate" @click="close=>popupVisible=false">取消</span>
          <span class="confirm" @click="sure()">确定</span>
        </div>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import { Popup, Picker } from "mint-ui";
import { getDepartment } from "@/Api/department";
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
    // value: [String, Number],
  },
  data() {
    return {
      popupVisible: false,
      value: "",
      selectVal:'',
      slots: [
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        }
      ]
    };
  },
  methods: {
    open() {
      this.popupVisible = true;
      getDepartment().then(data => {
        this.slots[0].values = [];
        data.forEach(element => {
          this.slots[0].values.push(element.F_FullName);
        });
      });
    },
    onValuesChange(picker, values) {
        this.selectVal = values
    },
    sure(){
      this.value = this.selectVal
      this.popupVisible = false
    },
    handlechange(val){
       console.log(document.querySelector('.input'))
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
  padding: 0 0 0 0.1rem;
  font-size: 0.17rem;
  display: block;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
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