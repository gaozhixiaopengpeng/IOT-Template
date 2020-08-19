/*
 * @Author: your name
 * @Date: 2020-08-18 11:22:59
 * @LastEditTime: 2020-08-19 10:21:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IOT Back Office/src/views/General/Device/index.js
 */
import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

// struct
import {
  columns,
  mockData,
  bikeList,
  firmVersionList,
  hardwareVersionList,
  batchCodeList,
  batteryList
} from "./Structs/Device";
import { localization } from "utils/table";
import EditDialog from "./Components/EditDialog.js";

import { tableRowClick, pageSizeOptions } from "utils/table";
import "assets/css/reset.css";

const tableColumns = columns;
let tableSelections = [];

const styles = {
  buttonStyle: {
    marginRight: "15px",
    marginTop: "16px"
  }
};
const useStyles = makeStyles(styles);

export default function Device() {
  const classes = useStyles();
  const editRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [orderBy, setOrderBy] = useState("id");
  const [sortBy, setSortBy] = useState("DESC");
  const [tableList, setTableList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [bikeCode, setBikeCode] = useState("");
  const [bikeCodeValue, setBikeCodeValue] = useState("");
  const [firmwareVersion, setFirmwareVersion] = useState("");
  const [hardwareVersion, setHardwareVersion] = useState("");
  const [batchCode, setBatchCode] = useState("");
  const [battery, setBattery] = useState("");
  const [client, setClient] = useState("");
  const [group, setGroup] = useState("");

  const handRowClick = (e, rowData) => {
    tableRowClick(e);
    tableSelections = [];
    tableSelections.push(rowData);
    console.log(rowData);
  };
  const handleOrderChange = (orderedColumnId, orderDirection) => {
    console.log(orderedColumnId, orderDirection);
    if (orderedColumnId !== -1) {
      setSortBy(orderDirection.toUpperCase());
      setOrderBy(columns[orderedColumnId]["field"]);
    }
  };
  const handleChangeRowsPerPage = changePageSize => {
    setPageNumber(0);
    setPageSize(changePageSize);
  };
  const handleChangePage = changePageNumber => {
    if (changePageNumber == pageNumber) {
      return;
    }
    setPageNumber(changePageNumber);
  };

  React.useEffect(() => {
    let status = true;
    setIsLoading(false);
    if (status) {
      setTableList(mockData);
    }
    return () => {
      tableSelections = [];
      status = false;
    };
  }, [pageNumber, pageSize, sortBy, orderBy]);

  const editDialogClick = () => {
    editRef.current.handleDialogData();
    editRef.current.handleDialogOpen();
  };

  return (
    <div>
      <EditDialog ref={editRef} />
      <GridContainer>
        <GridItem xs={12}>
          <div>
            {/* ------bikecode------ */}
            <FormControl
              style={{
                verticalAlign: "bottom",
                marginRight: "10px",
                minWidth: 120
              }}
            >
              <InputLabel>{bikeCode ? bikeCode : "Bike Code"}</InputLabel>
              <Select
                value={bikeCode}
                onChange={event => {
                  setBikeCode(event.target.value);
                }}
              >
                {bikeList.map((item, key) => {
                  return (
                    <MenuItem value={item.value} key={key}>
                      {item.value}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <FormControl
              style={{
                verticalAlign: "bottom",
                marginRight: "25px",
                minWidth: 120
              }}
            >
              <InputLabel htmlFor="component-simple">{bikeCode}</InputLabel>
              <Input
                value={String(bikeCodeValue)}
                onChange={e => {
                  setBikeCodeValue(e.target.value);
                }}
              />
            </FormControl>

            {/* ------firmware version------ */}
            <FormControl
              style={{
                verticalAlign: "bottom",
                marginRight: "25px",
                minWidth: 120
              }}
            >
              <InputLabel>Firmware</InputLabel>
              <Select
                value={firmwareVersion}
                onChange={event => {
                  console.log(event);
                  setFirmwareVersion(event.target.value);
                }}
              >
                {firmVersionList.map((item, key) => {
                  return (
                    <MenuItem value={item.value} key={key}>
                      {item.value}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            {/* ------hardware version------ */}
            <FormControl
              style={{
                verticalAlign: "bottom",
                marginRight: "25px",
                minWidth: 160
              }}
            >
              <InputLabel>Hardware Version</InputLabel>
              <Select
                value={hardwareVersion}
                onChange={event => {
                  console.log(event);
                  setHardwareVersion(event.target.value);
                }}
              >
                {hardwareVersionList.map((item, key) => {
                  return (
                    <MenuItem value={item.value} key={key}>
                      {item.value}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            {/* ------batch version------ */}
            <FormControl
              style={{
                verticalAlign: "bottom",
                marginRight: "25px",
                minWidth: 120
              }}
            >
              <InputLabel>Batch Code</InputLabel>
              <Select
                value={batchCode}
                onChange={event => {
                  console.log(event);
                  setBatchCode(event.target.value);
                }}
              >
                {batchCodeList.map((item, key) => {
                  return (
                    <MenuItem value={item.value} key={key}>
                      {item.value}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            {/* ------Battery version------ */}
            <FormControl
              style={{
                verticalAlign: "bottom",
                marginRight: "25px",
                minWidth: 120
              }}
            >
              <InputLabel>Battery</InputLabel>
              <Select
                value={battery}
                onChange={event => {
                  console.log(event);
                  setBattery(event.target.value);
                }}
              >
                {batteryList.map((item, key) => {
                  return (
                    <MenuItem value={item.value} key={key}>
                      {item.value}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            {/* ------Client------ */}
            <FormControl
              style={{
                verticalAlign: "bottom",
                marginRight: "25px",
                minWidth: 120
              }}
            >
              <InputLabel htmlFor="component-simple">Client</InputLabel>
              <Input
                value={String(client)}
                onChange={e => {
                  setClient(e.target.value);
                }}
              />
            </FormControl>

            {/* ------Group------ */}
            <FormControl
              style={{
                verticalAlign: "bottom",
                marginRight: "25px",
                minWidth: 120
              }}
            >
              <InputLabel htmlFor="component-simple">Group</InputLabel>
              <Input
                value={String(group)}
                onChange={e => {
                  setGroup(e.target.value);
                }}
              />
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonStyle}
            >
              Search
            </Button>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              className="s-primary"
              onClick={editDialogClick}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonStyle}
            >
              Action
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonStyle}
            >
              Assign
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonStyle}
            >
              Unbind Client
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonStyle}
            >
              Active / Deactivated
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonStyle}
            >
              View
            </Button>
          </div>
          <Card>
            <CardBody>
              <MaterialTable
                isLoading={isLoading}
                style={{ boxShadow: "none" }}
                data={tableList}
                columns={tableColumns}
                localization={localization}
                options={{
                  toolbar: false,
                  sorting: true,
                  search: false,
                  pageSize: pageSize,
                  pageSizeOptions: pageSizeOptions
                  // fixedColumns: { left: "3" }
                }}
                totalCount={totalCount}
                page={pageNumber}
                onOrderChange={handleOrderChange}
                onRowClick={handRowClick}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onChangePage={handleChangePage}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
