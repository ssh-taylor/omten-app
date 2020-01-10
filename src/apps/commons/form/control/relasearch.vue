<!--
 * @Author: your name
 * @Date: 2020-01-09 19:13:50
 * @LastEditTime : 2020-01-10 16:54:40
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\apps\commons\form\control\relasearch.vue
 -->
<template>
  <div class="until-tabel">
      <span class="label">{{element.title}}</span>
    <table class="tab-first" :class="disabled===true?'tab-view':'tab-edit'">
      <tr class="table-title">
        <td v-for="(item,index) in formscheme" :key="index">{{item.title}}</td>
      </tr>
      <tr class="table-content" :class="{'solid':tabledata.length===0}">
        <div class="nodata" v-if="tabledata.length===0">暂无数据</div>
      </tr>
    </table>
    <ul class="list" v-if="tabledata.length!==0">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import store from "../store";
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
      formscheme: [],
      tabledata: [],
    };
  },
  watch: {
    element: {
      deep: true,
      handler(val) {
        this.initpage();
      }
    }
  },
  created() {
    this.initpage();
  },
  mounted(){
      let height = document.querySelector(".table-title").offsetHeight;
      document.querySelector(".table-content").style.height = height+'px';
  },
  methods: {
    initpage() {
      if (!this.element.sourceset || !this.element.sourceset.datasource) return;
      store.getfields(this.element.sourceset.datasource, data => {
        this.formscheme = data.filter(
          s => this.element.sourceset.showfields.join(",").indexOf(s.field) > -1
        );
      });
    }
  }
};
</script>

<style>
.until-tabel{
    height: 100%;
    background: #fff;
    padding: .05rem .1rem;
}
.until-tabel .label{
    line-height: .4rem;
    text-align: center;
    max-width: 25%;
    min-width: 20%
}
table{ 
   box-sizing: border-box;
   width: 100%;
   overflow-x: scroll;
   border-collapse:collapse;
}
table>tr:nth-of-type(2){
    margin-left: 1rem;
}
.tab-first,.tab-edit{
    position: relative;
    display: flex;
    flex-wrap: nowrap;
}
.tab-first .table-title{
position: absolute;
left: 0;
top: 0;
display: flex;
flex-wrap: wrap;
width: 1rem;
/* background: red; */
}
.tab-first .table-title>td,.tab-first .table-content>td{
    width: 100%;
    text-align: center;
    padding: .05rem 0;
}
.tab-view .table-title>td:nth-of-type(2n+1){
    background-color: 	#DCDCDC ;
}
.tab-view .table-title>td:nth-of-type(2n){
    background-color: 	#F5F5F5;
}
.tab-first .table-content{
    width: 200px;
    display: flex;
    flex-wrap: wrap;
}
.solid{
  width: 100%!important;
  border: 1px solid #eee;
  box-sizing: border-box;
}
.tab-first .table-content .nodata{
    color: #999;
    position: absolute;
    top: calc(50% - 11px);
    left: 50%;
}
.tab-view .table-content>td:nth-of-type(2n+1){
     background-color: 	#F5F5F5;
}
.tab-view .table-content>td:nth-of-type(2n){
     background-color: 	#DCDCDC ;
}
.until-tabel .list{
    height: .1rem;
    display: flex;
    justify-content: center;
}
.tab-edit{
    border: 1px dashed #1e90ff;
    border-collapse: collapse;
}
.tab-edit .table-title>td:nth-of-type(2n+1){
    background-color: 	#DCDCDC ;
}
.tab-edit .table-title>td:nth-of-type(2n){
    background-color: 	#F5F5F5;
}
.tab-edit>tr>td{
    border-bottom: 1px solid #999;
    border-left: 1px solid #999;
}
.tab-edit>.table-title>td{
    border-left: none;
}
.until-tabel .list>li{
    width: .05rem;
    height: .05rem;
    border-radius: 50%;
    background-color: #999;
    margin: .05rem;
}
</style>