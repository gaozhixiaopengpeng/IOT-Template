/*
 * @Author: your name
 * @Date: 2020-04-22 13:28:55
 * @LastEditTime: 2020-05-09 13:43:15
 * @LastEditors: hua
 * @Description: In User Settings Edit
 * @FilePath: /material-pro-react/src/utils/request.js
 */
import axios from "axios";
import Config from "settings";
import { getToken, getExpiration, setToken, setExpiration } from "utils/auth";
import Alert from "utils/Alert";
import { translate } from "Intl";
// 创建axios实例
const service = axios.create({
  baseURL: Config.rest, //process.env.BASE_API,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000 // request timeout
});

// request拦截器
service.interceptors.request.use(
  async config => {
    if (getToken()) {
      let expiration = getExpiration();
      if (expiration) {
        let date = new Date();
        // 过期前2分钟去换取token
        if (expiration - 120 <= date.getSeconds()) {
          //过期重新获取token
          let res = await axios.post(Config.rest + "/auth/refresh", {
            headers: { Authorization: getToken() } //设置header信息
          });
          console.log(res);
          setToken(res.body.token);
          setExpiration(res.body.expiration);
          config.headers["Authorization"] = res.body.token;
        } else {
          config.headers["Authorization"] = getToken();
        }
      }
    }

    if (config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    console.log(config);
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const code = response.data.code;
    let errorMsg = "";
    if (code === "000000" || code === "0000" || code === "210010") {
      return response.data;
    }
    if (Object.keys(Config.errorCode).indexOf(code)) {
      errorMsg = translate(Config.errorCode[code])
        ? translate(Config.errorCode[code])
        : Config.errorCode[code];
    }
    Alert.autoClose({
      alertTip: errorMsg,
      type: "error"
    });
    if (code === "000004") {
      window.location.href = "/auth/login-page";
    }
    return Promise.reject(response.data);
  },
  error => {
    let code = 0;
    try {
      code = error.response.data.status;
    } catch (e) {
      if (error.toString().indexOf("Error: timeout") !== -1) {
        // message.error("请求连接超时", 5, 3);
        Alert.autoClose({
          alertTip: error,
          type: "error"
        });
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
export default service;
