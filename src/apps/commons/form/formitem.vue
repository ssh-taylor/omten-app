<!--
 * @Author: your name
 * @Date: 2019-12-26 14:27:49
 * @LastEditTime : 2020-01-10 17:17:21
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
            'padding-top':'.05rem',
            'background-color':'#fff',
            'text-align':element.options.textalingn || 'center',
            'font-size':element.options.textsize+'px'||.18+'rem',
            'color':element.options.textcolor || '#444',
            'font-weight':element.options.fontweight || 'normal',
            'border-bottom':element.options.borderwidth||'solid 0px'
        }"
      >{{element.title}}</div>
    </template>
    <template v-if="element.type === 'input'">
      <mt-input
        :element="element"
        v-model="formdata[element.field]"
        :disabled="disabled"
        @change="handleclick"
      ></mt-input>
    </template>
    <template v-if="element.type === 'encode'">
      <mt-encode
        v-model="formdata[element.field]"
        :element="element"
        :disabled="disabled"
        @change="handleclick"
      ></mt-encode>
    </template>
    <template v-if="element.type==='select'">
      <mt-select
        v-model="formdata[element.field]"
        :element="element"
        :disabled="disabled"
        @change="handleclick"
      ></mt-select>
    </template>
    <template v-if="element.type ==='checkbox'">
      <mt-checked
        :element="element"
        :disabled="disabled"
        v-model="formdata[element.field]"
        @change="handleclick"
      ></mt-checked>
    </template>
    <template v-if="element.type === 'radio'">
      <mt-radio
        :element="element"
        :disabled="disabled"
        v-model="formdata[element.field]"
        @change="handleclick"
      ></mt-radio>
    </template>
    <template v-if="element.type==='datetime'">
      <mt-datetime
        :element="element"
        v-model="formdata[element.field]"
        :disabled="disabled"
        @change="handleclick"
      ></mt-datetime>
    </template>
    <template v-if="element.type==='inputnumber'">
      <MtInputnumber
        :element="element"
        v-model="formdata[element.field]"
        :disabled="disabled"
        @change="handleclick"
      ></MtInputnumber>
    </template>
    <template v-if="element.type==='dialogselect'">
      <mt-dialogselect :element="element" v-model="formdata[element.field]" :disabled="disabled"></mt-dialogselect>
    </template>
    <template v-if="element.type==='editor'">
      <mt-editor></mt-editor>
    </template>
    <template v-if="element.type==='userselect'">
      <mt-userselect
        :element="element"
        v-model="formdata[element.field]"
        :disabled="disabled"
        @change="handleclick"
      ></mt-userselect>
    </template>
    <template v-if="element.type==='department'">
      <mt-department
        :element="element"
        v-model="formdata[element.field]"
        :disabled="disabled"
        @change="handleclick"
      ></mt-department>
    </template>
    <template v-if="element.type==='imgupload'">
      <mt-uploadimg :multiple="true" :max="6" :list="imgList" ref="upload"></mt-uploadimg>
    </template>
    <template v-if="element.type==='tabs'">
      <mt-tabs></mt-tabs>
    </template>
    <template v-if="element.type==='gridtable'">
      <mt-table
        :element="element"
        v-model="formdata[element.field]"
        :disabled="disabled"
        @change="handleclick"
      ></mt-table>
    </template>
    <template v-if="element.type==='relasearch'">
      <mt-relasaerch
        :element="element"
        v-model="formdata[element.field]"
        :disabled="disabled"
        @change="handleclick"
      ></mt-relasaerch>
    </template>
    <template v-if="element.type==='attrfile'">
      <span>附件</span>
    </template>
  </div>
</template>

<script>
import MtChecked from "./control/checkox";
import MtRadio from "./control/redio";
import MtDialogselect from "./control/dialogselect";
import MtInput from "./control/input";
import MtDepartment from "./control/department";
import MtSelect from "./control/select";
import MtUserselect from "./control/userselect";
import MtDatetime from "./control/datetime";
import MtInputnumber from "./control/inputnumber";
import MtTabs from "./control/tabs";
import MtEditor from "./control/htmleditor";
import MtUploadimg from "./control/uploadimg";
import MtEncode from "./control/encode";
import MtTable from "./control/table";
import MtRelasaerch from "./control/relasearch";
export default {
  components: {
    MtChecked,
    MtRadio,
    MtDialogselect,
    MtInput,
    MtDepartment,
    MtSelect,
    MtUserselect,
    MtDatetime,
    MtInputnumber,
    MtTabs,
    MtEditor,
    MtUploadimg,
    MtEncode,
    MtTable,
    MtRelasaerch
  },
  props: {
    element: {
      type: Object,
      default: {}
    },
    formdata: {
      type: Object,
      default: {}
    },
    mode: {
      type: String,
      default: "edit"
    }
  },
  data() {
    return {
      imgList: []
    };
  },
  created() {
    if (
      this.element.hasOwnProperty("field") &&
      this.element.field !== "" &&
      this.formdata.hasOwnProperty(this.element.field) === false
    )
      this.$set(this.formdata, this.element.field, this.element.dfvalue || "");
  },
  computed: {
    disabled() {
      return this.mode === "view";
    }
  },
  watch: {
    element: {
      handler: function(val) {
        if (
          val.hasOwnProperty("field") &&
          val.field !== "" &&
          this.formdata.hasOwnProperty(val.field) === false
        )
          this.$set(this.formdata, val.field, val.dfvalue || "");
      },
      deep: true
    }
  },
  methods: {
    handleclick(val) {
      this.$emit("change", val);
    }
  }
};
</script>

<style>
</style>