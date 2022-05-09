import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
  link: {
    color: "inherit",
    textDecoration: "none",
  },
});

function ListPage() {
  const classes = useStyles();
  return (
    <Box>
      <nav aria-label="main mailbox folders">
        <List>
          <Link to="/" className={classes.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/students" className={classes.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Student" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </nav>
    </Box>
  );
}

export default ListPage;
