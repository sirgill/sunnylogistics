// src/scenes/Navbar/navbar.js
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { AppBar, Toolbar, Typography, Button, Tabs, Tab, IconButton, SwipeableDrawer, List, ListItem, ListItemText, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: '#FFFFFF',
    padding: '10px 20px',
    width: '100%',
    height:60,
    justifyContent:'center',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    minWidth: 10,
    marginLeft: '15px',
    color: theme.palette.darkGrey.main,
    '&:hover': {
      color: theme.palette.hover.main,
      opacity: 1,
    },
    textTransform:'none',
    fontFamily: 'Inter, Arial, sans-serif',
  },
  requestQuoteButton: {
    marginLeft: '20px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.hover.main,
    },
    borderRadius:'5px',
    height:40,
    textTransform:'none',
    fontFamily: 'Inter, Arial, sans-serif',
  },
  logo: {
    fontFamily: 'Inter, Arial, sans-serif',
    fontWeight: 700,
    fontSize: '1.5rem',
    color: theme.palette.primary.main,
  },
  drawerIcon: {
    color: theme.palette.primary.main,
  },
  drawerContainer: {
    width: 250,
    backgroundColor: theme.palette.darkGrey.main,
    height: '100%',
  },
  drawerItemText: {
    color: theme.palette.secondary.main,
  },
}));

const DrawerContainer = styled.div`
  width: 250px;
  background-color: #141b2a;
  height: 100%;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const drawer = (
    <SwipeableDrawer
      open={openDrawer}
      onClose={handleDrawerToggle}
      onOpen={handleDrawerToggle}
    >
      <DrawerContainer>
        <List>
          <ListItem button component={Link} to="/shippers" onClick={handleDrawerToggle}>
            <ListItemText className={classes.drawerItemText}>Shippers</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/carriers" onClick={handleDrawerToggle}>
            <ListItemText className={classes.drawerItemText}>Carriers</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>
            <ListItemText className={classes.drawerItemText}>About</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/quote" onClick={handleDrawerToggle}>
            <ListItemText className={classes.drawerItemText}>Request Quote</ListItemText>
          </ListItem>
        </List>
      </DrawerContainer>
    </SwipeableDrawer>
  );

  return (
    <React.Fragment>
      <CenteredContainer>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar disableGutters>
            <Typography className={classes.logo}>Sunny Logistics</Typography>
            {matches ? (
              <IconButton className={classes.drawerIcon} onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Tabs className={classes.tabContainer}>
                <Tab className={classes.tab} component={Link} to="/shippers" label="Shippers" />
                <Tab className={classes.tab} component={Link} to="/carriers" label="Carriers" />
                <Tab className={classes.tab} component={Link} to="/about" label="About" />
                <Button
                  variant="contained"
                  className={classes.requestQuoteButton}
                  component={Link}
                  to="/quote"
                >
                  Request Quote
                </Button>
              </Tabs>
            )}
          </Toolbar>
        </AppBar>
      </CenteredContainer>
      {drawer}
    </React.Fragment>
  );
};

export default Navbar;
