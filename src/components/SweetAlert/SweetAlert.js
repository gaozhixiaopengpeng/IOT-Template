/*
 * @Author: zhipeng
 * @Date: 2020-04-10 09:51:05
 * @LastEditTime: 2020-04-10 14:57:23
 * @LastEditors: Please set LastEditors
 * @Description: sweet alert components
 * @FilePath: /material-pro-react/src/components/SweerAlert/SweetAlert.js
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";
const useStyles = makeStyles(styles);

export default function Sweetalert(props) {
  console.log(props);
  const {
    title,
    show,
    onConfirm,
    onCancel,
    showCancel,
    showConfirm,
    warning
  } = {
    ...props
  };
  const classes = useStyles();
  return (
    <SweetAlert
      warning={typeof warning === "undefined" ? true : false}
      style={{ display: "block", marginTop: "100px" }}
      title={title}
      onConfirm={onConfirm}
      onCancel={onCancel}
      show={show}
      confirmBtnCssClass={classes.button + " " + classes.success}
      cancelBtnCssClass={classes.button + " " + classes.danger}
      showCancel={typeof showCancel === "undefined" ? false : true}
      showConfirm={typeof showConfirm === "undefined" ? true : false}
    ></SweetAlert>
  );
}

Sweetalert.prototype = {
  title: PropTypes.string,
  warning: PropTypes.bool,
  show: PropTypes.bool,
  showCancel: PropTypes.bool,
  showConfirm: PropTypes.bool,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  content: PropTypes.func
};
