/*
 * @Author: smk
 * @Date: 2020-04-22 14:43:47
 * @LastEditTime: 2020-04-28 10:45:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /material-dashboard-pro-react/src/api/country.js
 */
import request from "../utils/request";

export const countryList = params => {
  return request({
    url: "/basic/country/list/sentinel",
    method: "post",
    data: params
  });
};

export const countrySaveOrUpdate = params => {
  return request({
    url: "/basic/country/saveOrUpdate/sentinel",
    method: "post",
    data: params
  });
};

export const countryDelete = params => {
  return request({
    url: "/basic/country/delete/sentinel",
    method: "post",
    data: params
  });
};
