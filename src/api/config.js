/*
 * @Author: hua
 * @Date: 2020-04-29 17:55:15
 * @description: 配置接口
 * @LastEditors: hua
 * @LastEditTime: 2020-05-09 14:05:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-09 10:03:09
 */
import request from "../utils/request";
import Config from "settings";

export const getGoogleKey = () => {
  return request({
    url: "/basic/config/getGoogleMapConfig/sentinel",
    method: "post",
    data: { body: {} }
  });
};

/**
 * 新增或修改配置
 * @param Object firebaseConfiguration
 * @param Object smsConfiguration
 * @param Object smtpConfiguration
 */
export function emailConfigSaveOrUpdate(
  firebaseConfiguration,
  smsConfiguration,
  smtpConfiguration
) {
  firebaseConfiguration.jsonConfigurationContext = firebaseConfiguration.jsonConfigurationContext
    ? firebaseConfiguration.jsonConfigurationContext
    : "{}";
  let reqFirebaseConfiguration = {};
  let reqSmsConfiguration = {};
  let reqSmtpConfiguration = {};
  if (firebaseConfiguration.id) {
    reqFirebaseConfiguration["id"] = firebaseConfiguration.id;
  }

  reqFirebaseConfiguration["projectCode"] = Config.projectCode;
  reqFirebaseConfiguration["jsonConfigurationContext"] =
    firebaseConfiguration.jsonConfigurationContext;
  reqFirebaseConfiguration["fcmApiUrl"] = firebaseConfiguration.fcmApiUrl;
  if (smsConfiguration.id) {
    reqSmsConfiguration["id"] = smsConfiguration.id;
  }
  reqSmsConfiguration["projectCode"] = Config.projectCode;
  reqSmsConfiguration["uuid"] = smsConfiguration.uuid;
  if (smtpConfiguration.id) {
    reqSmtpConfiguration["id"] = smtpConfiguration.id;
  }
  reqSmtpConfiguration["host"] = smtpConfiguration.host;
  reqSmtpConfiguration["username"] = smtpConfiguration.username;
  reqSmtpConfiguration["password"] = smtpConfiguration.password;
  reqSmtpConfiguration["name"] = smtpConfiguration.name;
  reqSmtpConfiguration["replyAddress"] = smtpConfiguration.replyAddress;

  return request({
    url: `/message/emailConfig/saveOrUpdate/${Config.projectCode}`,
    method: "post",
    data: {
      body: {
        firebaseConfiguration: reqFirebaseConfiguration,
        smsConfiguration: reqSmsConfiguration,
        smtpConfiguration: reqSmtpConfiguration
      }
    }
  });
}

/**
 * 查询发送功能配置
 *
 */
export function emailConfigConfigList() {
  return request({
    url: `/message/emailConfig/configList/${Config.projectCode}`,
    method: "post",
    data: { body: {} }
  });
}

/**
 * 根据projectCode查询GoogleMapConfig
 *
 */
export function configGetGoogleMapConfig() {
  return request({
    url: `/basic/config/getGoogleMapConfig/${Config.projectCode}`,
    method: "post",
    data: { body: {} }
  });
}

/**
 * google配置增加或修改
 *
 * @param String mapKey
 * @param Number id
 */
export function configSaveOrUpdateGoogleMapConfig(mapKey, id) {
  let reqData = {};
  if (id) {
    reqData = { mapKey, id };
  } else {
    reqData = { mapKey };
  }
  return request({
    url: `/basic/config/saveOrUpdateGoogleMapConfig/${Config.projectCode}`,
    method: "post",
    data: { body: reqData }
  });
}

/**
 * 卡路里列表
 *
 */
export function caloriesList() {
  return request({
    url: `/trip/calories/list/${Config.projectCode}`,
    method: "post",
    data: { body: {} }
  });
}

/**
 * 卡路里全部
 *
 * @param Number CITY_BIKE
 * @param Number E_BIKE
 * @param Number E_STEP
 */
export function caloriesAll(CITY_BIKE, E_BIKE, E_STEP) {
  return request({
    url: `/trip/calories/all/${Config.projectCode}`,
    method: "post",
    data: { body: { CITY_BIKE, E_BIKE, E_STEP } }
  });
}

/**
 * 卡路里删除
 *
 * @param caloriesBurningPerKm
 * @param deviceType
 */
export function caloriesDelete(caloriesBurningPerKm, deviceType) {
  return request({
    url: `/trip/calories/delete/${Config.projectCode}`,
    method: "post",
    data: {
      body: {
        caloriesBurningPerKm,
        deviceType,
        projectCode: Config.projectCode
      }
    }
  });
}

/**
 * 卡路里更新或新增
 *
 * @param Array list
 */
export function caloriesSaveOrUpdate(list) {
  return request({
    url: `/trip/calories/saveOrUpdate/${Config.projectCode}`,
    method: "post",
    data: {
      body: list
    }
  });
}

/**
 * 二氧化碳列表
 *
 */
export function co2List() {
  return request({
    url: `/trip/co2/list/${Config.projectCode}`,
    method: "post",
    data: { body: {} }
  });
}

/**
 * 二氧化碳全部
 *
 * @param Number CITY_BIKE
 * @param Number E_BIKE
 * @param Number E_STEP
 */
export function co2All(CITY_BIKE, E_BIKE, E_STEP) {
  return request({
    url: `/trip/co2/all/${Config.projectCode}`,
    method: "post",
    data: { body: { CITY_BIKE, E_BIKE, E_STEP } }
  });
}

/**
 * 二氧化碳删除
 *
 * @param co2SavingPerKm
 * @param deviceType
 */
export function co2Delete(co2SavingPerKm, deviceType) {
  return request({
    url: `/trip/co2/delete/${Config.projectCode}`,
    method: "post",
    data: {
      body: {
        co2SavingPerKm,
        deviceType,
        projectCode: Config.projectCode
      }
    }
  });
}

/**
 * 二氧化碳更新或新增
 *
 * @param Array list
 */
export function co2SaveOrUpdate(list) {
  return request({
    url: `/trip/co2/saveOrUpdate/${Config.projectCode}`,
    method: "post",
    data: {
      body: list
    }
  });
}
