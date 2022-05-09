import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Common/Header";
import PageNotFound from "./components/Common/PageNotFound";
import Sidebar from "./features/Sidebar";
import StudentPage from "./features/Student";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
  },
  sidebar: {
    flex: 1,
  },
  main: {
    flex: 6,
  },
  header: {
    minHeight: 92,
    padding: "0 42px",
  },
  mainContent: {
    width: "70%",
    margin: "auto",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.sidebar}>
        <Sidebar />
      </Box>
      <Box className={classes.main}>
        <Box className={classes.header}>
          <Header />
        </Box>
        <Box className={classes.mainContent}>
          <Routes>
            <Route path="/students/*" element={<StudentPage />} />
            <Route path="/cities/*" element={<StudentPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
