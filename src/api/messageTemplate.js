/*
 * @Author: hua
 * @Date: 2020-04-22 13:20:30
 * @description: 消息模板接口
 * @LastEditors: hua
 * @LastEditTime: 2020-04-30 17:37:39
 */

import request from "../utils/request";
import Config from "settings";

/**
 * 分页查询消息模板
 *
 * @param Number pageNumber
 * @param Number pageSize
 * @param String orderBy
 * @param String sortBy
 */
export function messageTemplatePage(pageNumber, pageSize, orderBy, sortBy) {
  return request({
    url: `/message/messageTemplate/page/${Config.projectCode}`,
    method: "post",
    data: { body: { pageNumber, pageSize, orderBy, sortBy } }
  });
}

/**
 * 新增或修改消息模板
 *
 * @param String title
 * @param String messageChannel
 * @param Number id
 */
export function messageTemplateSaveOrUpdate(title, messageChannel, id) {
  let reqData = {};
  if (id) {
    reqData = { title, messageChannel, id };
  } else {
    reqData = { title, messageChannel };
  }
  return request({
    url: `/message/messageTemplate/saveOrUpdate/${Config.projectCode}`,
    method: "post",
    data: { body: reqData }
  });
}

/**
 * 删除消息模板
 *
 * @param Number id
 */
export function messageTemplateDelete(id) {
  return request({
    url: `/message/messageTemplate/delete/${Config.projectCode}`,
    method: "post",
    data: { body: { id } }
  });
}
