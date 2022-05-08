import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  IconButton,
  InputAdornment,
  LinearProgress,
  TextField,
  Tooltip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

function UserFilter() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TextField
        placeholder="Search user..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Tooltip title="Filter">
        <IconButton aria-label="filter" size="small">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default UserFilter;
