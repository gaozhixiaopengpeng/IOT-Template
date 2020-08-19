/*
 * @Author: your name
 * @Date: 2020-04-15 16:12:56
 * @LastEditTime: 2020-04-23 10:53:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /material-pro-react/src/components/SweetAlert/SuccessSweetAlert.js
 */
import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";

const useStyles = makeStyles(Styles);

export default function SubmitSweetAlert(props) {
  const classes = useStyles();
  const { type, show, onConfirm, content } = {
    ...props
  };
  return (
    <SweetAlert
      type={type}
      style={{ display: "block", marginTop: "100px" }}
      title="Material React!"
      onConfirm={onConfirm}
      show={show}
      confirmBtnCssClass={classes.button + " " + classes.success}
      showConfirm={false}
    >
      {content}
    </SweetAlert>
  );
}

SubmitSweetAlert.prototype = {
  onConfirm: PropTypes.func,
  show: PropTypes.bool,
  type: PropTypes.string,
  content: PropTypes.string
};
