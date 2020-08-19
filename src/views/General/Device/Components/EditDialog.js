/*
 * @Author: your name
 * @Date: 2020-08-18 14:57:11
 * @LastEditTime: 2020-08-19 10:16:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IOT Back Office/src/views/General/Device/Components/EditDialog.js
 */
import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useRef
} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";

const Child = (props, ref) => {
  const childRef = useRef();
  const [dialogVisible, setDialogVisible] = useState(false);

  const handleDialogClose = () => {
    setDialogVisible(false);
  };

  const handleConfirm = () => {};

  // 暴露给子组件的方法，给父组件调用
  useImperativeHandle(ref, () => {
    return {
      handleDialogData: () => {},
      handleDialogOpen: () => {
        setDialogVisible(true);
      }
    };
  });
  return (
    <Dialog
      ref={childRef}
      open={dialogVisible}
      aria-labelledby="form-dialog-title"
      maxWidth="lg"
    >
      <DialogTitle>Edit Device Info</DialogTitle>
      <DialogContent className="dialogWidth">
        <GridContainer>
          {/* <GridItem xs={12} sm={2}>
            <FormLabel className={validationClasses.labelHorizontal}>
              <FormattedMessage id="TypeName"></FormattedMessage>
            </FormLabel>
          </GridItem>
          <GridItem xs={12} sm={7}>
            <CustomInput
              success={nameState === "success"}
              error={nameState === "error"}
              id="name"
              formControlProps={{
                fullWidth: true
              }}
              value={String(name)}
              inputProps={{
                onChange: event => {
                  let value = event.target.value;
                  let result = verifyLength(value, 1);
                  if (result) {
                    setNameState("success");
                  } else {
                    setNameState("error");
                  }

                  setName(value);
                },
                type: "text",
                endAdornment:
                  nameState === "error" ? (
                    <InputAdornment position="end">
                      <Close className={validationClasses.danger} />
                    </InputAdornment>
                  ) : (
                    undefined
                  )
              }}
            />
          </GridItem> */}
        </GridContainer>
        <DialogActions>
          <Button variant="contained" onClick={handleDialogClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default forwardRef(Child);
