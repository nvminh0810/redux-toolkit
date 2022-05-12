import { Button } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btnGroups: {
    display: "flex",
    justifyContent: "space-between",
  },
  btn: {
    width: 150,
    padding: "10px 0 !important",
    borderColor: "#e0e0e0 !important",
  },
});

function AuthOptions() {
  const classes = useStyles();
  return (
    <Box className={classes.btnGroups}>
      <Button variant="outlined" className={classes.btn}>
        <GoogleIcon color="error" />
      </Button>
      <Button variant="outlined" className={classes.btn}>
        <FacebookIcon />
      </Button>
      <Button variant="outlined" className={classes.btn}>
        <TwitterIcon />
      </Button>
    </Box>
  );
}

export default AuthOptions;
