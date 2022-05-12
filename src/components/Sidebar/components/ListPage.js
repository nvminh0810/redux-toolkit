import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import { listPages } from "routes";

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
          {listPages.map(({ to, title, Icon }, index) => (
            <Link to={to} className={classes.link} key={index}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </nav>
    </Box>
  );
}

export default ListPage;
