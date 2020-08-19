/*
 * @Author: your name
 * @Date: 2020-05-08 15:18:38
 * @LastEditTime: 2020-05-08 15:33:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /material-dashboard-pro-react/src/api/rides.js
 */
import request from "../utils/request";

export const ridesList = (params,url) => {
    return request({
      url: url,
      method: "post",
      data: params,
    });
};
