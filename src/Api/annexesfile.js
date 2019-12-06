import request from "@/utils/request";
import axios from "axios";
// 上传附件分片
export function uploadannexesfilechunk(fileGuid, chunk, chunks, Filedata) {
  return request({
    url: "/learun/adms/annexesfile/uploadannexesfilechunk",
    method: "get",
    params: {
      fileGuid: fileGuid,
      chunk: chunk,
      chunks: chunks,
      Filedata: Filedata
    }
  });
}
// 移除附件分片
export function mergeannexesfilechunk(fileGuid, chunks) {
  return request({
    url: "/learun/adms/annexesfile/removeannexesfilechunk",
    method: "get",
    params: {
      fileGuid: fileGuid,
      chunks: chunks
    }
  });
}
// 完成附件上传
export function mergeannexesfile(folderId, fileGuid, fileName, chunks) {
  return request({
    url: "/learun/adms/annexesfile/mergeannexesfile",
    method: "get",
    params: {
      folderId: folderId,
      fileGuid: fileGuid,
      fileName: fileName,
      chunks: chunks
    }
  });
}
//删除附件
export function annexesfiledeleteannexesfile(folderId) {
  return request({
    url: "/learun/adms/annexesfile/deleteannexesfile",
    method: "get",
    params: folderId
  });
}
// 下载附件
export function downannexesfile(keyValue) {
  return request({
    url: "/learun/adms/annexesfile/downannexesfile",
    method: "get",
    params: keyValue
  });
}
// 获取附件列表
export function getannexesfilelist(folderId) {
  return request({
    url: "/learun/adms/annexesfile/getannexesfilelist",
    method: "get",
    params: folderId
  });
}
