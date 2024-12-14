import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  AppBar,
  Toolbar,
  Button,
  Tabs,
  Tab,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import "@fontsource/inter";
import ShipNowForm from '../../scenes/ShipNow/ShipNow';

const Logo = styled('img')`
  height: 60px;  // Try different values like 50px, 55px, etc.
  cursor: pointer;
  margin-right: 20px;
  
  @media (max-width: 768px) {
    height: 40px;  // Slightly smaller on mobile
  }
`;

const DrawerContainer = styled.div`
  width: 250px;
  background-color: ${(props) => props.theme.palette.darkGrey.main};
  height: 100%;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.isMobile ? '100%' : '80%')};
`;

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: "20px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    textTransform: "none",
    fontSize: "16px",
    borderRadius: "7px",
    height: 50,
    fontFamily: "Inter",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.light,
    },
  },
  tab: {
    minWidth: 10,
    marginLeft: '15px',
    textTransform: 'none',
    fontSize: '16px',
    color: theme.palette.darkGrey.main,
    fontFamily: 'Inter',
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
  appBar: {
    backgroundColor: "#FFFFFF",
    height: 60,
    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.05)",
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    minHeight: 60,
  }
}));

const Navbar = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleDrawerToggle = () => setOpenDrawer(!openDrawer);
  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  const getActiveTabIndex = () => {
    switch (location.pathname) {
      case "/":
        return 0;
      case "/shippers":
        return 1;
      case "/carriers":
        return 2;
      case "/about":
        return 3;
      default:
        return false;
    }
  };

  const drawer = (
    <SwipeableDrawer
      open={openDrawer}
      onClose={handleDrawerToggle}
      onOpen={handleDrawerToggle}
    >
      <DrawerContainer theme={theme}>
        <List>
          {["What We Do", "Shippers", "Carriers", "About", "Request Quote"].map(
            (text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => {
                  handleDrawerToggle();
                  if (text === "Request Quote") {
                    handleOpenForm();
                  }
                }}
                component={text !== "Request Quote" ? Link : "button"}
                to={text !== "Request Quote" ? ["/", "/shippers", "/carriers", "/about"][index] : undefined}
              >
                <ListItemText style={{ color: theme.palette.secondary.main }}>
                  {text}
                </ListItemText>
              </ListItem>
            )
          )}
        </List>
      </DrawerContainer>
    </SwipeableDrawer>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <NavbarContainer isMobile={matches}>
            <Link to="/">
              <Logo 
                src="/images/SunnylogisticsLogo.png" 
                alt="Sunny Logistics" 
              />
            </Link>
            {matches ? (
              <IconButton
                style={{
                  color: theme.palette.primary.main,
                  marginLeft: "auto",
                }}
                onClick={handleDrawerToggle}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Tabs
                value={getActiveTabIndex()}
                style={{ marginLeft: "auto" }}
                indicatorColor="primary"
              >
                {["What We Do", "Shippers", "Carriers", "About"].map((label, index) => (
                  <Tab
                    key={label}
                    label={label}
                    component={Link}
                    to={["/", "/shippers", "/carriers", "/about"][index]}
                    className={classes.tab}
                  />
                ))}
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={handleOpenForm}
                >
                  Request Quote
                </Button>
              </Tabs>
            )}
          </NavbarContainer>
        </Toolbar>
      </AppBar>
      {drawer}
      
      <ShipNowForm 
        open={isFormOpen} 
        onClose={handleCloseForm}
      />
    </ThemeProvider>
  );
};

export default Navbar;