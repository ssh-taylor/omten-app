<!--
 * @Author: your name
 * @Date: 2019-12-10 15:51:45
 * @LastEditTime: 2019-12-10 16:26:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\home\code.vue
 -->
<template>
  <div class="page-code">
    <!-- <mt-header title="获取条形码">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>-->
    <!-- <div class="scan">
    <div id="bcid">
      <div style="height:40%"></div>
      <p class="tip">...载入中...</p>
    </div>
    <footer>
      <button @click="startRecognize">1.创建控件</button>
      <button @click="startScan">2.开始扫描</button>
      <button @click="cancelScan">3.结束扫描</button>

      <button @click="closeScan">4.关闭控件</button>
    </footer>-->
    <!-- </div> -->
    
  </div>
</template>

<script>
let scan = null;
export default {
  name: "barCode",
  data() {
    return {
      codeUrl: ""
    };
  },
  methods: {
    //创建扫描控件
    startRecognize() {
      let that = this;
      if (!window.plus) return;
      scan = new plus.barcode.Barcode("bcid");
      scan.onmarked = onmarked;

      function onmarked(type, result, file) {
        switch (type) {
          case plus.barcode.QR:
            type = "QR";
            break;
          case plus.barcode.EAN13:
            type = "EAN13";
            break;
          case plus.barcode.EAN8:
            type = "EAN8";
            break;
          default:
            type = "其它" + type;
            break;
        }
        result = result.replace(/\n/g, "");
        that.codeUrl = result;
        alert(result);
        that.closeScan();
      }
    },
    //开始扫描
    startScan() {
      if (!window.plus) return;
      scan.start();
    },
    //关闭扫描
    cancelScan() {
      if (!window.plus) return;
      scan.cancel();
    },
    //关闭条码识别控件
    closeScan() {
      if (!window.plus) return;
      scan.close();
    }
  }
};
</script>

<style type="taxt/scss" lang="scss" scoped>
.page-code {
  font-size: 0.16rem;
}
</style>
