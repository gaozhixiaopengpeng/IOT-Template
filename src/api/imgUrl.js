/*
 * @Author: your name
 * @Date: 2020-03-27 16:13:47
 * @LastEditTime: 2020-04-23 15:10:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /material-pro-react/src/api/imgUrl.js
 */
import request from "utils/request";
import qs from "qs";
import Config from "settings";

export const imgUrl = params => {
  return request({
    url: "http://192.168.100.243:8088/uploadForBase64",
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: qs.stringify(params)
  });
};
