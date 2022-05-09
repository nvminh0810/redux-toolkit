import { Box, IconButton } from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  pageNumbers: {},
});

function StudentPagination({ pagination, onPageChange }) {
  const classes = useStyles();
  const { _page, _limit, _totalRows } = pagination;

  const totalPage = Math.ceil(_totalRows / _limit);

  return (
    <Box className={classes.root}>
      <IconButton
        onClick={() => {
          onPageChange(_page - 1);
        }}
        disabled={_page <= 1}
      >
        <ChevronLeftIcon />
      </IconButton>

      <IconButton
        onClick={() => {
          onPageChange(_page + 1);
        }}
        disabled={_page >= totalPage}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}

export default StudentPagination;
