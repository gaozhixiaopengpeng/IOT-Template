/*
 * @Author: zhipeng
 * @Date: 2020-04-14 17:55:47
 * @LastEditTime: 2020-04-15 14:09:42
 * @LastEditors: zhipeng
 * @Description: unselected data sweet alert
 * @FilePath: /material-pro-react/src/components/SweetAlert/AutoSweetAlert.js
 */
import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import PropTypes from "prop-types";

export default function UnselectedSweetAlert(props) {
  const { show, onConfirm } = {
    ...props
  };

  return (
    <SweetAlert
      warning
      style={{ display: "block", marginTop: "100px" }}
      title="Material react"
      onConfirm={onConfirm}
      showConfirm={false}
      show={show}
    >
      Please select table data
    </SweetAlert>
  );
}

UnselectedSweetAlert.prototype = {
  show: PropTypes.bool,
  onConfirm: PropTypes.func
};
