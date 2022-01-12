import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: 150,
    backgroundColor: "grey",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      height: 100,
    },
  },
  heading: {
    color: "#fff",
    alignSelf: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Typography variant="h4" component="h3" className={classes.heading}>
        Copyrights © 2022 - All rights reserved
      </Typography>
    </Container>
  );
};

export default Footer;
