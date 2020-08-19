/*
 * @Author: zhipeng
 * @Date: 2020-05-15 15:12:34
 * @LastEditTime: 2020-06-05 09:24:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /material-pro-react/src/api/efence.js
 */
import request from "utils/request";

export const efenceTypeList = params => {
  return request({
    url: "efence/efenceType/all/sentinel",
    method: "post",
    data: { body: { ...params } }
  });
};

export const efenceTypeSaveOrUpdate = params => {
  return request({
    url: "efence/efenceType/saveOrUpdate/sentinel",
    method: "post",
    data: { body: { ...params } }
  });
};

export const efenceTypeDelete = params => {
  return request({
    url: "efence/efenceType/deleteRef/sentinel",
    method: "post",
    data: { body: { typeName: params.typeName } }
  });
};

export const efenceByDiagonal = params => {
  return request({
    url: "efence/efence/queryEfenceAreaByDiagonal/sentinel",
    method: "post",
    data: { body: { pointList: params.pointList } }
  });
};

export const efenceSaveOrUpdate = params => {
  return request({
    url: "efence/efence/saveOrUpdate/sentinel",
    method: "post",
    data: { body: { ...params } }
  });
};

export const efenceDelete = params => {
  return request({
    url: "efence/efence/deleteRef/sentinel",
    method: "post",
    data: { body: { id: params.id } }
  });
};
