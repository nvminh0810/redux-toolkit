import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserFilter from "../components/UserFilter";
import UserTable from "../components/UserTable";
import { fetchUser } from "../userSlice";

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
  userFilter: {
    padding: 20,
  },
  table: {},
});

function MainPage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

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
      <Box component={Paper}>
        <Box className={classes.userFilter}>
          <UserFilter />
        </Box>
        <UserTable users={users} />
      </Box>
    </Box>
  );
}

export default MainPage;
