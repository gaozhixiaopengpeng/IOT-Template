/*
 * @Author: smk
 * @Date: 2020-04-22 10:23:04
 * @LastEditTime: 2020-08-18 10:42:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /material-dashboard-pro-react/src/tool.js
 */
import zhCN from "locale/zhCN";
import enUS from "locale/enUS";
import store from "redux/store";
import ExportJsonExcel from "js-export-excel";

//表格导出
const handExport = (columns, tableList, excelName) => {
  let tl = [];
  let header = [];
  columns.forEach(item => {
    item["title"]["props"] == undefined
      ? header.push(item.field)
      : header.push(translate(item["title"]["props"]["id"]));
  });
  tableList.forEach(item => {
    let dic = {};
    let i = 0;
    columns.forEach(o => {
      i++;
      let v = item[o.field];
      dic[i] = v;
    });
    tl.push(dic);
  });
  var option = {};
  option.fileName = excelName;
  option.datas = [
    {
      sheetData: tl,
      sheetHeader: header
    }
  ];
  var toExcel = new ExportJsonExcel(option);
  toExcel.saveExcel();
};

//国际化api
const translate = function(tran_id) {
  let language = store.getState();
  let tran = {};
  if (language.locale == "zh") {
    tran = zhCN;
  } else {
    tran = enUS;
  }
  return tran[tran_id];
};

export { translate, handExport };
