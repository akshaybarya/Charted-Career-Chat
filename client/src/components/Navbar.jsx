import React, {
  useEffect,
  useState,
} from 'react';

import {
  Button,
  Container,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';

import Register from './Register';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 0,
    marginBottom: 0,
  },
  button: {
    height: 35,
    width: 100,
    [theme.breakpoints.up("md")]: {
      height: 45,
      width: 130,
      marginRight: 150,
      marginTop: 20,
    },
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    marginBottom: 8,
    marginLeft: 0,
    [theme.breakpoints.up("md")]: {
      fontSize: 30,
      marginBottom: 0,
    },
  },
  fade_in: {
    transition: "opacity 1s ease",
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 0,
    [theme.breakpoints.up("md")]: {
      fontSize: 30,
      marginBottom: 0,
    },
  },
  fade_out: {
    opacity: 0,
    transition: "opacity 1s ease",
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 0,
    [theme.breakpoints.up("md")]: {
      fontSize: 30,
      marginBottom: 0,
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [fadeProp, setFadeProp] = useState({
    fade: "fade_in",
  });
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
    setResult("");
  };

  const handleClose = () => {
    setOpen(false);
    setResult("");
  };

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade_in") {
        setFadeProp({
          fade: "fade_out",
        });
      } else {
        setFadeProp({
          fade: "fade_in",
        });
      }
    }, 6000);

    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <>
      <Container className={classes.container}>
        <Toolbar className={classes.toolbar}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h4"
              component="h1"
              className={classes.fade_in}
              color="textPrimary"
            >
              Chartered-Chat-Career
            </Typography>
          </Link>
          <Button
            color="primary"
            variant="contained"
            size="large"
            className={classes.button}
            onClick={handleClickOpen}
          >
            Register
          </Button>
        </Toolbar>
      </Container>
      <Register
        open={open}
        handleClose={handleClose}
        result={result}
        setResult={setResult}
      />
    </>
  );
};

export default Navbar;
