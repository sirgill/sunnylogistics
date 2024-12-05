// Navbar.tsx
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
    borderRadius: '10px',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    minWidth: 10,
    marginLeft: '15px',
    color: '#F5292F',
    '&:hover': {
      color: '#F5292F',
      opacity: 1,
    },
  },
  requestQuoteButton: {
    marginLeft: '20px',
    backgroundColor: '#F5292F',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#F5292F',
    },
  },
  logo: {
    fontFamily: 'Pacifico, cursive',
    fontWeight: 500,
    fontSize: '1.5rem',
    color: '#F5292F',
  },
  drawerIcon: {
    color: '#F5292F',
  },
  drawerContainer: {
    width: 250,
    backgroundColor: '#141B2A',
    height: '100%',
  },
  drawerItemText: {
    color: '#F5F5F5',
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
