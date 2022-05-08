import { Avatar, Box, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ENFlag from "../../assets/img/ic_flag_en.svg";
import AvatarDefault from "../../assets/img/avatar_default.jpg";
import { makeStyles } from "@mui/styles";

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
          <img className={classes.flag} src={ENFlag} />
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
