import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// import { Manager, Target, Popper } from "react-popper";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Popper from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
import GTranslateIcon from "@material-ui/icons/GTranslate";

// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

// function
import { getLocale } from "utils/locale";
import { removeAll } from "utils/auth";
import { language } from "redux/actionCreators";
import store from "redux/store";
import { user } from "redux/actionCreators";
import styles from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const [openNotification, setOpenNotification] = React.useState(null);
  const [locale, setLocale] = React.useState("EN");
  const [openLocale, setOpenLocale] = React.useState(null);

  const handleClickNotification = event => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const [openProfile, setOpenProfile] = React.useState(null);
  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };
  const handleLogOut = () => {
    //清除cookie
    removeAll();
    //清除localstorage
    localStorage.clear();
    //清除redux
    store.dispatch(
      user({
        username: "",
        avatar: "",
        introduction: "",
        token: "",
        buttonPermissionList: [],
        menuPermissionList: []
      })
    );
    //跳转首页
    window.location.href = "/auth/login-page";
  };
  const handleClickLocale = event => {
    if (openLocale && openLocale.contains(event.target)) {
      setOpenLocale(null);
    } else {
      setOpenLocale(event.currentTarget);
    }
  };
  const handleClickLocaleItem = (event, index) => {
    const unsubscribe = store.subscribe(() => console.log(store.getState()));
    if (index === 0) {
      store.dispatch(language("zh"));
    } else if (index === 1) {
      store.dispatch(language("en"));
    } else {
      store.dispatch(language("en"));
    }
    setOpenLocale(null);
    unsubscribe();
  };
  const handleCloseLocale = () => {
    setOpenLocale(null);
  };
  const classes = useStyles();
  const { rtlActive } = props;
  const searchButton =
    classes.top +
    " " +
    classes.searchButton +
    " " +
    classNames({
      [classes.searchRTL]: rtlActive
    });
  const dropdownItem = classNames(classes.dropdownItem, classes.primaryHover, {
    [classes.dropdownItemRTL]: rtlActive
  });
  const wrapper = classNames({
    [classes.wrapperRTL]: rtlActive
  });
  const managerClasses = classNames({
    [classes.managerClasses]: true
  });
  React.useEffect(() => {
    let status = true;
    let locale = getLocale();
    setLocale(locale);
    store.dispatch(language(locale));
    return () => (status = false);
  }, []);

  const handleEditPassword = () => {};

  return (
    <div className={wrapper}>
      <div className={managerClasses}>
        <Button
          color="transparent"
          aria-label="Person"
          justIcon
          aria-owns={openProfile ? "profile-menu-list" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
          muiClasses={{
            label: rtlActive ? classes.labelRTL : ""
          }}
        >
          <Person
            className={
              classes.headerLinksSvg +
              " " +
              (rtlActive
                ? classes.links + " " + classes.linksRTL
                : classes.links)
            }
          />
          <Hidden mdUp implementation="css">
            <span onClick={handleClickProfile} className={classes.linkText}>
              {rtlActive ? "الملف الشخصي" : "Profile"}
            </span>
          </Hidden>
        </Button>
        <Popper
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          placement="bottom"
          className={classNames({
            [classes.popperClose]: !openProfile,
            [classes.popperResponsive]: true,
            [classes.popperNav]: true
          })}
        >
          {({ TransitionProps }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list"
              style={{ transformOrigin: "0 0 0" }}
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleEditPassword}
                      className={dropdownItem}
                    >
                      EDIT PASSWORD
                    </MenuItem>
                    <Divider light />
                    <MenuItem onClick={handleLogOut} className={dropdownItem}>
                      SIGN OUT
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

HeaderLinks.propTypes = {
  rtlActive: PropTypes.bool
};
