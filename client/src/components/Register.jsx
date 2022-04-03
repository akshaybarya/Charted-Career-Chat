import React, { useState } from 'react';

import axios from 'axios';

import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
} from '@material-ui/core';

import TextFields from './TextFields';

const useStyles = makeStyles((theme) => ({
  dialogContainer: {
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',

    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  heading: {
    textAlign: "center",
    marginTop: 50,
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
    },
  },
  textFields: {
    marginTop: 25,
    [theme.breakpoints.down("md")]: {
      marginTop: 15,
    },
  },
  buttonsContainer: {
    marginTop: 25,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 35,
    [theme.breakpoints.down("md")]: {
      marginTop: 15,
      marginBottom: 20,
      marginLeft: 10,
      marginRight: 10,
    },
  },
  spinnerContainer: {
    marginTop: 200,
    marginBottom: 200,
    marginLeft: 200,
    marginRight: 200,
    [theme.breakpoints.down("md")]: {
      marginTop: 200,
      marginBottom: 200,
      marginLeft: 120,
      marginRight: 120,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 200,
      marginBottom: 200,
      marginLeft: 150,
      marginRight: 150,
    },
  },
  ConformationContainer: {
    margin: 100,
    height: '35vh',
    width: '40vw',
    overflowX:' hidden',
    
    
    [theme.breakpoints.down("sm")]: {
      position: 'relative',
      margin: 0,
      minHeight: '40vh',
      minWidth: '80vw',
      width: '100%',
      overflow: 'hidden',
    },
  },
}));

const Register = ({ handleClose, open, result, setResult }) => {
  const classes = useStyles();
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (phone.length === 10 && name.length >= 3 && email.match(emailRegex)) {
        /* Axios */
        const body = {
          name,
          email,
          phone,
        };

        const config = {
          headers: { "Content-Type": "application/json" },
        };

        const res = await axios.post(
          `/api/user`,
          body,
          config
        );

        //const res = await axios.get(`/`);
        setResult(res.data);

        setName("");
        setEmail("");
        setPhone("");
        if (res.data == "Registered Sucessfully") {
          handleClose();
        }
      } else {
        setResult("Please add valid details");
      }
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  return (
      <Dialog open={open} onClose={handleClose} className="popupContainer" >
        {result === "We will contact you soon." ? (
          <Box className={classes.ConformationContainer}>
            <div className='dialogInnerContainer'>
              <DialogTitle className={classes.heading}>Great</DialogTitle>
              <DialogContent className={classes.dialogContainer}>
                <DialogContentText>
                  Our Team Will Contact You soon
                </DialogContentText>
              </DialogContent>
              <DialogActions className={classes.buttonsContainer}>
                <Button onClick={handleClose} size="large" variant='contained' color='primary' className='button' >ok</Button>
              </DialogActions>
            </div>
          </Box>
        ) : loading ? (
          <CircularProgress className={classes.spinnerContainer} />
        ) : (
          <>
            <DialogTitle className={classes.heading}>Register</DialogTitle>
            <DialogContent className={classes.dialogContainer}>
              <DialogContentText>
                To join the World’s Most Passionate CA Community, please enter
                your email address and phone number here. We will contact you
                soon.
              </DialogContentText>
              <TextFields
                value={name}
                setValue={setName}
                autoFocus={true}
                label="Full name"
                id="name"
              />
              <TextFields
                value={email}
                setValue={setEmail}
                autoFocus={false}
                label="Email"
                id="email"
              />
              <TextFields
                value={phone}
                setValue={setPhone}
                autoFocus={false}
                label="Phone Number"
                id="number"
              />
            </DialogContent>
            <DialogActions className={classes.buttonsContainer}>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                onClick={(e) => {
                  register(e);
                }}
              >
                Register
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
  );
};

export default Register;
