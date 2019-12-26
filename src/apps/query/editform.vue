<!--
 * @Author: your name
 * @Date: 2019-12-26 10:55:54
 * @LastEditTime : 2019-12-26 20:41:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\query\editform.vue
 -->
<template>
  <div class="page-editform">
    <mt-header :title="title">
      <div slot="left" @click="back">
        <mt-button class="iconfont" icon="back"></mt-button>
      </div>
      <mt-button slot="right">保存</mt-button>
    </mt-header>
    <div class="container">
      <formshow :formseche="formseche" :formdata="formdata"></formshow>  
    </div>
  </div>
</template>

<script>
import { Header, button, Loadmore, Toast } from "mint-ui";
import formshow from '../commons/form/formshow'
export default {
  components: {
    MtHeader: Header,
    MtButton: button,
    MtLoadmore: Loadmore,
    formshow
  },
  data() {
    return {
        title:'',
        formseche:[],
        formdata:{},
    };
  },
  mounted(){
      this.init();  
  },
  methods: {
    init(){
      this.title = this.$route.params.title
      this.formseche=this.$route.params.orderModle.SchemeData
      this.formdata = this.$route.params.orderData ===undefined?{}:this.$route.params.orderData
    },
    back() {
      this.$router.push({ name: "query_formlist" });
    }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
.page-editform {
}
</style>