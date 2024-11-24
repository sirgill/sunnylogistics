import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

import theme from "./ui/Theme";
import "./ui/Theme.css";

const useStyles = makeStyles((theme) => ({}));

export default function Contact() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
    </form>
  );
}
