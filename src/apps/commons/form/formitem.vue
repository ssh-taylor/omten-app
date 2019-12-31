<!--
 * @Author: your name
 * @Date: 2019-12-26 14:27:49
 * @LastEditTime : 2019-12-30 17:46:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\formitem.vue
 -->
<template>
  <div>
    <template v-if="element.type === 'label'">
      <div
        :style="{
            'width':'100%',
            'padding-bottom':'.05rem',
            'margin-top':'.05rem',
            'text-align':element.options.textalingn || 'center',
            'font-size':element.options.textsize+'px'||.18+'rem',
            'color':element.options.textcolor || '#444',
            'font-weight':element.options.fontweight || 'normal',
            'border-bottom':element.options.borderwidth||'solid 0px'
        }"
      >{{element.title}}</div>
    </template>
    <template v-if="element.type === 'input'">
      <mt-input :element="element"></mt-input>
    </template>
    <template v-if="element.type === 'encode'">
      <span>编码</span>
    </template>
    <template v-if="element.type==='select'">
      <mt-select :element="element"></mt-select>
    </template>
    <template v-if="element.type ==='checkbox'">
      <!-- <mt-checked
        :element="element"
      ></mt-checked> -->
    </template>
    <template v-if="element.type === 'radio'">
      <!-- <mt-radio 
        :element="element"
        v-model="formdata[element.field]"
      ></mt-radio> -->
    </template>
    <template v-if="element.type==='datetime'">
      <mt-datetime :element="element"></mt-datetime>
    </template>
    <template v-if="element.type==='inputnumber'">
      <MtInputnumber :element="element"></MtInputnumber>
    </template>
    <template v-if="element.type==='dialogselect'">
      <mt-dialogselect :element="element"></mt-dialogselect>
    </template>
    <template v-if="element.type==='editor'">
      <span>编辑器</span>
    </template>
    <template v-if="element.type==='userselect'">
      <mt-userselect :element="element"></mt-userselect>
    </template>
    <template v-if="element.type==='department'">
      <mt-department :element="element" v-model="formdata[element.field]"></mt-department>
    </template>
    <template v-if="element.type==='imgupload'">
      <span>图片上传</span>
    </template>
    <template v-if="element.type==='tabs'">
      <!-- <mt-tabs>1111111</mt-tabs> -->
    </template>
    <template v-if="element.type==='gridtable'">
      <!-- <mt-tabs></mt-tabs> -->
      <span>表格</span>
    </template>
    <template v-if="element.type==='relasearch'">
      <span>关联查询</span>
    </template>
    <template v-if="element.type==='attrfile'">
      <span>附件</span>
    </template>
  </div>
</template>

<script>
import MtChecked from './control/checkox'
import MtRadio from './control/redio'
import MtDialogselect from './control/dialogselect'
import MtInput from './control/input'
import MtDepartment from './control/department'
import MtSelect from './control/select'
import MtUserselect from './control/userselect'
import MtDatetime from './control/datetime'
import MtInputnumber from './control/inputnumber'
import MtTabs from './control/tabs'
export default {
  components:{
    MtChecked,
    MtRadio,
    MtDialogselect,
    MtInput,
    MtDepartment,
    MtSelect,
    MtUserselect,
    MtDatetime,
    MtInputnumber,
    MtTabs
  },
  props:{
    element:{
      type:Object,
      default:{}
    },
    formdata:{
      type:Object,
      default:{}
    },
    mode:{
      type:String,
      default:'edit'
    }
  },
  created() {
    if (
      this.element.hasOwnProperty("field") &&
      this.element.field !== "" &&
      this.formdata.hasOwnProperty(this.element.field) === false
    )
      this.$set(this.formdata, this.element.field, this.element.dfvalue || "");
  },
  mounted(){
    console.log(this.element)
  },
  computed: {
    colwidth() {
        
    }
  }
};
</script>

<style>

</style>