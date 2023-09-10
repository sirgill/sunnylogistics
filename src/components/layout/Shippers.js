import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import theme from "./ui/Theme";
import './ui/Theme.css';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import PhonelinkRingOutlinedIcon from '@material-ui/icons/PhonelinkRingOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import PhonelinkOutlinedIcon from '@material-ui/icons/PhonelinkOutlined';

const useStyles = makeStyles((theme) => ({


  Font: {
    fontFamily: "bebas-neue",
    fontWeight: 400,
    fontSize: '3.5rem',
    fontStyle: "normal",
    color: "#F5292F",
    margin: 0,
    padding: 0
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
  },
  iconFirst: {
    display: "inline-flex",

  },

  ListText: {
    color: "#F5292F",
    fontFamily: "myriad-pro",
    fontWeight: 400

  },




}));


export default function Shipper() {
  const classes = useStyles();

  return (

    <Grid container direction="row">
      <Grid container xs={12} sm={6} justify="flex-end">
        <Typography >
          <h1 className={classes.Font}>Shippers: </h1>
          <h4 className={classes.SubText}>Freight Ecosystem</h4>
          <p className={classes.Para}>Our vision aims to create a freight ecosystem driven by <br />
    data, automation, and service. Increase visibility,  <br />automate your booking, and capture your data. </p>
        </Typography>


      </Grid>
      <Grid container xs={12} sm={6} justify="center">
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <HeadsetMicOutlinedIcon style={{ fontSize: 50, color: "#34495E" }} />
            </ListItemAvatar>
            <ListItemText className={classes.ListText}><h3>24/7 Support Team</h3></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <PhonelinkOutlinedIcon style={{ fontSize: 50, color: "#34495E" }} />
            </ListItemAvatar>
            <ListItemText className={classes.ListText}><h3>Tech-Enabled Fleet</h3></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <NotificationsActiveOutlinedIcon style={{ fontSize: 50, color: "#34495E" }} />
            </ListItemAvatar>
            <ListItemText className={classes.ListText}><h3>Notification Updates</h3></ListItemText>
          </ListItem>
        </List>


      </Grid>
    </Grid>




  )
};
