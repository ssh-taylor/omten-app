<!--
 * @Author: your name
 * @Date: 2020-01-02 14:23:33
 * @LastEditTime : 2020-01-10 10:35:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\htmleditor.vue
 -->
<template>  
      <div class="content">  
        <vue-html5-editor :content="content" :height="200" @change="updateData"></vue-html5-editor>  
      </div>  
    </template>  
    <style scoped>  
      
    </style>  
    <script> 
    import initRichText from '../common/editoe';  
      export default {  
        data(){  
          return {content: '请输入文章内容'}  
        },  
        created(){
          initRichText();
        },
        methods: {  
          updateData(e = ''){  
            this.content = e;  
            console.info(e);  
          }  
        }  
      }  
    </script>  
<style>

</style>
