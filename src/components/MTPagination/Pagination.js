/*
 * @Author: your name
 * @Date: 2020-04-21 16:05:35
 * @LastEditTime: 2020-06-15 13:28:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /material-pro-react/src/components/MTPagination/Pagination.js
 */
import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

export default function Pagination(props) {
  const {
    dataCount,
    page,
    rowsPerPage,
    rowsPerPageOptions,
    getRowsPerPage,
    getPage
  } = {
    ...props
  };

  const handleChangePage = (event, newPage) => {
    console.log("newPage");
    console.log(newPage);
    getPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    console.log("handleChangeRowsPerPage");
    getPage(0);
    getRowsPerPage(parseInt(event.target.value));
  };

  const TablePaginationActions = props => {
    const classes = useStyles();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = { ...props };

    const handleFirstPageButtonClick = event => {
      onChangePage(event, 0);
      console.log("handleFirstPageButtonClick");
    };

    const handleBackButtonClick = event => {
      console.log("handleBackButtonClick");
      onChangePage(event, page - 1);
    };

    const handleNextButtonClick = event => {
      console.log("handleNextButtonClick");
      onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = event => {
      console.log("handleLastPageButtonClick");
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  };

  return (
    <TablePagination
      rowsPerPageOptions={
        typeof rowsPerPageOptions === "undefined"
          ? [5, 10, 20, { label: "All", value: -1 }]
          : rowsPerPageOptions
      }
      count={dataCount}
      rowsPerPage={rowsPerPage}
      page={page}
      SelectProps={{
        inputProps: { "aria-label": "rows per page" },
        native: true
      }}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      ActionsComponent={TablePaginationActions}
    />
  );
}

Pagination.prototype = {
  dataCount: PropTypes.number,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  rowsPerPageOptions: PropTypes.array,
  getRowsPerPage: PropTypes.func,
  getPage: PropTypes.func
};
