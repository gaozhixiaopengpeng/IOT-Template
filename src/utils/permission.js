/*
 * @Author: hua
 * @Date: 2020-04-26 13:23:43
 * @description:权限工具
 * @LastEditors: hua
 * @LastEditTime: 2020-04-27 16:30:23
 */
import { getButtonPermissionList, getMenuPermissionList } from "utils/auth";

/**
 * 菜单权限
 *
 * @param String name
 * @return Boolean
 */
export function menuHasPermission(name) {
  const permissionArr = getMenuPermissionList();
  if (permissionArr) {
    for (let i = 0; i < permissionArr.length; i++) {
      if (permissionArr[i]["languageKey"] == name) {
        return true;
      }
    }
  }
  return false;
}

/**
 * 按钮权限
 *
 * @param String name
 * @return Object
 */
export function buttonHasPermission(name) {
  const permissionArr = getButtonPermissionList();
  if (permissionArr) {
    for (let i = 0; i < permissionArr.length; i++) {
      if (permissionArr[i]["languageKey"] == name) {
        return {};
      }
    }
  }
  return { display: "none" };
}
