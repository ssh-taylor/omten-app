<!--
 * @Author: your name
 * @Date: 2020-01-09 14:17:20
 * @LastEditTime : 2020-01-10 18:34:02
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\table.vue
 -->
<template>
  <div class="until-tabel">
    <span class="label">{{element.title}}</span>
    <table class="tab-first" :class="disabled===true?'tab-view':'tab-edit'">
      <tr class="table-title">
        <td v-for="(item,index) in element.fieldsData" :key="index">{{item.title}}</td>
      </tr>
      <tr class="table-content" :class="{'solid':tabeldata.length===0}">
        <div class="nodata" v-if="tabeldata.length===0">暂无数据</div>
      </tr>
    </table>
    <ul class="list" v-if="tabeldata.length!==0">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import{session} from '@/utils/util'
export default {
  props: {
    element: {
      type: Object,
      default: {}
    },
    value: {
      type: Array,
      default: function() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tabeldata: []
    };
  },
  mounted() {
    let height = document.querySelector(".table-title").offsetHeight;
    document.querySelector(".table-content").style.height = height+'px';
    this.init()
  },
  methods:{
    init(){
      this.tabeldata = session.getSession('couterformdata')
      console.log(this.tabeldata,'table')
    }
  }
};
</script>

<style>
.until-tabel {
  height: 100%;
  background: #fff;
  padding: 0.05rem 0.1rem;
}
table {
  box-sizing: border-box;
  width: 100%;
  overflow-x: scroll;
  border-collapse: collapse;
}
table > tr:nth-of-type(2) {
  margin-left: 1rem;
}
.tab-first,
.tab-edit {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
}
.tab-first .table-title {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  width: 1rem;
  /* background: red; */
}

.tab-first .table-title > td,
.tab-first .table-content > td {
  width: 100%;
  text-align: center;
  padding: 0.05rem 0;
}
.tab-view .table-title > td:nth-of-type(2n + 1) {
  background-color: #dcdcdc;
}
.tab-view .table-title > td:nth-of-type(2n) {
  background-color: #f5f5f5;
}
.tab-first .table-content {
  width: 200px;
  display: flex;
  flex-wrap: wrap;
}
.solid {
  width: 100% !important;
  border: 1px solid #eee;
  box-sizing: border-box;
}
.tab-first .table-content .nodata{
    color: #999;
    position: absolute;
    top: calc(50% - 11px);
    left: 50%;
}
.tab-view .table-content > td:nth-of-type(2n + 1) {
  background-color: #f5f5f5;
}
.tab-view .table-content > td:nth-of-type(2n) {
  background-color: #dcdcdc;
}
.until-tabel .list {
  height: 0.1rem;
  display: flex;
  justify-content: center;
}
.tab-edit {
  border: 1px dashed #1e90ff;
  border-collapse: collapse;
}
.tab-edit .table-title > td:nth-of-type(2n + 1) {
  background-color: #dcdcdc;
}
.tab-edit .table-title > td:nth-of-type(2n) {
  background-color: #f5f5f5;
}
.tab-edit > tr > td {
  border-bottom: 1px solid #999;
  border-left: 1px solid #999;
}
.tab-edit > .table-title > td {
  border-left: none;
}
.until-tabel .list > li {
  width: 0.05rem;
  height: 0.05rem;
  border-radius: 50%;
  background-color: #999;
  margin: 0.05rem;
}
</style>