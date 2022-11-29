import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import warehouse from './ui/Group66.png';
import theme from "./ui/Theme";
import Navbar from './Navbar';
import './ui/Theme.css';
import ASDJobs from './jobs/ASDJobs';
import ASDJobDetails from './jobs/ASDJobDetails';


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({

  root: {
    minHeight: "100vh",

  },
  Opportunties: {
    color: "#F5292F",
    margin: 0,
    fontFamily: "myriad-pro",
    fontWeight: 400,
    fontSize: '1.5rem',
    fontStyle: "normal",
    paddingTop: "50px"
  },

  Opp: {
    marginTop: 50
  },
  Para: {
    fontSize: '1.2rem',
    color: "#34495E",
  },
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
    marginLeft: 10

  },
  list: {
    display: "flex",
    justify: "center"

  },
  descriptionOne: {
    color: "#34495E",
    fontFamily: "myriad-pro",

  },
  OppTwo: {
    paddingTop: 100,
    ['@media (max-width:959px)']: {
      paddingTop: 0
    }
  },
}));


export default function Drivers() {

  const [open, setOpen] = React.useState(false);

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" className={classes.Opp}>


          <h1 className={classes.Opportunties}> Carrier Partners </h1>
          <Typography>
            <p className={classes.Para}> With <Link style={{ textDecoration: 'none' }} to={{ pathname:"https://freightdok.io/"}} target="_blank">freightdok.</Link> you can now manage, book, bid, and track your freight all in one place including freight with Sunny Logistics. Freightdok is a digital carrier ecosystem that offers the best rates, service levels, and carrier partnerships. Simplify your carrier operations through the freightdok platform. </p>
          </Typography>
        



      </Grid>

    </div>






  )
};
