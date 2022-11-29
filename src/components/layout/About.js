import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import theme from "./ui/Theme";
import './ui/Theme.css';
import Divider from '@material-ui/core/Divider';
import AboutHeader from "./AboutHeader";

const useStyles = makeStyles((theme) => ({

  root: {
    minHeight: "90vh",
  },

  TTF: {
    marginTop: 50
  },

  coreHeader: {
    color: "#F5292F",
    margin: 0,
    fontFamily: "myriad-pro",
    fontWeight: 400,
    fontSize: '1.5rem',
    fontStyle: "normal",
    padding: 0

  },
  Para: {
    fontSize: '1.1rem',
    color: "#34495E",
    paddingLeft: 5,
    paddingRight: 5
  },




}));


export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AboutHeader />
      <Grid container direction="row" className={classes.TTF}>
        <Grid container xs={12} sm={12} md={4} justify="center">
          <Typography align="center" className={classes.coreHeader}> Trust </Typography>
          <Typography align="center">
            <p className={classes.Para}> Trust is the social glue of relationships and the success of any organization is built off the trust of employees, customers, and partners. We build trust moving one load at a time, one hire at a time, and one customer at a time.
    </p>
          </Typography>
        </Grid>
        <Grid container xs={12} sm={12} md={4} justify="center">
          <Typography align="center" className={classes.coreHeader}> Transparency </Typography>
          <Typography align="center">
            <p className={classes.Para}>
              Transparency is key to the balance of power between shippers, brokers, and carriers in our ecosystem. In order to foster growth, increase accountability, and create value, we are focused on creating a transparent ecosystem.

    </p>
          </Typography>
        </Grid>

        <Grid container xs={12} sm={12} md={4} justify="center">
          <Typography align="center" className={classes.coreHeader}> Fairness </Typography>
          <Typography align="center">
            <p className={classes.Para}>
              Fairness embodies trust and transparency. To serve our customers, we have created a platform that puts fairness at the forefront of our product and service. 
    </p>
          </Typography>
        </Grid>

      </Grid>
    </div>




  )
};
