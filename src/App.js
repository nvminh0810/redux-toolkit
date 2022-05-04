import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import BlogPage from "./features/Blog";
import DashboardPage from "./features/Dashboard";
import ProductPage from "./features/Product";
import Sidebar from "./features/Sidebar";
import UserPage from "./features/User";

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
            <Route path="/" element={<DashboardPage />} />
            <Route path="/users/*" element={<UserPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/blogs" element={<BlogPage />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
