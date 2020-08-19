/*
 * @Author: hua
 * @Date: 2020-04-22 13:20:30
 * @description: 菜单管理接口
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-22 17:00:02
 */

import request from "../utils/request";
import Config from "settings";

/**
 * 查询项目的所有菜单
 *
 */
export function menuList() {
  return request({
    url: `/basic/menu/list/${Config.projectCode}`,
    method: "post",
    data: { body: {} }
  });
}

/**
 * 保存或更新菜单
 *
 * @param Number id
 * @param String name
 * @param String languageKey
 * @param String icon
 * @param String url
 * @param Number sorting
 * @param Number parent
 * @param String description
 */
export function menuSaveOrUpdate(
  id,
  name,
  languageKey,
  icon,
  url,
  sorting,
  parent,
  description
) {
  return request({
    url: `/basic/menu/saveOrUpdate/${Config.projectCode}`,
    method: "post",
    data: {
      body:
        id == 0
          ? { name, languageKey, icon, url, sorting, parent, description }
          : { id, name, languageKey, icon, url, sorting, parent, description }
    }
  });
}

/**
 * 删除菜单
 *
 * @param Number id
 */
export function menuDelete(id) {
  return request({
    url: `/basic/menu/delete/${Config.projectCode}`,
    method: "post",
    data: { body: { id } }
  });
}
