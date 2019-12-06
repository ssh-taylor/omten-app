import request from "@/utils/request";
//保存详情实体
export function savedetail(keyValue, entity) {
  if (entity.F_EnabledMark) {
    entity.F_EnabledMark = 1;
  } else {
    entity.F_EnabledMark = 0;
  }
  return request({
    url: "/learun/adms/dataitem/savedetail",
    method: "post",
    params: {
      keyValue: keyValue,
      entity: entity
    }
  });
}
//查询详情列表
export function querydetail(itemCode, keyword) {
  return request({
    url: "/learun/adms/dataitem/querydetail",
    method: "get",
    params: {
      itemCode: itemCode,
      keyword: keyword
    }
  });
}
//删除详情实体
export function deletedetail(F_ItemDetailId) {
  return request({
    url: "/learun/adms/dataitem/deletedetail",
    method: "get",
    params: F_ItemDetailId
  });
}
//保存分类实体
export function saveclassify(keyvalue, entity) {
  if (entity.F_IsTree) {
    entity.F_IsTree = 1;
  } else {
    entity.F_IsTree = 0;
  }
  if (entity.F_EnabledMark) {
    entity.F_EnabledMark = 1;
  } else {
    entity.F_EnabledMark = 0;
  }
  return request({
    url: "/learun/adms/dataitem/saveclassify",
    method: "post",
    params: {
      keyValue: keyvalue,
      entity: entity
    }
  });
}
//查询分类列表
export function queryclassify(keyword, enabledMark) {
  return request({
    url: "/learun/adms/dataitem/queryclassify",
    method: "get",
    params: {
      keyword: keyword,
      enabledMark: enabledMark
    }
  });
}
//删除分类实体
export function deleteclassify(ItemId) {
  return request({
    url: "/learun/adms/dataitem/deleteclassify",
    method: "get",
    params: ItemId
  });
}
//分类实体名称是否存在
export function existdetailitemname(keyValue, F_ItemName, itemCode) {
  return request({
    url: "/learun/adms/dataitem/existdetailitemname",
    method: "get",
    params: {
      keyValue: keyValue,
      F_ItemName: F_ItemName,
      itemCode: itemCode
    }
  });
}
//删除分类实体
export function deleteclassform(itemCode, parentId) {
  return request({
    url: "/learun/adms/dataitem/getdetaillistbyparentid",
    method: "get",
    params: {
      parentId: parentId,
      itemCode: itemCode
    }
  });
}
