// import React, { Component } from "react";
/**
 *
 * @param {emial add} value
 * true: email
 * false: otherwise
 */
export const verifyEmail = value => {
  var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRex.test(value)) {
    return true;
  }
  return false;
};

/**
 *
 * @param {string} value
 * @param {length} length
 * true: length ok
 * false: length not ok
 */
export const verifyLength = (value, length) => {
  if (value.length >= length) {
    return true;
  }
  return false;
};

/**
 *
 * @param {string1} string1
 * @param {string2} string2
 * true: equal
 * false: not equal
 */
export const compare = (string1, string2) => {
  if (string1 === string2) {
    return true;
  }
  return false;
};

/**
 *
 * @param {number} value
 * true: number
 * false: not number
 */
export const verifyNumber = value => {
  var numberRex = new RegExp("^[0-9]+$");
  if (numberRex.test(value)) {
    return true;
  }
  return false;
};

/**
 *
 * @param {string} value
 * true: url
 * false: not url
 */
export const verifyUrl = value => {
  try {
    new URL(value);
    return true;
  } catch (_) {
    return false;
  }
};

export const verify = (event, stateName, type, stateNameEqualTo, maxValue) => {
  if (type === "email") {
    if (verifyEmail(event.target.value)) {
      return { [stateName + "State"]: "success" };
    } else {
      return { [stateName + "State"]: "error" };
    }
  } else if (type === "length") {
    if (verifyLength(event.target.value, stateNameEqualTo)) {
      return { [stateName + "State"]: "success" };
    } else {
      return { [stateName + "State"]: "error" };
    }
  } else if (type === "password") {
    if (verifyLength(event.target.value, 1)) {
      return { [stateName + "State"]: "success" };
    } else {
      return { [stateName + "State"]: "error" };
    }
  } else if (type === "equalTo") {
    if (compare(event.target.value, this.state[stateNameEqualTo])) {
      return { [stateName + "State"]: "success" };
    } else {
      return { [stateName + "State"]: "error" };
    }
  } else if (type === "checkbox") {
    if (event.target.checked) {
      return { [stateName + "State"]: "success" };
    } else {
      return { [stateName + "State"]: "error" };
    }
  } else if (type === "number") {
    if (verifyNumber(event.target.value)) {
      return { [stateName + "State"]: "success" };
    } else {
      return { [stateName + "State"]: "error" };
    }
  } else if (type === "max-length") {
    if (verifyLength(event.target.value, stateNameEqualTo + 1)) {
      return { [stateName + "State"]: "success" };
    } else {
      return { [stateName + "State"]: "error" };
    }
  } else if (type === "url") {
    if (verifyUrl(event.target.value)) {
      return { [stateName + "State"]: "success" };
    } else {
      return { [stateName + "State"]: "error" };
    }
  } else if (type === "min-value") {
    if (
      verifyNumber(event.target.value) &&
      event.target.value >= stateNameEqualTo
    ) {
      return { [stateName + "State"]: "success" };
    } else {
      return { [stateName + "State"]: "error" };
    }
  } else if (type === "max-value") {
    if (
      verifyNumber(event.target.value) &&
      event.target.value <= stateNameEqualTo
    ) {
      return { [stateName + "State"]: "success" };
    } else {
      return { [stateName + "State"]: "error" };
    }
  } else if (type === "range") {
    if (
      verifyNumber(event.target.value) &&
      event.target.value >= stateNameEqualTo &&
      event.target.value <= maxValue
    ) {
      return { [stateName + "State"]: "success" };
    } else {
      return { [stateName + "State"]: "error" };
    }
  } else if (type === "checkbox") {
    return { [stateName]: event.target.checked };
  } else {
    return { [stateName + "State"]: "error" };
  }
};

export const isArray = a => {
  if (typeof a == "undefined") {
    return false;
  }
  if (
    a instanceof Array ||
    ((!(a instanceof Object) &&
      Object.prototype.toString.call(a) == "[object Array]") ||
      (typeof a.length == "number" &&
        typeof a.splice != "undefined" &&
        typeof a.propertyIsEnumerable != "undefined" &&
        !a.propertyIsEnumerable("splice")))
  ) {
    return true;
  }
  return false;
};
