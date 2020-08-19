/*
 * @Author: zhipeng
 * @Date: 2020-05-13 16:37:53
 * @LastEditTime: 2020-05-18 17:50:58
 * @LastEditors: hua
 * @Description: In User Settings Edit
 * @FilePath: /material-pro-react/src/components/ColorPicker/ColorPicker.js
 */
"use strict";

import React from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    displayColorPicker: false,
    color: this.props.color ? this.props.color : "#E0660D"
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    this.setState({ color: color.hex });
    this.props.onSuccess && this.props.onSuccess(color.hex);
  };
  handleChangeColor = color => {
    this.setState({ color: color });
  };
  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "36px",
          height: "14px",
          borderRadius: "2px",
          background: `${this.state.color}`
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer"
        },
        popover: {
          position: "absolute",
          zIndex: "2"
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }
    });

    return (
      <div
        style={{
          display: this.props.style.display,
          marginTop: this.props.style.marginTop,
          float: this.props.style.float,
          width: this.props.style.width
            ? this.props.style.width
            : styles.color.width,
          height: this.props.style.height
            ? this.props.style.height
            : styles.color.height
        }}
      >
        <div style={styles.swatch} onClick={this.handleClick}>
          <div
            style={{
              width: this.props.style.width
                ? this.props.style.width
                : styles.color.width,
              height: this.props.style.height
                ? this.props.style.height
                : styles.color.height,
              borderRadius: styles.color.borderRadius,
              background: styles.color.background
            }}
          />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ColorPicker;
