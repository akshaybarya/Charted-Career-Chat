import React from 'react';

import { Link } from 'react-router-dom';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link as Link1,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    backgroundColor: "grey",
    height: 600,
    alignItems: "center",
    display: "felx",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      height: "inherit",
    },
  },
  gridContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 30,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginLeft: 0,
    },
  },
  CardSection: {
    width: 300,
    height: 300,
    borderRadius: 30,
    marginTop: 100,
    [theme.breakpoints.down("md")]: {
      width: '75vw',
      aspectRatio: '1',
      marginTop: 50,
    },
  },
  cardImage: {
    height: 80,
    width: 80,
    marginTop: 30,
    [theme.breakpoints.down("md")]: {
      height: 40,
      width: 40,
      marginTop: '10%',
    },
  },
  resourceHeading: {
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
  },
  lastContainer: {
    [theme.breakpoints.down("md")]: {
      marginBottom: '20%',
    },
  },
}));

const CardSection = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.cardContainer}>
      <Grid container className={classes.gridContainer}>
        <Grid item sm={12} md={12}>
          <Typography
            variant="h3"
            component="h2"
            style={{ color: "#fff", marginTop: 50 }}
            className={classes.resourceHeading}
          >
            Resources to help you &nbsp;
            <Link1 color="primary" style={{ textDecoration: "none" }}>
              SUCCEED
            </Link1>
          </Typography>
        </Grid>
        <Grid item sm={12} md={3}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Card className={classes.CardSection} raised>
              <CardActionArea
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <CardMedia
                  className={classes.cardImage}
                  title="Interview Prepration"
                  image={require("../images/experience2.png")}
                />
                <CardContent>
                  <Typography variant="h5" component="h3" color="primary">
                    Placement Prepration
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                    style={{ marginTop: 10 }}
                  >
                    Consistent effort + Proper guidance = Dream Job
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
        <Grid item sm={12} md={3}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Card className={classes.CardSection} raised>
              <CardActionArea
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <CardMedia
                  className={classes.cardImage}
                  title="Interview Prepration"
                  image={require("../images/interview.png")}
                />
                <CardContent>
                  <Typography variant="h5" component="h3" color="primary">
                    Mock Interview
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                    style={{ marginTop: 10 }}
                  >
                    Practice your interview skills
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
        <Grid item sm={12} md={3}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Card className={classes.CardSection} raised>
              <CardActionArea
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <CardMedia
                  className={classes.cardImage}
                  title="Interview Prepration"
                  image={require("../images/presentation.png")}
                />
                <CardContent>
                  <Typography variant="h5" component="h3" color="primary">
                    Mentorship
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="textSecondary"
                    style={{ marginTop: 10 }}
                  >
                    1:1 Advise from experts to unstuck your career
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
        <Grid item sm={12} md={3} className={classes.lastContainer}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Card className={classes.CardSection} raised>
              <CardActionArea
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <CardMedia
                  className={classes.cardImage}
                  title="Interview Prepration"
                  image={require("../images/resources.png")}
                />
                <CardContent>
                  <Typography variant="h5" component="h3" color="primary">
                    Resources
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                    style={{ marginTop: 10 }}
                  >
                    Resources you need to succeed in your career
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardSection;
