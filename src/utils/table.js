/*
 * @Author: your name
 * @Date: 2020-04-15 13:14:49
 * @LastEditTime: 2020-06-12 14:53:06
 * @LastEditors: Please set LastEditors
 * @Description: 表格工具类
 * @FilePath: /material-pro-react/src/utils/table.js
 */
import React from "react";
import { FormattedMessage } from "react-intl";

/**
 * 点击选择高亮
 *
 * @param Event e
 * return void
 */
export const tableRowClick = e => {
  let tr = document.querySelectorAll(".MuiTable-root tbody tr");
  for (let i = 0; i < tr.length; i++) {
    tr[i].classList.remove("highlight-current-row");
  }
  e.currentTarget.classList.add("highlight-current-row");
};

/**
 * 删除表格行高亮
 *
 * return void
 */
export const removeTableRowClick = () => {
  let tr = document.querySelectorAll(".MuiTable-root tbody tr");
  for (let i = 0; i < tr.length; i++) {
    tr[i].classList.remove("highlight-current-row");
  }
};

/**
 * 首行高亮
 *
 * return void
 */
export const firstTableSelected = () => {
  let tr = document.querySelectorAll(".MuiTable-root tbody tr");
  for (let i = 0; i < tr.length; i++) {
    tr[i].classList.remove("highlight-current-row");
  }
  tr[0].classList.add("highlight-current-row");
};

/* 表格多语言结构 */
export const localization = {
  header: {
    actions: <FormattedMessage id="actions"></FormattedMessage>
  },
  toolbar: {
    addRemoveColumns: (
      <FormattedMessage id="addRemoveColumns"></FormattedMessage>
    ),
    showColumnsTitle: (
      <FormattedMessage id="showColumnsTitle"></FormattedMessage>
    ),
    searchTooltip: <FormattedMessage id="publicSearch"></FormattedMessage>,
    searchPlaceholder: <FormattedMessage id="publicSearch"></FormattedMessage>
  },
  body: {
    emptyDataSourceMessage: (
      <FormattedMessage id="emptyDataSourceMessage"></FormattedMessage>
    )
  }
};

/* 表格公共分页 */
export const pageSizeOptions = [10, 20, 50];
