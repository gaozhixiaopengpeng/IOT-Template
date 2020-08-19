/*
 * @Author: smk
 * @Date: 2020-04-22 14:43:47
 * @LastEditTime: 2020-06-08 10:34:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /material-dashboard-pro-react/src/api/country.js
 */
import request from "../utils/request";

export const auditList = params => {
  return request({
    url: "basic/audit/list/sentinel",
    method: "post",
    data: params
  });
};
