import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AvatarDefault from "assets/img/avatar_default.jpg";
import ENFlag from "assets/img/ic_flag_en.svg";
import React from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  searchIcon: {
    display: "flex",
  },
  iconGroup: {
    display: "flex",
    alignItems: "center",
  },
  flag: {
    width: 25,
    height: 25,
  },
});

function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.searchIcon}>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box className={classes.iconGroup}>
        <IconButton>
          <img alt="EnglandFlag" className={classes.flag} src={ENFlag} />
        </IconButton>
        <IconButton style={{ margin: "0 5px" }}>
          <NotificationsIcon />
        </IconButton>
        <Avatar alt="User" src={AvatarDefault} />
      </Box>
    </Box>
  );
}

export default Header;
