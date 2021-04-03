import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import warehouse from './ui/Group66.png';
import theme from "./ui/Theme";
import './ui/Theme.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import * as emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({

  root: {
    //minHeight: "100vh",

  },

  img: {
    objectfit: "cover",
    maxWidth: "90%",
    maxHeight: "80%",
    display: "block",
    paddingTop: "50px"
  },

  sunnyFreight: {
    paddingTop: "180px",


  },
  Font: {
    fontFamily: "pacifico",
    fontWeight: 400,
    fontSize: '3.5rem',
    fontStyle: "normal",
    color: "#F5292F",
    margin: 0,

  },
  SubText: {
    color: "#34495E",
    margin: 0,
    fontFamily: "myriad-pro",
    fontWeight: 400,
    fontSize: '1.2rem',
    fontStyle: "normal",

  },





}));


export default function Hero() {
  const classes = useStyles();



  function sendEmail(e) {
    e.preventDefault();



    emailjs.sendForm('service_t546ap3', 'template_na0m4rv', e.target, 'user_o94NVKKc9YSMTPXXiIGIG')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }





  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      <Grid container direction="row">
        <Grid container xs={12} sd={12} md={5} justify="flex-end" >
          <Typography align="center" className={classes.sunnyFreight}>
            <h1 className={classes.Font}>Sunny logistics</h1>
            <h2 className={classes.SubText}>Building the Next Digital Freight <br /> Ecosystem For the Midwest (Pilot Mode) <br />
              <Button variant="contained" color="primary" onClick={handleClickOpen} className={classes.sunnyFreightTwo}>
                Contact Us
     </Button>
            </h2>


            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogContent>
                <DialogContentText>
                  Sunny logistics hauls dry van full truckload freight in the eastern north central U.S and services drop shipments through our carrier partners trailer pool.
                  As of now we do not support pickups or deliveries at farms or ports, and don’t service hazmat shipments. Currently running pilot programs, connect with us to learn more!
           </DialogContentText>
              </DialogContent>
              <form onSubmit={sendEmail}>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="name"
                    label="Name"
                    type="name"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="company"
                    name="company"
                    label="Company Name"
                    type="company"
                    fullWidth
                  />

                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
           </Button>
                    <Button type="submit" value="Send" onClick={handleClose} color="primary">
                      Submit
           </Button>
                  </DialogActions>
                </DialogContent>
              </form>

            </Dialog>
          </Typography>



        </Grid>
        <Grid container xs={12} sd={12} md={7}>
          <img className={classes.img} src={warehouse} />
        </Grid>
      </Grid>
    </div>




  )
};
