import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import PageNotFoundImg from "assets/img/illustration_404.svg";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    padding: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 260,
    marginTop: 80,
    marginBottom: 80,
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
      <Box className={classes.content}>
        <Typography variant="h4" style={{ fontWeight: 700 }}>
          Sorry, page not found!
        </Typography>
        <Typography>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </Typography>
        <Box className={classes.image}>
          <img
            style={{ maxWidth: "100%", height: "100%" }}
            alt="Page not found"
            src={PageNotFoundImg}
          />
        </Box>
        <Button
          variant="contained"
          className={classes.btnHome}
          onClick={handleOnClick}
        >
          Go To Home
        </Button>
      </Box>
    </Box>
  );
}

export default PageNotFound;
