<!--
 * @Author: your name
 * @Date: 2019-12-10 15:06:06
 * @LastEditTime : 2020-01-03 16:06:06
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\publicHead\search.vue
 -->
<template>
  <div class="page-search">
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
  </div>
</template>

<script>
import { Search } from "mint-ui";
export default {
  components: {
    MtSearch: Search
  },
  data(){
    return{
      value:'',
    }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
.page-search{
  font-size: .16rem;
}
/deep/ .mint-searchbar{
    border-bottom:1px solid #eee; 
  }
/deep/ .mint-searchbar-inner{
    padding: 0;
  }
/deep/ .mintui{
    font-size: .2rem;
    margin: 0 .05rem
  }
/deep/ .mint-searchbar-cancel{
  color:#104E8B
}
</style>