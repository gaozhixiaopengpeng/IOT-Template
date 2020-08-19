import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardFooter from "components/Card/CardFooter.js";
import store from "redux/store";

import { FormattedMessage } from "react-intl";

import avatar from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-dashboard-pro-react/views/lockScreenPageStyle.js";

const useStyles = makeStyles(styles);

export default function LockScreenPage() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [userAvatar, setUserAvatar] = React.useState("");
  React.useEffect(() => {
    let state = store.getState();
    setUserAvatar(state.avatar);
  });
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <form>
        <Card
          profile
          className={classes.customCardClass + " " + classes[cardAnimaton]}
        >
          <CardAvatar profile className={classes.cardAvatar}>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={avatar} alt="..." />
            </a>
          </CardAvatar>
          <CardBody profile>
            {/* <h4 className={classes.cardTitle}>Tania Andrew</h4> */}
            <h4 className={classes.cardTitle}>{userAvatar}</h4>
            <CustomInput
              labelText="Enter Password"
              id="company-disabled"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "password",
                autoComplete: "off"
              }}
            />
          </CardBody>
          <CardFooter className={classes.justifyContentCenter}>
            <Button color="rose" round>
              <FormattedMessage id="lockScreenUnlock"></FormattedMessage>
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
