/*
 * @Author: smk
 * @Date: 2020-04-22 14:43:47
 * @LastEditTime: 2020-06-08 10:35:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /material-dashboard-pro-react/src/api/country.js
 */
import request from "../utils/request";

export const departmentList = params => {
  return request({
    url: "basic/department/list/sentinel",
    method: "post",
    data: params
  });
};

export const departmentSaveOrUpdate = params => {
  return request({
    url: "basic/department/saveOrUpdate/sentinel",
    method: "post",
    data: params
  });
};

export const departmentDelete = params => {
  return request({
    url: "basic/department/delete/sentinel",
    method: "post",
    data: params
  });
};
