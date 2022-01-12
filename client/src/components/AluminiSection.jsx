import React from "react";
import {
  Card,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "inherit",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    [theme.breakpoints.up("md")]: {
      marginLeft: 50,
    },
  },
  heading: {
    marginTop: 70,
    fontWeight: 25,
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
  },
  subHeading: {
    marginTop: 50,
    marginBottom: 30,
    fontSize: 20,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },
  cardImage: {
    height: 150,
    width: 150,
    alignSelf: "center",
    marginTop: 20,
    marginLeft: 20,
  },
  cardContent: {
    height: 200,
    width: 200,
    border: "none",
    boxShadow: "none",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
}));

const AluminiSection = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h3"
            component="h2"
            color="primary"
            className={classes.heading}
          >
            OUR ALUMNI WORK HERE
          </Typography>
          <Typography
            variant="body1"
            component="h6"
            className={classes.subHeading}
            color="textSecondary"
          >
            Consistent efforts, with proper guidance, can do wonders
          </Typography>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card className={classes.cardContent} raised={false}>
            <CardMedia
              image={require("../images/alumini/lnt.png")}
              className={classes.cardImage}
            />
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.cardContent} raised={false}>
            <CardMedia
              image={require("../images/alumini/bdo.png")}
              className={classes.cardImage}
            />
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.cardContent} raised={false}>
            <CardMedia
              image={require("../images/alumini/delloite.png")}
              className={classes.cardImage}
            />
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.cardContent} raised={false}>
            <CardMedia
              image={require("../images/alumini/ey.png")}
              className={classes.cardImage}
            />
          </Card>
        </Grid>
        {/** ******************************************************** */}
        <Grid item xs={6} md={3}>
          <Card className={classes.cardContent} raised={false}>
            <CardMedia
              image={require("../images/alumini/accenture.png")}
              className={classes.cardImage}
            />
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.cardContent} raised={false}>
            <CardMedia
              image={require("../images/alumini/infosys.png")}
              className={classes.cardImage}
            />
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.cardContent} raised={false}>
            <CardMedia
              image={require("../images/alumini/kpmg.png")}
              className={classes.cardImage}
            />
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.cardContent} raised={false}>
            <CardMedia
              image={require("../images/alumini/pwc.png")}
              className={classes.cardImage}
            />
          </Card>
        </Grid>
        {/** ******************************************************** */}
        <Grid item xs={6} md={3}>
          <Card className={classes.cardContent} raised={false}>
            <CardMedia
              image={require("../images/alumini/vedanta.png")}
              className={classes.cardImage}
            />
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.cardContent} raised={false}>
            <CardMedia
              image={require("../images/alumini/reliance.png")}
              className={classes.cardImage}
            />
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.cardContent} raised={false}>
            <CardMedia
              image={require("../images/alumini/tcs.png")}
              className={classes.cardImage}
            />
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.cardContent} raised={false}>
            <CardMedia
              image={require("../images/alumini/wipro.png")}
              className={classes.cardImage}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AluminiSection;
