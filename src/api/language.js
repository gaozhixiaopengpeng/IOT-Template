/*
 * @Author: zhipeng
 * @Date: 2020-04-14 16:28:32
 * @LastEditTime: 2020-06-08 10:24:04
 * @LastEditors: Please set LastEditors
 * @Description: language Api
 * @FilePath: /material-pro-react/src/api/language.js
 */
import request from "../utils/request";

export const languageTablelist = () => {
  return request({
    url: "basic/language/all/sentinel",
    method: "post",
    data: {}
  });
};

export const languageSaveOrUpdate = params => {
  return request({
    url: "basic/language/saveOrUpdate/sentinel",
    method: "post",
    data: { body: { ...params } }
  });
};

export const languageDelete = params => {
  return request({
    url: "basic/language/delete/sentinel",
    method: "post",
    data: { body: { id: params.id } }
  });
};

export const getActiveLanguage = () => {
  return request({
    url: "basic/language/defaultLanguage/sentinel",
    method: "post",
    data: { body: {} }
  });
};
