/*
 * @Author: hua
 * @Date: 2020-05-14 09:58:23
 * @description: 城市接口
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-23 10:35:53
 */
import request from "../utils/request";
import Config from "settings";

/**
 * 根据国家名和城市名查询州
 *
 * @param String countryName
 */
export function getContinentByCountryByCountryName(countryName) {
  return request({
    url: `/efence/country/getContinentByCountry/${Config.projectCode}`,
    method: "post",
    data: { body: { countryName } }
  });
}

/**
 * 根据国家名和城市名查询城市细节
 *
 * @param String countryName
 * @param String cityName
 */
export function getCityDetailByCountryNameAndCityName(countryName, cityName) {
  return request({
    url: `/efence/city/getCityDetailByCountryNameAndCityName/${Config.projectCode}`,
    method: "post",
    data: { body: { countryName, cityName } }
  });
}

/**
 * 根据国家名查询城市列表
 *
 * @param String countryName
 */
export function getCitysByCountry(countryName) {
  return request({
    url: `/efence/city/getCitysByCountry/${Config.projectCode}`,
    method: "post",
    data: { body: { countryName } }
  });
}

/**
 * 根据洲查询国家
 *
 * @param String continentName
 */
export function listByContinent(continentName) {
  return request({
    url: `/efence/country/listByContinent/${Config.projectCode}`,
    method: "post",
    data: { body: { continentName } }
  });
}

/**
 * 查询城市
 *
 * @param String continentName
 */
export function countryCity() {
  return request({
    url: `/efence/country/city`,
    method: "post",
    data: { body: {} }
  });
}

/**
 * 分页查询
 *
 * @param String cityName
 * @param Number countryId
 * @param Number pageNumber
 * @param Number pageSize
 * @param String orderBy
 * @param String sortBy
 */
export function cityPage(
  cityName,
  countryId,
  pageNumber,
  pageSize,
  orderBy,
  sortBy
) {
  return request({
    url: `/basic/city/page/${Config.projectCode}`,
    method: "post",
    data: {
      body: { cityName, countryId, pageNumber, pageSize, orderBy, sortBy }
    }
  });
}

/**
 * 分页查询城市区域
 *
 * @param Number isActive
 * @param String cityName
 * @param Number countryId
 * @param Number pageNumber
 * @param Number pageSize
 * @param String orderBy
 * @param String sortBy
 */
export function cityZonePage(
  isActive,
  cityName,
  countryId,
  pageNumber,
  pageSize,
  orderBy,
  sortBy
) {
  return request({
    url: `/basic//city/zonePage/${Config.projectCode}`,
    method: "post",
    data: {
      body: {
        isActive,
        cityName,
        countryId,
        pageNumber,
        pageSize,
        orderBy,
        sortBy
      }
    }
  });
}

/**
 * 新增或修改城市
 *
 * @param String cityName
 * @param String countryName
 * @param Number drawingLayerOrder
 * @param String borderColor
 * @param Number borderSize
 * @param Number zoneStatus
 * @param Number id
 */
export function citySaveOrUpdate(
  cityName,
  countryName,
  drawingLayerOrder,
  borderColor,
  borderSize,
  zonePointLists,
  x,
  y,
  zoneStatus,
  id
) {
  let reqData = {};
  if (id) {
    reqData = {
      cityName,
      countryName,
      drawingLayerOrder,
      borderColor,
      borderSize,
      zonePointLists,
      x,
      y,
      zoneStatus,
      id
    };
  } else {
    reqData = {
      cityName,
      countryName,
      drawingLayerOrder,
      borderColor,
      borderSize,
      zonePointLists,
      x,
      y,
      zoneStatus
    };
  }
  return request({
    url: `/efence/city/saveOrUpdate/${Config.projectCode}`,
    method: "post",
    data: { body: reqData }
  });
}

/**
 * 删除城市
 *
 * @param String countryName
 * @param String cityName
 */
export function cityDeleteRef(countryName, cityName) {
  return request({
    url: `/efence/city/deleteRef/${Config.projectCode}`,
    method: "post",
    data: { body: { countryName, cityName } }
  });
}

/**
 * 根据国家id查询城市
 */
export function cityList(isActive, countryId, ) {
  return request({
    url: `/basic/city/list/${Config.projectCode}`,
    method: "post",
    data: { body: { isActive, countryId } }
  });
}

/**
 * 新增或修改城市
 *
 * @param Number countryId
 * @param String cityName
 * @param Number isActive
 * @param Number id
 */
export function insertOrUpdate(countryId, cityName, isActive, id) {
  let reqData = {};
  if (id) {
    reqData = {
      countryId,
      cityName,
      isActive,
      id
    };
  } else {
    reqData = {
      countryId,
      cityName,
      isActive
    };
  }
  return request({
    url: `/basic/city/insertOrUpdate/${Config.projectCode}`,
    method: "post",
    data: { body: reqData }
  });
}

/**
 * 删除城市
 *
 * @param Number id
 */
export function cityDelete(id) {
  return request({
    url: `/basic/city/delete/${Config.projectCode}`,
    method: "post",
    data: { body: { id } }
  });
}

/**
 * 初始化城市区域坐标
 *
 * @param String cityName
 * @param String countryName
 * @param Number zonePercent
 * @param String id
 */
export function initCityGeoJsonPolygon(cityName, countryName, zonePercent, id) {
  return request({
    url: `/efence/city/initCityGeoJsonPolygon/${Config.projectCode}`,
    method: "post",
    data: { body: { cityName, countryName, zonePercent, id } }
  });
}
