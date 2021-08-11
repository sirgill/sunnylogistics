import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import warehouse from './ui/Network.png';
import theme from "./ui/Theme";
import './ui/Theme.css';
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  root: {
    height: "100vh",

  },

  img: {
    objectfit: "cover",
    maxWidth: "65%",
    maxHeight: "55%",
    display: "block",
    paddingTop: "160px",
    paddingLeft: "160px",
    ['@media (max-width:959px)']: {
      paddingTop: "50px",
      paddingLeft: "20%",
      maxHeight: "100%"
    }

  },

  sunnyFreight: {
    paddingTop: "180px",
    ['@media (max-width:959px)']: {
      paddingTop: "0px",
    }

  },
  Font: {
    fontFamily: "bebas-neue",
    fontWeight: 400,
    fontSize: '3.5rem',
    fontStyle: "normal",
    color: "#F5292F",
    margin: 0
  },
  SubText: {
    color: "#F5292F",
    margin: 0,
    fontFamily: "myriad-pro",
    fontWeight: 400,
    fontSize: '2.2rem',
    fontStyle: "normal",
    padding: 0

  },
  Para: {
    fontSize: '1.2rem',
    color: "#34495E",
  }




}));


export default function Carriers() {
  const classes = useStyles();

  return (

    <Grid container direction="row">

      <Hidden only="xs">
        <Grid container xs={12} sm={12} md={6}>
          <img className={classes.img} src={warehouse} />
        </Grid>
      </Hidden>


      <Grid container xs={12} sm={12} md={6} justify="center">
        <Typography className={classes.sunnyFreight}>
          <h1 className={classes.Font}>Carriers: </h1>
          <h4 className={classes.SubText}>Carrier Ecosystem</h4>
          <p className={classes.Para}>We have partnered with freightdok to create a transparent digital <br />
    ecosystem for our carrier partners. With the support of freightdok technology we are able build a freight network around your operations while reducing your cost to operate.
    <br />  </p>
        </Typography>


      </Grid>



    </Grid>





  )
};
