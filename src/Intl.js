/*
 * @Author: zhipeng
 * @Date: 2020-04-13 10:04:17
 * @LastEditTime: 2020-06-09 15:01:14
 * @Description: i18n
 * @FilePath: /material-pro-react/src/Intl.js
 */
import React, { Component } from "react";
import { IntlProvider } from "react-intl";
import zhCN from "locale/zhCN";
import enUS from "locale/enUS";
import store from "redux/store";
import { connect } from "react-redux";

import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import "assets/scss/material-dashboard-pro-react.scss?v=1.8.0";

const hist = createBrowserHistory();

let translate = function(tran_id) {
  let language = store.getState();
  let tran = {};
  if (language.locale.toLowerCase() == "zh") {
    tran = zhCN;
  } else {
    tran = enUS;
  }
  return tran[tran_id];
};

export { translate };

function Intl() {
  let language = store.getState();
  const getLocale = (locale) => {
    if (locale.toLowerCase() == "en") {
      return enUS;
    } else if (locale.toLowerCase() == "zh") {
      return zhCN;
    } else {
      return enUS;
    }
  };
  return (
    <IntlProvider
      locale={language.locale}
      messages={getLocale(language.locale)}
      key={language.locale}
    >
      <Router history={hist}>
        <Switch>
          {/* <Route path="/rtl" component={RtlLayout} /> */}
          <Route path="/auth" component={AuthLayout} />
          <Route path="/admin" component={AdminLayout} />
          <Redirect from="/" to="/admin/dashboard" />
          {/* <Redirect from="/" to="/auth/login-page" /> */}
        </Switch>
      </Router>
    </IntlProvider>
  );
}
const mapStateToProps = (language) => ({
  locale: language.locale,
  message: language.message,
});

export default connect(mapStateToProps)(Intl);
