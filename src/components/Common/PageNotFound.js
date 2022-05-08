import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import PageNotFoundImg from "../../assets/img/illustration_404.svg";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  btnHome: {
    borderRadius: 10,
  },
});

function PageNotFound() {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h4" style={{ fontWeight: 700 }}>
        Sorry, page not found!
      </Typography>
      <Typography>
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
        mistyped the URL? Be sure to check your spelling.
      </Typography>
      <img src={PageNotFoundImg} />
      <Button
        variant="contained"
        className={classes.btnHome}
        onClick={handleOnClick}
      >
        Go To Home
      </Button>
    </Box>
  );
}

export default PageNotFound;
