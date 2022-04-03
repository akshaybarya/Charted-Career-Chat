import React from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    height: 300,
    width: 400,
    borderRadius: 10,
    margin: 25,
    [theme.breakpoints.down("md")]: {
      height: 230,
      width: 280,
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    textAlign: "center",
  },
  content: {
    marginTop: 10,
    marginBottom: 10,
    fontSize:13,
    [theme.breakpoints.up("md")]: {
      marginTop: 10,
      marginBottom: 35,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 16,
    },
  },
}));

const SliderCard = ({ content, user }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} raised>
      <CardActionArea style={{ height: "100%" }}>
        <CardContent className={classes.container}>
          <Typography variant="body1" component="p" className={classes.content}>
            {content}
          </Typography>
          <Typography variant="body1" component="p" color="textSecondary">
            by {user}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SliderCard;
