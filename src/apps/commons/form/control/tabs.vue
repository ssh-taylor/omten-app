<!--
 * @Author: your name
 * @Date: 2019-12-30 16:15:52
 * @LastEditTime : 2020-01-06 19:37:21
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\tabs.vue
 -->
<template>
  <div class="until-tabs">
    <div class="tabs-view">
      <div class="nav">
      <mt-button class="button" size="small" @click.native.prevent="active = '1'" :class="{'targrtItem':active == '1'}">tab 1</mt-button>
      <mt-button class="button" size="small" @click.native.prevent="active = '2'" :class="{'targrtItem':active == '2'}">tab 2</mt-button>
      <mt-button class="button" size="small" @click.native.prevent="active = '3'" :class="{'targrtItem':active == '3'}">tab 3</mt-button>
    </div>
    <mt-tab-container v-model="active" style="height:2rem">
      <mt-tab-container-item id="1">123123</mt-tab-container-item>
      <mt-tab-container-item id="2">456456</mt-tab-container-item>
      <mt-tab-container-item id="3">789789</mt-tab-container-item>
    </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { TabContainer, TabContainerItem,button } from "mint-ui";
export default {
  components: {
    MtTabContainer: TabContainer,
    MtTabContainerItem: TabContainerItem,
    MtButton:button
  },
  data() {
    return {
      active: "1"
    };
  }
};
</script>

<style >
.until-tabs{
    background-color: #fff;
    padding: 0 .1rem;
    
}
.tabs-view{
  border: 1px dashed #1e90ff;
}
.until-tabs .nav{
    padding: .05rem .1rem;
    border-bottom: 1px solid #eee;
}
.targrtItem{
    background-color: #1e90ff!important;
     color: #fff;
}
/* .button:target{
    background-color: #1e90ff!important;
} */
</style>