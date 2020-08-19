/*
 * @Author: zhipeng
 * @Date: 2020-05-08 13:28:07
 * @LastEditTime: 2020-06-08 10:32:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /material-pro-react/src/api/trip.js
 */
import request from "../utils/request";

export const getTripDetail = tripUuid => {
  return request({
    url: "trip/trip/detail/" + tripUuid,
    method: "post",
    data: {}
  });
};

export const getTrack = rideId => {
  return request({
    url: "trip/ride/track/" + rideId,
    method: "post",
    data: {}
  });
};

export const tripList = params => {
  return request({
    url: "trip/trip/page/sentinel",
    method: "post",
    data: params
  });
};
