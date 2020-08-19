/*
 * @Author: your name
 * @Date: 2020-05-18 17:06:00
 * @LastEditTime: 2020-05-19 13:32:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /material-pro-react/src/utils/zone.js
 */

/**
 *
 * @param {[]} arr: 坐标点
 * @returns 中心坐标点
 */
export const computeCenter = arr => {
  var lt = { lat: 999, lng: 0 },
    rb = { lat: 0, lng: 999 };
  var lat, lng;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i].lat == "function") {
      lat = arr[i].lat();
    } else {
      lat = arr[i].lat;
    }
    if (typeof arr[i].lng == "function") {
      lng = arr[i].lng();
    } else {
      lng = arr[i].lng;
    }
    if (lat > rb.lat) {
      rb.lat = lat;
    }
    if (lat < lt.lat) {
      lt.lat = lat;
    }
    if (lng > lt.lng) {
      lt.lng = lng;
    }
    if (lng < rb.lng) {
      rb.lng = lng;
    }
  }
  var mg = { lat: 0, lng: 0 };

  mg.lat = lt.lat + (rb.lat - lt.lat) / 2;
  mg.lng = lt.lng - (lt.lng - rb.lng) / 2;
  return mg;
};
