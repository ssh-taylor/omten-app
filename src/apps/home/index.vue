<!--
 * @Author: your name
 * @Date: 2019-12-04 17:36:17
 * @LastEditTime : 2020-01-06 20:27:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\home\index.vue
 -->
<script>
import appFooter from "../commons/footer";
import { getuserlistss} from '@/Api/user'
export default {
  template:
    '<div style="height:100%"><router-view></router-view><app-footer/></div>',
  components: {
    appFooter
  },
  mounted() {
    this.init();
    console.log(this.$store)
  },
  methods: {
    init() {
      let token = this.$store.getters.token;
      if (token === "") {
        this.$router.push({ path: "/login" });
      } else if (token !== "") {
        this.$router.push({ path: "/message" });
      }
    }
  }
};
</script>
<style type="text/scss" lang="scss">
</style>