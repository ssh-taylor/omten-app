import request from "@/utils/request";
import axios from "axios";
// 获取文件夹树
export function gettreejson() {
  return request({
    url: "/learun/adms/resourcefile/gettreejson",
    method: "get"
  });
}
// 获取文件夹下所有内容
export function getlistjson(folderId, keyWord) {
  return request({
    url: "/learun/adms/resourcefile/getlistjson",
    method: "get",
    params: {
      folderId: folderId,
      keyWord: keyWord
    }
  });
}
// 获取文件列表
export function getdocumentlistjson(keyWord) {
  return request({
    url: "/learun/adms/resourcefile/getdocumentlistjson",
    method: "get",
    params: keyWord
  });
}

// 获取图片列表
export function getimagelistjson(keyWord) {
  return request({
    url: "/learun/adms/resourcefile/getimagelistjson",
    method: "get",
    params: keyWord
  });
}
// 获取回收站列表
export function getrecycledlistjson(keyWord) {
  return request({
    url: "/learun/adms/resourcefile/getrecycledlistjson",
    method: "get",
    params: keyWord
  });
}
// 获取我的共享文件(夹)列表
export function getmysharelistjson(keyWord) {
  return request({
    url: "/learun/adms/resourcefile/getmysharelistjson",
    method: "get",
    params: keyWord
  });
}
// 获取他人共享文件(夹)列表
export function getotherssharelistjson(keyWord) {
  return request({
    url: "/learun/adms/resourcefile/getotherssharelistjson",
    method: "get",
    params: keyWord
  });
}
//获取文件夹实体
export function getfolderformjsonfile(keyWord) {
  return request({
    url: "/learun/adms/resourcefile/getfolderformjson",
    method: "get",
    params: keyWord
  });
}
//获取文件实体
export function getfileformjsonfile(keyWord) {
  return request({
    url: "/learun/adms/resourcefile/getfileformjson",
    method: "get",
    params: keyWord
  });
}
// 还原文件(夹)
export function getrestorefile(keyValue, fileType) {
  return request({
    url: "/learun/adms/resourcefile/restorefile",
    method: "get",
    params: { keyValue: keyValue, fileType: fileType }
  });
}
// 删除文件(夹)
export function getremoveform(keyValue, fileType) {
  return request({
    url: "/learun/adms/resourcefile/removeform",
    method: "get",
    params: {
      keyValue: keyValue,
      fileType: fileType
    }
  });
}
// 彻底删除
export function getthoroughremoveform(keyValue, fileType) {
  return request({
    url: "/learun/adms/resourcefile/thoroughremoveform",
    method: "get",
    params: { keyValue: keyValue, fileType: fileType }
  });
}
// 清空回收站
export function getemptyrecycledform() {
  return request({
    url: "/learun/adms/resourcefile/emptyrecycledform",
    method: "get"
  });
}
// 保存文件夹
export function getfolderformjsonst(keyValue, FileFolderEntity) {
  return request({
    url: "/learun/adms/resourcefile/savefolderform",
    method: "post",
    params: {
      keyValue: keyValue,
      fileFolderEntity: FileFolderEntity
    }
  });
}
// 保存文件夹
export function getsavefileform(keyValue, FileInfoEntity) {
  return request({
    url: "/learun/adms/resourcefile/savefileform",
    method: "post",
    params: { keyValue: keyValue, fileInfoEntity: FileInfoEntity }
  });
}
// 更改文件(夹)位置
export function getsavemoveform(keyValue, moveFolderId, fileType) {
  return request({
    url: "/learun/adms/resourcefile/savemoveform",
    method: "post",
    params: {
      keyValue: keyValue,
      moveFolderId: moveFolderId,
      fileType: fileType
    }
  });
}
// 共享文件（夹）
export function getsharefile(keyValue, IsShare, fileType) {
  return request({
    url: "/learun/adms/resourcefile/sharefile",
    method: "post",
    params: {
      keyValue: keyValue,
      IsShare: IsShare,
      fileType: fileType
    }
  });
}
// 上传文件
export function getuploadifyfile(file) {
  return request({
    url: "/learun/adms/resourcefile/uploadifyfile?folderId=",
    method: "post",
    data: file
  });
}
// 下载文件
export function getdownloadfile(keyValue) {
  return request({
    url: "/learun/adms/resourcefile/downloadfile",
    method: "get",
    params: keyValue
  });
}

// 预览文件
export function getpreviewfile(fileId) {
  return request({
    url: "/learun/adms/resourcefile/previewfile",
    method: "get",
    params: fileId
  });
}
