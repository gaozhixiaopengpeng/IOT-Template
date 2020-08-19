/*
 * @Author: zhipeng
 * @Date: 2020-04-09 15:34:33
 * @LastEditTime: 2020-08-18 14:26:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-13 18:31:51
 * @LastEditors: Please set LastEditors
 * @Description: react router
 * @FilePath: /material-pro-react/src/routes.js
 */
import Dashboard from "views/Dashboard/Dashboard.js";
import LoginPage from "views/Pages/LoginPage.js";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import ForgotPasswordPage from "views/Pages/ForgotPasswordPage.js";
import Device from "views/General/Device";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    permission: "Dashboard",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/forgot-password-page",
    name: "Forgot Password Page",
    rtlName: "هعذاتسجيل الدخول",
    mini: "FP",
    rtlMini: "هعذا",
    component: ForgotPasswordPage,
    layout: "/auth"
  },
  {
    path: "/login-page",
    name: "Login Page",
    rtlName: "هعذاتسجيل الدخول",
    mini: "L",
    rtlMini: "هعذا",
    component: LoginPage,
    layout: "/auth"
  },
  {
    path: "/device",
    name: "Device",
    icon: DashboardIcon,
    component: Device,
    layout: "/admin"
  }
];
export default dashRoutes;
