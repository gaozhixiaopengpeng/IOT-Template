/*
 * @Author: zhipeng
 * @Date: 2020-04-17 16:32:26
 * @LastEditTime: 2020-06-15 13:29:16
 * @LastEditors: Please set LastEditors
 * @Description: tinyMCE editor
 * @FilePath: /material-pro-react/src/components/Tinymce/Tinymce.js
 */
import React, {  useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import toolbar from "./toolbar";
import plugins from "./plugins";
import PropTypes from "prop-types";
import store from "redux/store";
import { imgUrl } from "api/imgUrl";
// import "assets/js/tinymce.min.js";

export default function Tinymce(props) {
  const {
    initialValue,
    width,
    height,
    getEditorValue,
    onSuccess,
    folder,
    id,
    value
  } = {
    ...props
  };
  const [language, setLanguage] = useState();
  const [loading, setLoading] = useState(true);
  const handleEditorChange = (content, id) => {
    getEditorValue && getEditorValue(content, id);
  };

  React.useEffect(() => {
    // get language
    let status = true;
    if (status) {
      let lan = store.getState();
      if (lan.locale === "zh") {
        setLanguage("zh_CN");
      } else {
        setLanguage("en");
      }
    }
    return () => (status = false);
  }, []);

  return (
    <div
      style={{
        height: typeof height === "undefined" ? "500px" : height,
        overflow: "hidden"
      }}
    >
      <div
        style={{
          width: typeof width === "undefined" ? "100%" : width,
          height: typeof height === "undefined" ? "500px" : height,
          display: loading ? "flex" : "none",
          justifyContent: "center", //x轴排列
          alignItems: "center" //y轴排列
        }}
      >
        <div
          style={{
            animation:
              "MuiCircularProgress-keyframes-circular-rotate 1.4s linear infinite"
          }}
        >
          <svg
            style={{
              width: "40px",
              height: "40px",
              color: "#3f51b5",
              display: "block"
            }}
            className="turn"
            viewBox="22 22 44 44"
          >
            <circle
              style={{
                animation:
                  "MuiCircularProgress-keyframes-circular-dash 1.4s ease-in-out infinite",
                strokeDasharray: "80px, 200px",
                strokeDashoffset: "0px",
                stroke: "currentColor"
              }}
              cx="44"
              cy="44"
              r="20.2"
              fill="none"
              strokeWidth="3.6"
            ></circle>
          </svg>
        </div>
      </div>
      <Editor
        id={typeof id === "undefined" ? "Editor" : id}
        apiKey="wvx8962vjowt8bi8uivddh5oxk68hm5704h0hf2zr6ona5z4"
        initialValue={typeof initialValue === "undefined" ? "" : initialValue}
        value={typeof value === "undefined" ? "" : value}
        init={{
          menubar: false,
          language: language,
          plugins: plugins,
          toolbar: toolbar,
          width: typeof width === "undefined" ? "100%" : width,
          // height: typeof height === "undefined" ? "500" : height,
          height: 500,
          // min_height: typeof min_height === "undefined" ? "300" : min_height,
          min_height: 300,
          toolbar_mode: "wrap",
          autoresize_on_init: false,
          images_upload_handler: function(blobInfo, success, failure) {
            /* let formdata = new FormData();
            console.log(blobInfo.blob());
            formdata.append("file", blobInfo.blob());
            console.log(formdata); */
            //**blob to dataURL**
            function blobToDataURL(blob, callback) {
              var a = new FileReader();
              a.onload = function(e) {
                callback(e.target.result);
              };
              a.readAsDataURL(blob);
            }
            blobToDataURL(blobInfo.blob(), e => {
              imgUrl({
                source: e,
                folder: typeof folder === "undefined" ? "sentinel" : folder
              })
                .then(data => {
                  onSuccess && onSuccess(data.data[0]["httpUrl"]);
                  success(data.data[0]["httpUrl"]);
                })
                .catch(err => {
                  console.log(err);
                  failure(err);
                });
            });
            // imgUrl({})
            //   .then(data => {
            //     console.log(data);
            //   })
            //   .catch(err => {
            //     console.log(err);
            //   });
          }
        }}
        // onEditorChange={onEditorChange}
        onEditorChange={handleEditorChange}
        onLoadContent={() => {
          console.log("onLoadContent");
        }}
        onInit={() => {
          // 这边如果没加载出来，设置一张默认加载图片
          console.log("onInit");
          setLoading(false);
        }}
      ></Editor>
    </div>
  );
}

Tinymce.prototype = {
  initialValue: PropTypes.string,
  width: PropTypes.width,
  height: PropTypes.string,
  min_height: PropTypes.string,
  getEditorValue: PropTypes.func,
  value: PropTypes.string,
  onSuccess: PropTypes.func,
  folder: PropTypes.string
};
