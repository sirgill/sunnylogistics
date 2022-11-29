import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import theme from "./ui/Theme";
import  './ui/Theme.css';

const useStyles = makeStyles((theme) => ({

description: {
  color: "#34495E",
  fontFamily: "myriad-pro",
  minWidth: 10,


},


tabContainer: {
  justify: "center"
},



}));


export default function Footer() {
  const classes = useStyles();

  const [value, setValue] = useState(0);



  const handleChange = (e, value) => {
    setValue(value);
  };


  return (

    <Grid container xs={12} justify="center" display="flex">
    <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
    <Tab className={classes.description} component={Link} to="/" label="Contact Us" />
    <Divider orientation="vertical" flexItem />
    <Tab className={classes.description} component={Link} to="/drivers" label="Carriers" />
    <Divider orientation="vertical" flexItem />
    <Tab className={classes.description} component={Link} to="/about" label="About" />
    </Tabs>

    </Grid>



  )
};
