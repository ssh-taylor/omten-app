import { custmerTableList, getinstancelist } from "@/Api/form";
import { listtotree } from "@/utils/index";
import { getDepartment } from "@/Api/department";

const systemfield = [
  // 系统字段
  {
    title: "主键",
    type: "input",
    field: "f_id",
    issys: true
  },
  {
    title: "创建时间",
    type: "datetime",
    field: "f_createdate",
    issys: true
  },
  {
    title: "创建人",
    type: "input",
    field: "f_createusername",
    issys: true
  },
  {
    title: "修改时间",
    type: "datetime",
    field: "f_modifydate",
    issys: true
  },
  {
    title: "修改人",
    type: "input",
    field: "f_modifyusername",
    proportion: 15,
    issys: true
  }
];

const store = {
  state: {
    tables: [],
    departmentTree: []
  },
  getTables(fn) {
    // 获得所有自定义表格
    if (this.state.tables.length > 0) {
      fn(this.state.tables);
      return;
    }
    custmerTableList().then(data => {
      console.log(data);
      this.state.tables = data.rows;
      fn(data.rows);
    });
  },
  getalltables(tableid, fn) {
    // 获得主表及所有子表
    this.getTables(data => {
      const table = data.find(s => s.F_Id === tableid);
      if (table && table.F_Scheme) {
        const scheme = JSON.parse(table.F_Scheme);
        if (scheme.SchemeData) {
          let tablelist = [
            {
              name: "主表:" + table.F_Name,
              table: table.F_TableName,
              type: "master",
              fields: scheme.SchemeData.filter(item => !!item.field).concat(
                systemfield
              )
            }
          ];
          scheme.SchemeData.forEach(item => {
            if (item.type === "gridtable") {
              tablelist.push({
                name: "子表:" + item.title,
                table: item.table,
                type: "child",
                fields: item.fieldsData
                  .filter(aitem => !!aitem.field)
                  .concat(systemfield)
              });
            }
            if (item.type === "tabs") {
              item.tabitems.forEach(sdata => {
                sdata.fields.forEach(s => {
                  if (s.type === "gridtable") {
                    tablelist.push({
                      name: "子表:" + s.title,
                      table: s.table,
                      type: "child",
                      fields: s.fieldsData
                        .filter(aitem => !!aitem.field)
                        .concat(systemfield)
                    });
                  }
                });
              });
            }
          });
          fn(tablelist);
        }
      }
    });
  },
  getfields(tableid, fn) {
    // 获得一个表格的数据结构
    this.getTables(data => {
      const table = data.find(s => s.F_Id === tableid);
      let fields = Object.assign([], systemfield); // JSON.parse(JSON.stringify(systemfield))
      if (table && table.F_Scheme) {
        const scheme = JSON.parse(table.F_Scheme);
        if (scheme.SchemeData) {
          scheme.SchemeData.forEach(item => {
            if (
              item.type !== "title" &&
              item.type !== "gridtable" &&
              item.type !== "relasearch"
            ) {
              if (item.type === "tabs") {
                item.tabitems.forEach(sdata => {
                  sdata.fields.forEach(s => {
                    fields.push(s);
                  });
                });
              } else fields.push(item);
            }
          });
        }
      }
      fn(fields.filter(item => !!item.field));
    });
  },
  getdepartmenttree(fn) {
    // 获得部门数据
    if (this.state.departmentTree.length > 0) {
      fn(this.state.departmentTree);
      return;
    }
    // getDepartmentTree('', '0').then(data => {
    //   this.state.departmentTree = data
    //   fn(data)
    // })
    getDepartment().then(pdata => {
      let data = listtotree(
        pdata,
        "F_DepartmentId",
        "F_ParentId",
        "0",
        "F_DepartmentId"
      );
      this.state.departmentTree = data;
      fn(data);
    });
  },
  getdepartmentbyname(id, fn) {
    // 根据部门ID获取部门名称
    function getName(item, id) {
      let value = null;
      let ret = recurision(item, id);
      return ret;

      function recurision(item, id) {
        if (!item) return null;
        for (var i = 0; i < item.length; i++) {
          if (item[i].F_DepartmentId === id) {
            value = item[i];
            break;
          }
          if (item[i].children) {
            recurision(item[i].children, id);
          }
        }
        return value;
      }
    }
    this.getdepartmenttree(data => {
      const dp = getName(data, id);
      if (dp) fn(dp.F_FullName);
      else fn("");
    });
  },
  getdatabysourceset(sourceset, fn) {
    // 获得其它表数据
    // const source = { datasource: '', showfields: '', returnfield: '' }
    let fields = [];
    console.log("dd", sourceset);
    if (typeof sourceset.showfields === "string") {
      fields.push({
        title: sourceset.showfields,
        field: sourceset.showfields
      });
    } else {
      fields = sourceset.showfields;
    }
    getinstancelist(sourceset.datasource).then(data => {
      const pdata = [];
      console.log("getdatabysourceset", data);
      data.rows.forEach(item => {
        pdata.push({
          title: item[sourceset.showfields],
          value: item[sourceset.returnfield]
        });
      });
      fn(pdata);
    });
  },
  getdatabydongset(dongset, fn) {
    // 获得联动数据
    // const dong={datasource:'',selffield:'',datafield:'',showfield:''}
    fn([
      {
        title: "联动一",
        value: "a"
      },
      {
        title: "联动二",
        value: "b"
      },
      {
        title: "联动三",
        value: "c"
      }
    ]);
  }
};

export default store;
