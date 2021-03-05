import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import theme from "./ui/Theme";
import  './ui/Theme.css';



function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar
  },
  tabContainer: {
    marginLeft: "auto"
  },

  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "15px"
  },

  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerIcon: {
    color: "#F5292F",
    height: "30px",
    width: "30px"
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "#F5292F",
    opacity: 0.7
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
        opacity: 1
    }
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
    boxShadow: "none"
  },
  Logo: {
    fontFamily: "pacifico",
    fontWeight: 400,
    fontSize: '1.5rem',
    fontStyle: "normal",
    color: "#F5292F",
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);

  const [value, setValue] = useState(0);



  const handleChange = (e, value) => {
    setValue(value);
  };


  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        setValue(0);
      break;
      case "/Drivers":
        setValue(3);
      break;
      case "/About":
        setValue(4);
      break;

      default:
      break;
    }
  }, []);



  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        <Tab className={classes.tab} component={Link} to="/" label="Shippers" />
        <Tab className={classes.tab} component={Link} to="/drivers" label="Drivers" />
        <Tab className={classes.tab} component={Link} to="/about" label="About" />
      </Tabs>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
      <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            button
            component={Link}
            to="/"
            selected={value === 0}
            classes={{selected: classes.drawerItemSelected}}
          >
            <ListItemText
              className={classes.drawerItem}
              disableTypography
            >
              Shippers
            </ListItemText>
          </ListItem>




          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            button
            component={Link}
            to="/drivers"
            selected={value === 3}
            classes={{selected: classes.drawerItemSelected}}
          >
            <ListItemText className={
                classes.drawerItem
            } disableTypography>
              Drivers
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            button
            component={Link}
            to="/about"
            selected={value === 4}
            classes={{selected: classes.drawerItemSelected}}
          >
            <ListItemText className={
                classes.drawerItem
            } disableTypography>
              About
            </ListItemText>
          </ListItem>
        </List>


      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="static" color="secondary" className={classes.appbar}>
          <Toolbar disablegutter>
            <Typography className={classes.Logo}>Sunny logistics</Typography>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Navbar
