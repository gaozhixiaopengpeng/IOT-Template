import React, { Component } from "react";
import ReactDOM from "react-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import alertStyles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";
import Button from "@material-ui/core/Button";
import zhCN from "locale/zhCN";
import enUS from "locale/enUS";
import store from "redux/store";
/**
 * 调用例子
 * import Alert from "utils/Alert";
 *
 * 失败
 * Alert.autoClose({
 *    alertTip: "",
 *    type: "error"
 * });
 *
 * 成功
 * Alert.autoClose({
 *    alertTip: "",
 *    type: "success"
 *  });
 *
 * 警告
 * Alert.open({
 *     type: "warning",
 *    alertTip: "",
 *    confirmAlert: handleAlertConfirm,
 *    closeAlert: handleAlertClose
 *  });
 */
let translate = function(tran_id) {
  let language = store.getState();
  let tran = {};
  if (language.locale == "zh") {
    tran = zhCN;
  } else {
    tran = enUS;
  }
  return tran[tran_id];
};
let defaultState = {
  /* 弹窗状态 */
  alertStatus: false,
  /* 标题 */
  // title: Config.title,
  title: "",
  /* 确认按钮描述文字 */
  confirmBtnText: "",
  /* 取消按钮描述文字 */
  cancelBtnText: "",
  /* 提示信息 */
  alertTip: translate("confirmDelete"),
  /* 类型，暂只支持：warning,success,error */
  type: "warning",
  /* success,error时弹窗的退出时间 */
  delayTime: 2000,
  /* 关闭，取消弹窗回调 */
  closeAlert: () => {},
  /* 确认按钮回调 */
  confirmAlert: () => {}
};
class Alert extends Component {
  state = {
    ...defaultState
  };
  componentDidMount() {
    console.log(alertStyles);
  }
  // 关闭弹框
  confirm = () => {
    this.setState({
      alertStatus: false
    });
    this.state.confirmAlert(this);
  };
  open = options => {
    console.log(alertStyles);
    options = options || {};
    options.alertStatus = true;
    this.setState({
      ...defaultState,
      ...options
    });
  };
  autoClose = options => {
    options = options || {};
    options.alertStatus = true;
    this.setState({
      ...defaultState,
      ...options
    });
    setTimeout(() => {
      this.setState({
        alertStatus: false
      });
    }, this.state.delayTime);
  };
  close() {
    console.log(this.state);
    this.state.closeAlert();
    this.setState({
      alertStatus: false
    });
  }
  render() {
    return (
      <div>
        {/* 警告 */}
        <SweetAlert
          warning
          style={{
            display: this.state.type == "warning" ? "block" : "none",
            marginTop: "100px"
          }}
          title={this.state.title}
          onConfirm={this.confirm.bind(this)}
          onCancel={this.close.bind(this)}
          show={this.state.alertStatus}
          customButtons={
            <React.Fragment>
              <Button variant="contained" onClick={this.close.bind(this)}>
                {this.state.cancelBtnText
                  ? this.state.cancelBtnText
                  : translate("publicCancel")}
              </Button>
              <Button
                style={{ marginLeft: 10 }}
                variant="contained"
                color="primary"
                onClick={this.confirm.bind(this)}
              >
                {this.state.confirmBtnText
                  ? this.state.confirmBtnText
                  : translate("publicConfirm")}
              </Button>
            </React.Fragment>
          }
          showCancel
        >
          {this.state.alertTip}
        </SweetAlert>
        {/* 成功失败状态 */}
        <div
          style={{
            display:
              this.state.type == "success" || this.state.type == "error"
                ? "block"
                : "none"
          }}
        >
          <SweetAlert
            type={this.state.type}
            style={{
              display:
                this.state.type == "success" || this.state.type == "error"
                  ? "block"
                  : "none",
              marginTop: "100px"
            }}
            title={this.state.title}
            onConfirm={this.confirm.bind(this)}
            show={this.state.alertStatus}
            confirmBtnStyle={alertStyles.button}
            showConfirm={false}
          >
            {this.state.alertTip}
          </SweetAlert>
        </div>
      </div>
    );
  }
}

let div = document.createElement("div");
let props = {};
document.body.appendChild(div);

// eslint-disable-next-line react/no-render-return-value
let Box = ReactDOM.render(React.createElement(Alert, props), div);

export default Box;
