/**
 * 解析时间戳
 *
 * @param Number  time
 * @param String  cFormat
 * @return String time_str
 */
export const parseTime = (time, cFormat) => {
  if (!time) {
    return "";
  }
  const format = cFormat || "{d}/{m}/{y} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return time_str;
};

/**
 * 解析部门列表
 *
 * @param Array rawList
 * @retun Array list
 */
export const parseDepartment = rawList => {
  let list = [];
  let topList = [];
  let secondList = [];
  let thirdList = [];
  //先取出第一级
  rawList.forEach(element => {
    if (element.parent == 0) {
      topList.push(element);
    }
  });
  //取出第二级
  rawList.forEach(element => {
    topList.forEach(item => {
      if (element.parent == item.id) {
        element.name = "|————" + element.name;
        secondList.push(element);
      }
    });
  });
  //取出第三级
  rawList.forEach(element => {
    secondList.forEach(item => {
      if (element.parent == item.id) {
        element.name = "|————————" + element.name;
        thirdList.push(element);
      }
    });
  });
  //整合
  topList.forEach(element => {
    list.push(element);
    secondList.forEach(item => {
      if (item.parent == element.id) {
        list.push(item);
      }
      thirdList.forEach(thirdItem => {
        if (thirdItem.parent == item.id) {
          list.push(thirdItem);
        }
      });
    });
  });
  return list;
};

/**
 * 过滤html标签
 *
 * @param String msg
 * @return String msg
 */
export const filterHTMLTag = msg => {
  msg = msg.replace(/<\/?[^>]*>/g, ""); //去除HTML Tag
  msg = msg.replace(/[|]*\n/, ""); //去除行尾空格
  msg = msg.replace(/&npsp;/gi, ""); //去掉npsp
  return msg;
};
