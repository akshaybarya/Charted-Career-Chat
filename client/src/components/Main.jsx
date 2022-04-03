import React, {
  useEffect,
  useState,
} from 'react';

import { Link } from 'react-router-dom';

import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  IconButton,
  Link as Link1,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  AssignmentInd,
  HowToReg,
  Laptop,
  PlaylistAddCheckRounded,
} from '@material-ui/icons/';

import Register from './Register';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: 720,
    marginBottom: 50,
  },
  mainItem: {
    padding: theme.spacing(5),
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(15),
    },
  },
  rotatingText_fade_in: {
    transition: "opacity 1s ease",
  },
  rotatingText_fade_out: {
    opacity: 0,
    transition: "opacity 1s ease",
  },
  cardContainer: {
    padding: 60,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: '100%',
    [theme.breakpoints.down('md')]: {
      padding: 20
    }
  },
  cardComponent: {
    width: '40vw',
    marginTop: 15,
    borderRadius: 30,
    marginLeft: 10,
    aspectRatio: '1',

    [theme.breakpoints.up("md")]: {
      width: 275,
      height: 250,
      marginLeft: 10,
      marginTop: 50,
    },
  },
  buttonIcon: {
    fontSize: 30,
    [theme.breakpoints.up("md")]: {
      fontSize: 50,
    },
  },
  iconButton: {
    marginTop: 5,
    marginBottom: 2,

    [theme.breakpoints.up("md")]: {
      marginTop: 25,
      marginBottom: 20,
    },
  },
  cardText: {
    fontSize: 12,
    [theme.breakpoints.up("md")]: {
      fontSize: 22,
    },
  },
  mainHeading: {
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
  },
  secondaryHeading: {
    marginTop: 20, 
    fontSize: 22,
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
  },
  mainButton: {
    marginTop: 20,
    width: 250,
    height: 50,
    [theme.breakpoints.down('md')]: {
      width: 200,
      height: 40,
      fontSize: 15
    }
  }
}));

const Main = () => {
  const classes = useStyles();
  const [programs, setPrograms] = useState("Interview Prepration");
  const [fadeProp, setFadeProp] = useState({
    fade: "rotatingText_fade_in",
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
      if (fadeProp.fade === "rotatingText_fade_in") {
        setFadeProp({
          fade: "rotatingText_fade_out",
        });
      } else {
        if (programs === "Interview Prepration") {
          setPrograms("Mentorship Programs");
        } else if (programs === "Mentorship Programs") {
          setPrograms("Placement Programs");
        } else if (programs === "Placement Programs") {
          setPrograms("Mock Interviews");
        } else {
          setPrograms("Interview Prepration");
        }
        setFadeProp({
          fade: "rotatingText_fade_in",
        });
      }
    }, 4000);

    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item sm={12} md={6} className={classes.mainItem}>
        <Typography
          variant="h4"
          component="h2"
          display="inline"
          className={classes.mainHeading}
        >
          We Offer &nbsp;
          <Link1
            color={
              programs === "Interview Prepration" ||
              programs === "Placement Programs"
                ? "secondary"
                : "primary"
            }
            style={{ textDecoration: "none" }}
            className={classes[fadeProp.fade]}
          >
            {programs}
          </Link1>
        </Typography>

        <Typography
          variant="body1"
          component="div"
          className={classes.secondaryHeading}
        >
          Join the World’s Most Passionate CA Community.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.mainButton}
          onClick={handleClickOpen}
        >
          Get Started
        </Button>
      </Grid>

      <Register
        open={open}
        handleClose={handleClose}
        result={result}
        setResult={setResult}
      />

      <Grid item sm={12} md={6} className={classes.cardContainer}>
        <Grid container>
          <Grid item xs={6} md={6}>
            <Link to="/interview" style={{ textDecoration: "none" }}>
              <Card className={classes.cardComponent} raised>
                <CardActionArea style={{ height: "100%" }}>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      color="primary"
                      className={classes.iconButton}
                      style={{
                        color: "red",
                      }}
                    >
                      <PlaylistAddCheckRounded className={classes.buttonIcon} />
                    </IconButton>
                    <Typography
                      variant="h5"
                      component="h3"
                      className={classes.cardText}
                    >
                      Interview Prepration
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={6} md={6}>
            <Link to="/interview" style={{ textDecoration: "none" }}>
              <Card className={classes.cardComponent} raised>
                <CardActionArea style={{ height: "100%" }}>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      color="secondary"
                      className={classes.iconButton}
                      style={{
                        color: "green",
                      }}
                    >
                      <AssignmentInd className={classes.buttonIcon} />
                    </IconButton>
                    <Typography
                      variant="h5"
                      component="h3"
                      className={classes.cardText}
                    >
                      Mentorship
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={6} md={6}>
            <Link to="/interview" style={{ textDecoration: "none" }}>
              <Card className={classes.cardComponent} raised>
                <CardActionArea style={{ height: "100%" }}>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      color="secondary"
                      className={classes.iconButton}
                      style={{
                        color: "#5367ff",
                      }}
                    >
                      <HowToReg className={classes.buttonIcon} />
                    </IconButton>
                    <Typography
                      variant="h5"
                      component="h3"
                      className={classes.cardText}
                    >
                      Placements
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={6} md={6}>
            <Card
              className={classes.cardComponent}
              onClick={handleClickOpen}
              raised
            >
              <CardActionArea style={{ height: "100%" }}>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    color="primary"
                    className={classes.iconButton}
                    style={{
                      color: "orange",
                    }}
                  >
                    <Laptop className={classes.buttonIcon} />
                  </IconButton>
                  <Typography
                    variant="h5"
                    component="h3"
                    className={classes.cardText}
                  >
                    Mock Interviews
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
