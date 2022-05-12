import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import { addStudent, updateStudent } from "../studentSlice";

const useStyles = makeStyles({
  form: {
    width: 600,
  },
});

function AddEditPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const cities = useSelector((state) => state.city.cities);

  const handleFormSubmit = async ({ formValues, type }) => {
    if (type === "edit") {
      await dispatch(updateStudent(formValues));
    } else {
      await dispatch(addStudent(formValues));
    }
    navigate("/students");
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h4" style={{ marginBottom: 30 }}>
        {location.state ? "EDIT" : "ADD NEW STUDENT"}
      </Typography>
      <Box className={classes.form}>
        <StudentForm
          onSubmit={handleFormSubmit}
          student={location.state}
          cities={cities}
        />
      </Box>
    </Box>
  );
}

export default AddEditPage;
