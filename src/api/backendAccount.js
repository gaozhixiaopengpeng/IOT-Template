/*
 * @Author: hua
 * @Date: 2020-04-22 13:20:30
 * @description: 管理员管理接口
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-29 13:30:34
 */

import request from "../utils/request";
import Config from "settings";

/**
 * 查询项目的所有管理员用户
 *
 * @param Number pageNumber r
 * @param Number pageSize   r
 * @param String orderBy    r
 * @param String sortBy     r
 * @param String username
 * @param Number department
 * @param Number permissionGroupId
 */
export function backendAccountPage(
  pageNumber,
  pageSize,
  orderBy,
  sortBy,
  username,
  departmentId,
  permissionGroupId
) {
  let reqData = {
    pageNumber,
    pageSize,
    orderBy,
    sortBy,
    username,
    departmentId,
    permissionGroupId
  };
  if (!reqData.username) {
    delete reqData.username;
  }
  if (!reqData.departmentId) {
    delete reqData.departmentId;
  }
  if (!reqData.permissionGroupId) {
    delete reqData.permissionGroupId;
  }
  return request({
    url: `/basic/backendAccount/page/${Config.projectCode}`,
    method: "post",
    data: {
      body: reqData
    }
  });
}

/**
 * 保存或更新管理员用户
 *
 * @param Number departmentId r
 * @param String username r
 * @param String password r
 * @param Number permissionGroupId r
 */
export function backendAccountSaveOrUpdate(
  departmentId,
  username,
  password,
  permissionGroupId
) {
  return request({
    url: `/basic/backendAccount/saveOrUpdate/${Config.projectCode}`,
    method: "post",
    data: {
      body: {
        departmentId,
        username,
        password,
        permissionGroupId
      }
    }
  });
}

/**
 * 删除用户
 *
 * @param String username
 */
export function backendAccountDelete(username) {
  return request({
    url: `/basic/backendAccount/delete/${Config.projectCode}`,
    method: "post",
    data: { body: { username } }
  });
}

/**
 * 用户登录
 *
 * @param String username
 * @param String password
 */
export function login(username, password) {
  return request({
    url: `/basic/login` /* /${Config.projectCode} */,
    method: "post",
    data: { username, password }
  });
}
