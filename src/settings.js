/**
 * Save system configurable information
 */
const Config = {
  /**
   * Admin title
   */
  title: "Sentinel Admin",
  /**
   * Api request time, default 5s. (ms)
   */
  timeout: 5000,
  /**
   * token key
   */
  tokenTey: "SENTINEL-ADMIN-TOKEN",
  /**
   * expiration key
   */
  expirationKey: "SENTINEL-ADMIN-EXPIRATION",
  /**
   * menu key
   */
  menuKey: "SENTINEL-ADMIN-MENU",
  /**
   * button key
   */
  buttonKey: "SENTINEL-ADMIN-BUTTON",
  /**
   * map key
   */
  mapKey: "SENTINEL-MAP-KEY",
  /**
   * name key
   */
  nameKey: "SENTINEL-ADMIN-NAME",
  /**
   * remember password status token expires days.
   */
  tokenCookiesExpires: 7,
  /**
   * rest API
   */
  // rest: "http://36.154.239.26:10001",
  rest: "http://192.168.100.244:10110",
  //rest: "http://192.168.100.117:8081",
  // rest: "http://192.168.100.244:8086",
  // rest: "http://192.168.100.111:8085",
  //rest:"http://192.168.100.177:8086", //yz
  /**
   * default language message
   */
  locale: "en",
  /**
   * system suppot language
   */
  systemLocales: ["en", "zh"],
  /**
   * base 64 -> url
   * api
   */
  imgUrlApi: "http://files.mobit.eu:9999/uploadForBase64Simple",
  projectCode: "sentinel",

  /* request error code */
  errorCode: {
    "000000": "SUCCESS",
    "000001": "FAILED",
    "000002": "PARAMETER_CHECK_FAILED",
    "000003": "SYSTEM_EXCEPTION",
    "000004": "TOKEN_ERROR",
    "000005": "INSUFFICIENT_PERMISSIONS",
    "000006": "LOGIN_FAILURE",
    "000007": "USER_DOES_NOT_EXIST",
    "000008": "LOGIN_PASSWORD_WRONG",
    "000009": "ORIGINAL_PASSWORD_WRONG",
    "100001": "DEVICE_TYPE_DOES_NOT_EXIST",
    "100002": "DEVICE_DOES_NOT_EXIST",
    "100003": "DEVICE_TAG_DOES_NOT_EXIST",
    "100004": "DEVICE_FUNCTION_DOES_NOT_EXIST",
    "100005": "PARAMETER_OF_SEND_COMMAND_IS_WRONG",
    "100006": "CAN_NOT_FIND_MQ_CONSUMER",
    "100007": "DEVICE_FUNCTION_EXISTED",
    "100008": "DEVICE_MESSAGE_EXISTED",
    "100009": "DEVICE_GROUP_DOES_NOT_EXIST",
    "110001": "NO_BINDING_INFO",
    "210001": "PROJECT_DOES_NOT_EXIST",
    "210002": "DEPARTMENT_DOES_NOT_EXIST",
    "210003": "PARENT_DEPARTMENT_DOES_NOT_EXIST",
    "210004": "DEPARTMENT_EXISTED",
    "210005": "PERMISSION_GROUP_DOES_NOT_EXIST",
    "210006": "PERMISSION_GROUP_EXISTED",
    "210007": "MENU_DOES_NOT_EXIST",
    "210008": "QUESTION_NAME_EXISTED",
    "210009": "DEEP_OVER_THREE",
    "210010": "DEFAULT_LANGUAGE_NOT_EXIST",
    "210011": "PROJECT_EXISTED",
    "210012": "CARD_EXISTED",
    "210013": "COORDINATES_DOES_NOT_EXISTED",
    "210014": "PARAM_WRONG",
    "210015": "DATA_EXISTED"
  }
};
export default Config;
