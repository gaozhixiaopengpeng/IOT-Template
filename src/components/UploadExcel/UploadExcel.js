/*
 * @Author: zhipeng
 * @Date: 2020-04-14 09:29:00
 * @LastEditTime: 2020-04-23 15:11:58
 * @LastEditors: Please set LastEditors
 * @Description: Upload excel
 * @FilePath: /material-pro-react/src/components/UploadExcel/UploadExcel.js
 */
import React from "react";
import * as XLSX from "xlsx";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

// icon
import PublishIcon from "@material-ui/icons/Publish";

import "assets/css/uploadExcel.css";

const excelInput = React.createRef();

export default function UploadExcel(props) {
  const { onSuccess } = { ...props };
  const handleClick = () => {
    excelInput.current.click();
  };

  const handleUploadExcel = e => {
    const files = e.target.files;
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      const rABS = !!fileReader.readAsBinaryString;
      fileReader.onload = event => {
        try {
          const { result } = event.target;
          const workbook = XLSX.read(result, {
            type: rABS ? "binary" : "array"
          });
          let data = [];
          // default get one excel
          for (const sheet in workbook.Sheets) {
            if (workbook.Sheets.hasOwnProperty(sheet)) {
              // excel ---> JSON
              data = data.concat(
                XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
              );
              break;
            }
          }
          onSuccess && onSuccess(data);
          resolve();
        } catch (e) {
          console.log(e);
          return;
        }
      };
      if (rABS) fileReader.readAsBinaryString(files[0]);
      else fileReader.readAsArrayBuffer(files[0]);
    });
  };
  return (
    <div className="excel-box">
      <Button
        variant="contained"
        color="primary"
        startIcon={<PublishIcon />}
        style={{ marginLeft: "15px" }}
        onClick={handleClick}
      >
        upload
      </Button>
      <input
        ref={excelInput}
        className="excel-upload-input"
        type="file"
        accept=".xlsx, .xls"
        onChange={handleUploadExcel}
      ></input>
    </div>
  );
}

UploadExcel.prototype = {
  onSuccess: PropTypes.func
};
