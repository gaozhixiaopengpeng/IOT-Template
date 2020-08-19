import Config from "settings";
import { setLocale } from "utils/locale";
import {
  getButtonPermissionList,
  getMenuPermissionList,
  getToken,
  getUserName,
} from "utils/auth";

const initialState = {
  locale: Config.locale,
  avatar: null,
  username: getUserName(),
  introduction: "",
  token: getToken() ? getToken() : "",
  buttonPermissionList: getButtonPermissionList()
    ? getButtonPermissionList()
    : [],
  menuPermissionList: getMenuPermissionList() ? getMenuPermissionList() : [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "locale":
      setLocale(action.locale);
      return Object.assign({}, state, {
        locale: action.locale,
      });
    case "user":
      return Object.assign({}, state, {
        username: action.user.username,
        avatar: action.user.avatar,
        introduction: action.user.introduction,
        token: action.user.token,
        buttonPermissionList: action.user.buttonPermissionList,
        menuPermissionList: action.user.menuPermissionList,
      });
    default:
      return state;
  }
};
