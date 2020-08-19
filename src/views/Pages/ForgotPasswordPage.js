import React from "react";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import { FormattedMessage } from "react-intl";
import { user } from "redux/actionCreators";
import store from "redux/store";
import { translate } from "Intl";
import {
  setToken,
  setExpiration,
  setButtonPermissionList,
  setMenuPermissionList,
  setUserName
} from "utils/auth";
import Alert from "utils/Alert";

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
// api
import { login } from "api/backendAccount";
// api
import { buttonList } from "api/button";
const useStyles = makeStyles(styles);

export default function LoginPage() {
  let history = useHistory();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();

  const toFortgotPasswordPage = () => {
    history.push("/auth/forgot-password-page");
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={5}>
          <form>
            <Card login className={classes[cardAnimaton]}>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="rose"
              >
                <h4 className={classes.cardTitle}>FORGOT PASSWORD</h4>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText={"Email Address"}
                  id="userName"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AccountCircleIcon
                          className={classes.inputAdornmentIcon}
                        />
                      </InputAdornment>
                    )
                  }}
                />
                <div style={{ textAlign: "left" }}>
                  <span
                    style={{
                      cursor: "pointer",
                      textDecorationLine: "underline"
                    }}
                    onClick={toFortgotPasswordPage}
                  >
                    FORGOT PASSWORD
                  </span>
                </div>
                <CustomInput
                  labelText={"Verification Code"}
                  id="password"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>
                          <LockIcon className={classes.inputAdornmentIcon} />
                        </Icon>
                      </InputAdornment>
                    ),
                    type: "password",
                    autoComplete: "off",
                    onKeyPress: e => {
                      console.log(e);
                      if (e.which !== 13) {
                        return;
                      }
                    }
                  }}
                />
                <CustomInput
                  labelText={"Verification Code"}
                  id="password"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>
                          <LockIcon className={classes.inputAdornmentIcon} />
                        </Icon>
                      </InputAdornment>
                    ),
                    type: "password",
                    autoComplete: "off",
                    onKeyPress: e => {
                      console.log(e);
                      if (e.which !== 13) {
                        return;
                      }
                    }
                  }}
                />
                <CustomInput
                  labelText={"New Password"}
                  id="password"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>
                          <LockIcon className={classes.inputAdornmentIcon} />
                        </Icon>
                      </InputAdornment>
                    ),
                    type: "password",
                    autoComplete: "off",
                    onKeyPress: e => {
                      console.log(e);
                      if (e.which !== 13) {
                        return;
                      }
                    }
                  }}
                />
                <CustomInput
                  labelText={"Confirm Password"}
                  id="password"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>
                          <LockIcon className={classes.inputAdornmentIcon} />
                        </Icon>
                      </InputAdornment>
                    ),
                    type: "password",
                    autoComplete: "off",
                    onKeyPress: e => {
                      console.log(e);
                      if (e.which !== 13) {
                        return;
                      }
                    }
                  }}
                />
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button color="rose" simple size="lg" block>
                  CONFIRM
                </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
