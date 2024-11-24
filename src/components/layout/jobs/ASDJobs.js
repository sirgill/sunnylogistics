import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import theme from "../ui/Theme";
import "../ui/Theme.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  jobTitle: {
    color: "#34495E",
    fontFamily: "myriad-pro",
    fontWeight: 400,
    fontStyle: "normal",
    margin: 0,
    paddingTop: "50px",
  },
  description: {
    color: "#34495E",
    fontFamily: "myriad-pro",
    marginLeft: 10,
  },
  list: {
    display: "flex",
    justify: "center",
  },
  descriptionOne: {
    color: "#34495E",
    fontFamily: "myriad-pro",
  },
}));

export default function ASDJobs() {
  const classes = useStyles();

  return (
    <Grid>
      <h3 className={classes.jobTitle}>
        Over-the-Road (OTR) Van Truckload truck driver - Regional
      </h3>
      <Grid className={classes.list}>
        <p className={classes.descriptionOne}>
          Average earnings: $62000 - $75000
        </p>
        <p className={classes.description}>Home time: Daily</p>
        <p className={classes.description}>Company: Sunny Freight</p>
      </Grid>
    </Grid>
  );
}
