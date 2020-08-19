/*
 * @Author: hua
 * @Date: 2020-05-12 16:48:06
 * @description: 卡管理接口
 * @LastEditors: hua
 * @LastEditTime: 2020-05-13 10:15:13
 */
import request from "../utils/request";
import Config from "settings";

/**
 * 分页查询卡管理
 *
 * @param Number pageNumber
 * @param Number pageSize
 * @param String orderBy
 * @param String sortBy
 */
export function cardPage(pageNumber, pageSize, orderBy, sortBy) {
  return request({
    url: `/card/card/page/${Config.projectCode}`,
    method: "post",
    data: { body: { pageNumber, pageSize, orderBy, sortBy } }
  });
}

/**
 * 新增或修改卡
 *
 * @param Number status
 * @param String accountUuid
 * @param String cardCode
 * @param Number cardTypeId
 * @param Number id
 */
export function cardSaveOrUpdate(
  status,
  accountUuid,
  cardCode,
  cardTypeId,
  id
) {
  let reqData = {};
  if (id) {
    reqData = { status, accountUuid, cardCode, cardTypeId, id };
  } else {
    reqData = { status, accountUuid, cardCode, cardTypeId };
  }
  return request({
    url: `/card/card/saveOrUpdate/${Config.projectCode}`,
    method: "post",
    data: { body: reqData }
  });
}

/**
 * 删除卡
 *
 * @param Number id
 */
export function cardDelete(id) {
  return request({
    url: `/card/card/delete/${Config.projectCode}`,
    method: "post",
    data: { body: { id } }
  });
}

/**
 * 分页查询卡管理
 *
 * @param Number pageNumber
 * @param Number pageSize
 * @param String orderBy
 * @param String sortBy
 */
export function cardTypePage(pageNumber, pageSize, orderBy, sortBy) {
  return request({
    url: `/card/cardType/page/${Config.projectCode}`,
    method: "post",
    data: { body: { pageNumber, pageSize, orderBy, sortBy } }
  });
}

/**
 * 新增或修改卡类型
 *
 * @param Number name
 * @param String description
 * @param Number id
 */
export function cardTypeSaveOrUpdate(name, description, id) {
  let reqData = {};
  if (id) {
    reqData = { name, description, id };
  } else {
    reqData = { name, description };
  }
  return request({
    url: `/card/cardType/saveOrUpdate/${Config.projectCode}`,
    method: "post",
    data: { body: reqData }
  });
}

/**
 * 删除卡
 *
 * @param Number id
 */
export function cardTypeDelete(id) {
  return request({
    url: `/card/cardType/delete/${Config.projectCode}`,
    method: "post",
    data: { body: { id } }
  });
}
