import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import UserTable from "../components/UserTable";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {},
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  btnAdd: {
    borderRadius: 8,
    fontWeight: 600,
    backgroundColor: "#2065d1",
  },
  table: {},
});

function MainPage() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate("add");
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Typography fontWeight="700" variant="h6">
          User
        </Typography>
        <Button
          variant="contained"
          size="small"
          className={classes.btnAdd}
          startIcon={<AddIcon />}
          onClick={handleAddUser}
        >
          New User
        </Button>
      </Box>
      <Box>
        <UserTable />
      </Box>
    </Box>
  );
}

export default MainPage;
