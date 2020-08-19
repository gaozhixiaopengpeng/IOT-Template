/*
 * @Author: zhipeng
 * @Date: 2020-04-15 14:04:24
 * @LastEditTime: 2020-06-15 13:28:33
 * @LastEditors: Please set LastEditors
 * @Description: Delete button alert
 * @FilePath: /material-pro-react/src/components/SweetAlert/DeleteSweetAlert.js
 */
import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";

const useStyles = makeStyles(Styles);

export default function DeleteSweetAlert(props) {
  const classes = useStyles();
  const { show, onConfirm, onCancel, deleteValue } = {
    ...props
  };
  return (
    <SweetAlert
      warning
      style={{ display: "block", marginTop: "100px" }}
      title="Material react"
      onConfirm={onConfirm}
      onCancel={onCancel}
      show={show}
      confirmBtnCssClass={classes.button + " " + classes.success}
      cancelBtnCssClass={classes.button + " " + classes.danger}
      confirmBtnText="Yes, delete it!"
      cancelBtnText="Cancel"
      showCancel
    >
      Are you sure you want to delete this data?{" "}
      <span style={{ fontWeight: "bold" }}>
        {typeof deleteValue === "undefined" ? "" : deleteValue}
      </span>
      ?
    </SweetAlert>
  );
}

DeleteSweetAlert.prototype = {
  show: PropTypes.bool,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  deleteValue: PropTypes.string
};
