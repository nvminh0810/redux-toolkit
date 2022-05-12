import AddIcon from "@mui/icons-material/Add";
import { Box, Button, LinearProgress, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCitiesMap } from "../../City/citySlice";
import StudentFilter from "../components/StudentFilter";
import StudentPagination from "../components/StudentPagination";
import StudentTable from "../components/StudentTable";
import { deleteStudent, fetchStudent, setFilters } from "../studentSlice";

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
  studentFilter: {
    padding: 20,
  },
  noResults: {
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "1px solid #ededed",
  },
});

function MainPage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const students = useSelector((state) => state.student.students);
  const pagination = useSelector((state) => state.student.pagination);
  const filters = useSelector((state) => state.student.filters);
  const loading = useSelector((state) => state.student.loading);
  const citiesMap = useSelector(selectCitiesMap);

  useEffect(() => {
    dispatch(fetchStudent(filters));
  }, [filters]);

  const handleAddStudent = () => {
    navigate("add");
  };

  const handlePageChange = (_page) => {
    dispatch(setFilters({ ...filters, _page }));
  };

  const handleSearchChange = (name_like) => {
    dispatch(setFilters({ ...filters, name_like }));
  };

  const handleOnUpdate = (student) => {
    navigate(`/students/${student.id}`, {
      state: student,
    });
  };

  const handleOnDelete = (studentId) => {
    dispatch(deleteStudent(studentId));
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Typography fontWeight="700" variant="h6">
          Students
        </Typography>
        <Button
          variant="contained"
          size="small"
          className={classes.btnAdd}
          startIcon={<AddIcon />}
          onClick={handleAddStudent}
        >
          New Student
        </Button>
      </Box>
      <Box component={Paper}>
        {loading && <LinearProgress />}
        <Box className={classes.studentFilter}>
          <StudentFilter onSubmit={handleSearchChange} />
        </Box>
        {students && students.length > 0 ? (
          <Fragment>
            <StudentTable
              students={students}
              citiesMap={citiesMap}
              onDelete={handleOnDelete}
              onUpdate={handleOnUpdate}
            />
            <StudentPagination
              pagination={pagination}
              onPageChange={handlePageChange}
            />
          </Fragment>
        ) : (
          <Box className={classes.noResults}>
            <Typography>No results</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default MainPage;
