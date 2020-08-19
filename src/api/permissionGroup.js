/*
 * @Author: hua
 * @Date: 2020-04-22 16:23:36
 * @description:权限组管理接口
 * @LastEditors: hua
 * @LastEditTime: 2020-04-26 13:45:38
 */

import request from "../utils/request";
import Config from "settings";

/**
 * 查询项目的所有权限组
 *
 */
export function permissionGroupList() {
  return request({
    url: `/basic/permissionGroup/list/${Config.projectCode}`,
    method: "post",
    data: { body: {} }
  });
}

/**
 * 新增或修改权限组
 *
 * @param String name r
 * @param Number id
 */
export function permissionGroupSaveOrUpdate(name, id) {
  return request({
    url: `/basic/permissionGroup/saveOrUpdate/${Config.projectCode}`,
    method: "post",
    data: {
      body: id ? { name, id } : { name }
    }
  });
}

/**
 * 删除权限组
 *
 * @param Number id r
 */
export function permissionGroupDelete(id) {
  return request({
    url: `/basic/permissionGroup/delete/${Config.projectCode}`,
    method: "post",
    data: { body: { id } }
  });
}

/**
 * 更新菜单按钮权限
 *
 * @param Number id r
 * @param Array buttonPermissionList r
 * @param Array menuPermissionList r
 */
export function permissionGroupUpdatePermission(
  id,
  buttonPermissionList,
  menuPermissionList
) {
  return request({
    url: `/basic/permissionGroup/updatePermission/${Config.projectCode}`,
    method: "post",
    data: { body: { id, buttonPermissionList, menuPermissionList } }
  });
}

/**
 * 获取用户权限
 *
 * @param Number id
 */
export function permissionGroupPermission(id) {
  return request({
    url: `/basic/permissionGroup/permission/${Config.projectCode}`,
    method: "post",
    data: { body: { id } }
  });
}
