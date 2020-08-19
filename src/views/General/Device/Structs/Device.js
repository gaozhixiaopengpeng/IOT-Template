/*
 * @Author: your name
 * @Date: 2020-08-18 13:46:24
 * @LastEditTime: 2020-08-18 18:13:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IOT Back Office/src/views/General/Device/Structs/Device.js
 */
import React from "react";
import { parseTime } from "utils/format";

export const columns = [
  {
    title: "Lock ID",
    field: "lockId"
  },
  {
    title: "Back Code",
    field: "backcode"
  },
  {
    title: "Batch Code",
    field: "batchcode"
  },
  {
    title: "Client",
    field: "client"
  },
  {
    title: "Group",
    field: "group"
  },
  {
    title: "Battery",
    field: "battery"
  },
  {
    title: "Extension Code",
    field: "extensionCode"
  },
  {
    title: "Firmware Version",
    field: "firmwareVersion"
  },
  {
    title: "Hardware Version",
    field: "hardwareVersion"
  },
  {
    title: "Updated Time",
    field: "updatedTime"
  },
  {
    title: "Reported GPS Coorinate Time",
    field: "coorinateTime"
  },
  {
    title: "Reported GPS Coorinate",
    field: "coorinate"
  },
  {
    title: "Status",
    field: "status"
  },
  {
    title: "Active",
    field: "active"
  }
];

export const mockData = [
  {
    id: 1,
    lockId: "732004546557",
    backcode: "8006001234",
    batchcode: "20200818",
    client: "client",
    group: "sentinel",
    battery: "4.2",
    extensionCode: "2020",
    firmwareVersion: "6.4Test",
    hardwareVersion: "a1.1",
    updatedTime: "2020/08/18 12:00:00",
    coorinateTime: "2020/08/18 13:00:00",
    coorinate: "31.5008116 120.3653063",
    status: 0,
    active: 0
  },
  {
    id: 1,
    lockId: "732004546558",
    backcode: "8006001235",
    batchcode: "202008189",
    client: "client2",
    group: "mobit",
    battery: "4.1",
    extensionCode: "202020",
    firmwareVersion: "6.4Test",
    hardwareVersion: "a1.1",
    updatedTime: "2020/08/18 10:00:00",
    coorinateTime: "2020/08/18 13:00:00",
    coorinate: "31.5008116 120.3653063",
    status: 1,
    active: 1
  }
];

export const bikeList = [
  {
    id: 1,
    value: "Back Code"
  },
  {
    id: 2,
    value: "Lock ID"
  },
  {
    id: 3,
    value: "Extension Code 1"
  },
  {
    id: 4,
    value: "Extension Code 2"
  },
  {
    id: 5,
    value: "Extension Code 3"
  },
  {
    id: 6,
    value: "Extension Code 4"
  }
];

export const firmVersionList = [
  {
    id: 1,
    value: "1.0"
  },
  {
    id: 2,
    value: "2.0"
  }
];

export const hardwareVersionList = [
  {
    id: 1,
    value: "a1.0"
  },
  {
    id: 2,
    value: "b1.0"
  }
];

export const batchCodeList = [
  {
    id: 1,
    value: "20200101"
  },
  {
    id: 2,
    value: "20200102"
  }
];

export const batteryList = [
  {
    id: 1,
    value: "> 70%"
  },
  {
    id: 2,
    value: "50% ~ 70%"
  }
];
