import React, { useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textFields: {
    marginTop: 35,
    [theme.breakpoints.down("md")]: {
      marginTop: 20,
    },
  },
}));

const TextFields = ({ value, setValue, autoFocus, label, id }) => {
  const classes = useStyles();
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
  const [error, setError] = useState(false);

  const validation = (e) => {
    setValue(e.target.value);
    if (id == "email") {
      if (value !== "" && value.match(emailRegex)) {
        setError(false);
      } else {
        setError(true);
      }
    } else if (id == "number") {
      if (value !== 0 && value.match(phoneRegex)) {
        setError(false);
      } else {
        setError(true);
      }
    } else {
      if (value.length > 2) {
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  return (
    <TextField
      autoFocus={autoFocus}
      margin="dense"
      id={id}
      label={label}
      type={id}
      fullWidth
      variant="standard"
      error={error}
      className={classes.textFields}
      value={value}
      onChange={(e) => {
        validation(e);
      }}
    />
  );
};

export default TextFields;
