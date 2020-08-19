import Cookies from "js-cookie";
import Config from "../settings";

const NameKey = Config.nameKey;
const TokenKey = Config.tokenTey;
const ExpirationKey = Config.expirationKey;
const MenuKey = Config.menuKey;
const ButtonKey = Config.buttonKey;
const MapKey = Config.mapKey;

export const getToken = () => {
  return Cookies.get(TokenKey);
};

/**
 * 设置令牌
 *
 * @param {token value} token
 * @param {token expires: second} expires
 */
export const setToken = (token, expires) => {
  if (expires) {
    return Cookies.set(TokenKey, token, {
      expires: expires ? expires : Config.tokenCookiesExpires
    });
  }
  return Cookies.set(TokenKey, token);
};

export const removeToken = () => {
  return Cookies.remove(TokenKey);
};

/**
 * 设置菜单权限
 *
 * @param Array buttonPermissionList
 */
export const setButtonPermissionList = buttonPermissionList => {
  return window.localStorage.setItem(
    ButtonKey,
    JSON.stringify(buttonPermissionList)
  );
};

export const getButtonPermissionList = () => {
  return JSON.parse(window.localStorage.getItem(ButtonKey));
};

/**
 * 设置菜单权限
 *
 * @param Array menuPermissionList
 */
export const setMenuPermissionList = menuPermissionList => {
  return window.localStorage.setItem(
    MenuKey,
    JSON.stringify(menuPermissionList)
  );
};

export const getMenuPermissionList = () => {
  return JSON.parse(window.localStorage.getItem(MenuKey));
};

/**
 * 设置谷歌地图配置
 *
 * @param String mapKey
 */
export const setMapKey = mapKey => {
  return window.localStorage.setItem(MapKey, JSON.stringify(mapKey));
};

export const getMapKey = () => {
  return window.localStorage.getItem(MapKey);
};

/**
 * 设置过期时间
 *
 * @param Number expiration
 */

export const setExpiration = expiration => {
  let date = new Date();
  return Cookies.set(ExpirationKey, expiration + date.getSeconds());
};

/**
 * 获取过期时间
 *
 * @param Number expiration
 */
export const getExpiration = () => {
  return Cookies.get(ExpirationKey);
};

export const getUserName = () => {
  return Cookies.get(NameKey);
};

export const setUserName = username => {
  return Cookies.set(NameKey, username);
};

/**
 * 清除cookie
 *
 */
export const removeAll = () => {
  Cookies.remove(NameKey);
  Cookies.remove(TokenKey);
  Cookies.remove(ExpirationKey);
  Cookies.remove(MenuKey);
  Cookies.remove(ButtonKey);
};
