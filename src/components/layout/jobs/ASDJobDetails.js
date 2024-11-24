import React, { Link, Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import theme from "../ui/Theme";
import "../ui/Theme.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  titleDes: {
    margin: 0,
    fontWeight: 400,
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontFamily: "pacifico",

    color: "#F5292F",
  },

  secondtitledes: {
    margin: 0,
    color: "#34495E",
    fontFamily: "myriad-pro",
    fontWeight: 400,
    fontSize: "1.0rem",
    fontStyle: "normal",
  },

  shortDes: {
    color: "#34495E",
    fontFamily: "myriad-pro",
    fontWeight: 400,
    fontSize: ".9rem",
  },
}));

export default function ASDJobDetails() {
  const classes = useStyles();

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <DialogTitle id="responsive-dialog-title">
        <h3 className={classes.titleDes} align="center">
          Sunny Freight
        </h3>
      </DialogTitle>
      <h4 className={classes.secondtitledes} align="center">
        Over-the-Road (OTR) Van Truckload truck driver - Local
      </h4>
      <DialogContent>
        <p className={classes.shortDes}>Average earnings: $62,000+</p>
        <p className={classes.shortDes}>Home time: Daily</p>
        <p className={classes.shortDes}>Experience: 2 years or more</p>
        <p className={classes.shortDes}>Location: Indianapolis, IN</p>
      </DialogContent>

      <DialogContent>
        <h4 className={classes.secondtitledes}>Description: </h4>
        <DialogContentText>
          <p>
            Come Join our team at Sunny Freight, we are a regional carrier
            operating in the Eastern North Central Midwest. Our team focuses on
            Dry Van, no touch freight. Enjoy perks such as paid vacation, paid
            holidays, and daily home time
          </p>
        </DialogContentText>
        <div align="center">
          <Button
            component={Link}
            href="http://www.driver-reach.com/l/948vq?ls=34670"
            variant="contained"
            color="primary"
          >
            {" "}
            Apply Here{" "}
          </Button>
        </div>
      </DialogContent>
    </div>
  );
}
