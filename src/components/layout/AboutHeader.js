import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import theme from "./ui/Theme";
import  './ui/Theme.css';

const useStyles = makeStyles((theme) => ({

  root : {

  },
  Font: {
    fontFamily: "bebas-neue",
    fontWeight: 400,
    fontSize: '3.5rem',
    fontStyle: "normal",
    color: "#F5292F",
    margin: 0,
    padding: 0
  },
  Values: {
    marginTop: 70
  },
  SubValues: {
    maringTop: 20
  },

  Para: {
    fontSize: '1.2rem',
    color: "#34495E",
  },




}));


export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container direction="row">
    <Grid container xs={12} justify="center" className={classes.Values}>
    <Typography align="center">
    <h1 className={classes.Font}>
    Who we are
    </h1>
    </Typography>

    </Grid>
    <Grid container xs={12} justify="center" className={classes.SubValues}>
    <Typography align="center">
    <p className={classes.Para}>
    We are a digital freight startup based in Indianapolis with a mission to digitize the way freight is booked and moved in the Midwest.<br/>
    Founded on the idea of three core principles Trust, Transparency, and Fairness. These values constitue the <br/>
    foundation for how we build our platform and provide service to our customers.

    </p>
    </Typography>

    </Grid>

    </Grid>
    </div>
  )
};
