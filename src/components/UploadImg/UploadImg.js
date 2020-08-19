/*
 * @Author: zhipeng
 * @Date: 2020-04-09 17:37:36
 * @LastEditTime: 2020-06-15 13:28:54
 * @LastEditors: Please set LastEditors
 * @Description: Upload image file
 * @FilePath: /material-pro-react/src/components/UploadImg/UploadImg.js
 */
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { DropzoneDialog } from "material-ui-dropzone";
import PropTypes from "prop-types";
import { imgUrl } from "api/imgUrl";

// let files = [];

export default function UploadImg(props) {
  const [open, setOpen] = useState(false);
  const { onSuccess, folder } = { ...props };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = files => {
    let reader = new FileReader();
    let file = files[0];
    reader.onloadend = () => {
      setOpen(false);
      // base64 => img url
      imgUrl({
        source: reader.result,
        folder: typeof folder === "undefined" ? "sentinel" : folder
      })
        .then(data => {
          onSuccess && onSuccess(data.data);
        })
        .catch(err => {
          console.log(err);
        });
    };
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        component="span"
        onClick={handleOpen}
      >
        Upload
      </Button>
      <DropzoneDialog
        open={open}
        onSave={handleSave}
        acceptedFiimples={["image/jpeg", "image/png", "image/bmp"]}
        showPreviews={true}
        filesLimit={1}
        maxFileSize={5000000}
        onClose={handleClose}
      />
    </div>
  );
}

UploadImg.prototype = {
  onSuccess: PropTypes.func,
  folder: PropTypes.string
};
