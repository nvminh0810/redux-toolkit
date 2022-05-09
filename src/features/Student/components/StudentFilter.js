import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useRef, useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

function StudentFilter({ onSubmit }) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);

    if (!onSubmit) return;

    if (inputRef.current) {
      clearTimeout(inputRef.current);
    }

    inputRef.current = setTimeout(() => {
      onSubmit(e.target.value);
    }, 300);
  };

  return (
    <Box className={classes.root}>
      <TextField
        placeholder="Search student..."
        onChange={handleOnChange}
        value={searchTerm}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Tooltip title="Filter list">
        <IconButton aria-label="filter" size="small">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default StudentFilter;
