import request from "@/utils/request";
import settings from "@/utils/settings";
// 获取部门详细列表
export function getDepartment() {
  return request({
    url: "/learun/adms/department/list",
    method: "get",
    params: settings.companyid
  });
}
// 获取单个部门信息
export function getDepartmententity(keyvalue) {
  return request({
    url: "/learun/adms/department/get",
    method: "get",
    params: { companyId: settings.companyid, keyWord: keyvalue }
  });
}

// 停用部门
export function delDepartment(departmentid) {
  return request({
    url: "/learun/adms/department/delete",
    method: "get",
    params: departmentid
  });
}

// 保存部门
export function saveDepartment(departmentid, DepartmentEntity) {
  DepartmentEntity.F_CompanyId = settings.companyid;
  DepartmentEntity.F_ShortName = DepartmentEntity.F_FullName;
  return request({
    url: "/learun/adms/department/save",
    method: "post",
    params: {
      departmentJson: JSON.stringify(DepartmentEntity),
      keyValue: departmentid
    }
  });
}
// 获取部门树列表（没有）
export function getDepartmentTree(companyid, parentid) {
  return request({
    url: "/learun/adms/department/tree",
    method: "get",
    params: { companyId: settings.companyid, parentid: parentid }
  });
}
