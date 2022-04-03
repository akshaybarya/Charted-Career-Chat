import React from 'react';

import {
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  EmailOutlined,
  LocalPhoneOutlined,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    height: "500",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    [theme.breakpoints.up("md")]: {
      marginLeft: 50,
    },
  },
  gridContainer: {
    marginTop: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 250,

    [theme.breakpoints.down("md")]: {
      marginTop: 100,
      marginBottom: 125,
    },
  },
  text: {
    marginTop: 25,
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  buttonIcon: {
    fontSize: 30,
    [theme.breakpoints.up("md")]: {
      fontSize: 50,
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Container style={{ height: "inherit" }}>
      <Grid container className={classes.container}>
        <Grid item xs={6} className={classes.gridContainer}>
          <IconButton disabled>
            <LocalPhoneOutlined
              color="textPrimary"
              className={classes.buttonIcon}
            />
          </IconButton>
          <Typography
            variant="h4"
            component="h3"
            color="textSecondary"
            className={classes.text}
          >
            Call Us
          </Typography>
          <a href="tel:+918109646970" style={{ textDecoration: "none" }}>
            <Typography
              variant="h4"
              component="h3"
              color="textSecondary"
              className={classes.text}
              style={{ marginTop: 25 }}
            >
              +(91) 8109646970
            </Typography>
          </a>
        </Grid>

        <Grid item xs={6} className={classes.gridContainer}>
          <IconButton disabled>
            <EmailOutlined color="textPrimary" className={classes.buttonIcon} />
          </IconButton>
          <Typography
            variant="h4"
            component="h3"
            color="textSecondary"
            className={classes.text}
          >
            Drop us a line
          </Typography>
          <a
            href="mailto:careerwealthwiser@gmail.com"
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="h4"
              component="h3"
              color="textSecondary"
              style={{ marginTop: 25 }}
              className={classes.text}
            >
              careerwealthwiser@gmail.com
            </Typography>
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
