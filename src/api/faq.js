/*
 * @Author: zhipeng
 * @Date: 2020-04-16 14:44:35
 * @LastEditTime: 2020-06-08 10:26:52
 * @LastEditors: Please set LastEditors
 * @Description: FAQ API
 * @FilePath: /material-pro-react/src/api/faq.js
 */
import request from "../utils/request";

export const faqGroupList = params => {
  return request({
    url: "basic/questionGroup/list/sentinel",
    method: "post",
    data: { body: { ...params } }
  });
};

export const faqGroupSaveOrUpdate = params => {
  return request({
    url: "basic/questionGroup/saveOrUpdate/sentinel",
    method: "post",
    data: { body: { ...params } }
  });
};

export const faqGroupDelete = params => {
  return request({
    url: "basic/questionGroup/delete/sentinel",
    method: "post",
    data: { body: { id: params.id } }
  });
};

export const faqTablelist = params => {
  return request({
    url: "basic/question/questionList/sentinel",
    method: "post",
    data: { body: { ...params } }
  });
};

/**
 * @param {id} params
 * get answer by id
 */
export const faqGetAnswer = params => {
  return request({
    url: "basic/question/answer/sentinel",
    method: "post",
    data: { body: { id: params.id } }
  });
};

export const faqDelete = params => {
  return request({
    url: "basic/question/delete/sentinel",
    method: "post",
    data: { body: { id: params.id } }
  });
};

export const faqSaveOrUpdate = params => {
  return request({
    url: "basic/question/saveOrUpdate/sentinel",
    method: "post",
    data: { body: { ...params } }
  });
};
