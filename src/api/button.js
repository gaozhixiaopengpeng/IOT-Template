/*
 * @Author: hua
 * @Date: 2020-04-22 13:20:30
 * @description: 菜单管理接口
 * @LastEditors: hua
 * @LastEditTime: 2020-04-23 11:18:09
 */

import request from "../utils/request";
import Config from "settings";

/**
 * 查询项目的所有按钮和菜单
 *
 */
export function buttonList() {
  return request({
    url: `/basic/button/list/${Config.projectCode}`,
    method: "post",
    data: { body: {} }
  });
}

/**
 * 保存或更新按钮
 *
 * @param Number menuId
 * @param String name    r
 * @param String languageKey
 * @param String code
 * @param Number sorting
 * @param String description
 * @param Number id
 */
export function buttonSaveOrUpdate(
  menuId,
  name,
  languageKey,
  code,
  sorting,
  description,
  id
) {
  return request({
    url: `/basic/button/saveOrUpdate/${Config.projectCode}`,
    method: "post",
    data: {
      body:
        id == 0
          ? {
              menuId,
              name,
              languageKey,
              code,
              sorting,
              description
            }
          : {
              id,
              menuId,
              name,
              languageKey,
              code,
              sorting,
              description
            }
    }
  });
}

/**
 * 删除按钮
 *
 * @param Number id
 */
export function buttonDelete(id) {
  return request({
    url: `/basic/button/delete/${Config.projectCode}`,
    method: "post",
    data: { body: { id } }
  });
}
