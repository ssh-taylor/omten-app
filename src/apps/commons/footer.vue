<template>
  <div id="tabber">
    <!-- <div>
      <span class="iconfont icon-xiaoxi"></span>
      <p>消息</p>
    </div>
    <div>
      <span class="iconfont icon-tongxunlu"></span>
      <p>通讯录</p>
    </div>
    <div>
      <span class="iconfont icon-iconfront-"></span>
      <p>功能</p>
    </div>
    <div>
      <span class="iconfont icon-sousuo"></span>
      <p>我的</p>
    </div> -->
  </div>
</template>

<script>

export default {
  name: "app_header",
  data() {
    return {
      selected: "message"
    };
  },
  methods: {
    active(e) {
      let query = e.target.innerText;
      if (query === "消息" && this.selected === "message") {
        this.$router.push({ path: "/message" });
      }
      if (query === "通讯录" && this.selected === "mail") {
        this.$router.push({ path: "/mail" });
      }
      if (query === "功能" && this.selected === "query") {
        this.$router.push({ path: "/query" });
      }
      if (query === "我的" && this.selected === "mine") {
        this.$router.push({ path: "/mine" });
      }
    }
  }
};
</script>

<style type="text/scss" lang="scss">
#tabber{
  height: .4rem;
  border: 1px solid red;
}
</style>