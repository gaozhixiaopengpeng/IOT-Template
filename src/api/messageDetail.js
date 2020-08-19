/*
 * @Author: hua
 * @Date: 2020-04-22 13:20:30
 * @description: 消息模板详情接口
 * @LastEditors: hua
 * @LastEditTime: 2020-05-06 14:42:47
 */

import request from "../utils/request";
import Config from "settings";

/**
 * 分页查询消息模板对应的消息细节
 *
 * @param Number pageNumber
 * @param Number pageSize
 * @param String orderBy
 * @param String sortBy
 * @param Number messageTemplateId
 */
export function messageDetailPage(
  pageNumber,
  pageSize,
  orderBy,
  sortBy,
  messageTemplateId
) {
  return request({
    url: `/message/messageDetail/page/${Config.projectCode}`,
    method: "post",
    data: { body: { pageNumber, pageSize, orderBy, sortBy, messageTemplateId } }
  });
}

/**
 * 新增或修改消息细节
 *
 * @param Number id
 * @param Number messageTemplateId
 * @param String language
 * @param String title
 * @param String imageTitle
 * @param String content
 */
export function messageDetailSaveOrUpdate(
  id,
  messageTemplateId,
  language,
  title,
  imageTitle,
  content
) {
  let reqData = {};
  if (id) {
    reqData = { messageTemplateId, language, title, imageTitle, content, id };
  } else {
    reqData = { messageTemplateId, language, title, imageTitle, content };
  }
  return request({
    url: `/message/messageDetail/saveOrUpdate/${Config.projectCode}`,
    method: "post",
    data: { body: reqData }
  });
}

/**
 * 删除消息细节
 *
 * @param Number id
 */
export function messageDetailDelete(id) {
  return request({
    url: `/message/messageDetail/delete/${Config.projectCode}`,
    method: "post",
    data: { body: { id } }
  });
}
