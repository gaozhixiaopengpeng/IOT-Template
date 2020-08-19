import request from "../utils/request";

export const userInfo = () => {
  return request({
    url: "http://rap2.taobao.org:38080/app/mock/239696/users",
    method: "get"
  });
};
