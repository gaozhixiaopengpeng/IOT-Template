/*
 * @Author: hua
 * @Date: 2020-04-22 13:20:30
 * @description: 消息记录接口
 * @LastEditors: hua
 * @LastEditTime: 2020-05-06 14:42:47
 */

import request from "../utils/request";
import Config from "settings";

/**
 * 分页查询消息发送记录
 *
 * @param Number pageNumber
 * @param Number pageSize
 * @param String orderBy
 * @param String sortBy
 * @param String sendBy
 * @param String title
 */
export function messagePage(
  pageNumber,
  pageSize,
  orderBy,
  sortBy,
  sendBy,
  title
) {
  return request({
    url: `/message/message/page/${Config.projectCode}`,
    method: "post",
    data: { body: { pageNumber, pageSize, orderBy, sortBy, sendBy, title } }
  });
}
