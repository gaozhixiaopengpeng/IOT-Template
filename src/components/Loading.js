/*
 * @Author: smk
 * @Date: 2020-05-08 16:40:53
 * @LastEditTime: 2020-05-14 16:53:58
 * @LastEditors: hua
 * @Description: In User Settings Edit
 * @FilePath: /material-dashboard-pro-react/src/components/Loading.js
 */

import React from "react";

export default function Loading(props) {
  const { loading, height } = {
    ...props
  };

  return (
    <div
      style={{
        display: loading ? "flex" : "none",
        height: height ? height : "auto"
      }}
    >
      <div
        style={{
          display: loading ? "flex" : "none",
          justifyContent: "center", //x轴排列
          alignItems: "center", //y轴排列
          position: "absolute",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10
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
    </div>
  );
}

Loading.prototype = {};
