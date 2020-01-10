<!--
 * @Author: your name
 * @Date: 2019-12-27 16:19:04
 * @LastEditTime : 2020-01-09 19:54:51
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\dialogselect.vue
 -->
<template>
  <div class="userselect">
    <span class="label">{{element.title}}</span>
    <div class="content">
         <input class="input" :class="disabled===true?'view':'edit'" type="text" :disabled="disabled" v-model="currentvalue" readonly="true" @focus="open"/>
    </div>
    <mt-popup style="width:100%" v-model="popupVisible" position="bottom">
      <div class="topture">
        <span @click="open=>popupVisible=false">取消</span>
        <span>确定</span>
      </div>
      <mt-picker :slots="slots" value-key="F_FullName" @change="onValuesChange" style="text-align:center"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import{popup,picker} from 'mint-ui'
import {getDepartment,} from '@/Api/department'
import {RoleList} from '@/api/role'
export default {
  components:{
    MtPopup:popup,
    MtPicker:picker
  },
  props:{
      element:{
        type:Object,
        default:{}
      },
      value:[String,Number],
      disabled:{
        type:Boolean,
        default:false
      }
  },
  data(){
    return{
        currentvalue:this.value,
        popupVisible:false,
        regionInit: false,
        second:[],
        slots: [
        {
          flex: 1,
          values: [{F_FullName:'部门',data:[{F_FullName:'技术部'},{F_FullName:'财务部'}]}, {F_FullName:'角色',data:[{F_FullName:'线长'},{F_FullName:'组长'}]}],
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['技术部','财务部','产品部'],
          className: 'slot3',
          textAlign: 'center'
        },{
          divider: true,
          content: '-',
          className: 'slot4'
        }, {
          flex: 1,
          values: ['张三', '李四', '王五', '马六', '肖七', '王八'],
          className: 'slot5',
          textAlign: 'center'
        }
      ]
    }
  },
  created(){
    console.log(this.value,'userselect')
  },
  methods:{
    open(){
      this.popupVisible = true;
      // this.slots[2].values = this.slots[0].values[0].data
    },
    onValuesChange(picker,values){
      // let val = values[0].data
      // picker.setSlotValues(2,val)
    },
    init(){
      getDepartment().then(data=>{
        this.slots[0].values[0].data = data
      })
       RoleList().then(data=>{
        this.slots[0].values[1].data= data
      })
    },
  }
};
</script>

<style scoped>
.userselect {
  height: 0.4rem;
  background-color: #fff;
  padding: .05rem .1rem;
  font-size: .16rem;
  display: flex;
}
.userselect .label{
    line-height: .4rem; 
    text-align: center;
    width: 20%;
}
.userselect .content {
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
.topture{
  height: .3rem;
  padding: .05rem .1rem;
}
.topture>span{
  line-height: .3rem;
  position: relative;
}
.topture>span:nth-of-type(1){
  text-align: left;
  color: #999;
}
.topture>span:nth-of-type(2){
  position: absolute;
  right: .1rem;
  color: #1e90ff;
  
}
</style>