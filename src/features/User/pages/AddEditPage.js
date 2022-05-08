import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import UserForm from "../components/UserForm";
import { addUser } from "../userSlice";

const useStyles = makeStyles({
  root: {},
  form: {
    width: 600,
  },
});

function AddEditPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleFormSubmit = ({ formValues, type }) => {
    dispatch(addUser(formValues));
    navigate("/users");
  };

  const { state } = location;

  return (
    <Box className={classes.root}>
      <Typography variant="h4" style={{ marginBottom: 30 }}>
        {state ? "EDIT" : "ADD NEW USER"}
      </Typography>
      <Box className={classes.form}>
        <UserForm onSubmit={handleFormSubmit} user={state} />
      </Box>
    </Box>
  );
}

export default AddEditPage;
