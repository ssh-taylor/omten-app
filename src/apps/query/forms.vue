<!--
 * @Author: your name
 * @Date: 2019-12-25 10:45:02
 * @LastEditTime : 2020-01-10 17:08:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\query\forms.vue
 -->
<template>
  <div class="page-forms">
    <mt-header title="销售订单">
      <div slot="left" @click="back">
        <mt-button class="iconfont" icon="back"></mt-button>
      </div>
      <mt-button slot="right">保存</mt-button>
    </mt-header>
    <div class="container">
      <formshow :formseche="formseche" :formdata="formdata" :mode="mode"></formshow>  
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
      formseche:[],
      formdata:{},
      mode:'view'
    };
  },
  mounted(){
      this.init()
  },
  methods: {
    init() {
        this.formseche=this.$route.params.modle.SchemeData
        this.formdata = this.$route.params.orderData
    },
    back(){
      this.$router.push({name:'query_formlist'})
    }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
.page-forms {
  font-size: 0.16rem;
  height: 100%;
  .container{
    height: calc(100% - .4rem);
    overflow-y: scroll;
    background: #fff;
  }
}
</style>