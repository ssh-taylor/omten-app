<!--
 * @Author: your name
 * @Date: 2019-12-26 14:27:49
 * @LastEditTime : 2019-12-26 20:29:47
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
  </div>
</template>

<script>
export default {
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
  computed: {
    colwidth() {
        
    }
  }
};
</script>

<style>
</style>