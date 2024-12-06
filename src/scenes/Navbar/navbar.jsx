// src/scenes/Navbar/navbar.js
import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  AppBar,
  Toolbar,
  Typography,
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
import { useTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import "@fontsource/inter";

const DrawerContainer = styled.div`
  width: 250px;
  background-color: ${(props) => props.theme.palette.darkGrey.main};
  height: 100%;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => setOpenDrawer(!openDrawer);

  const getActiveTabIndex = () => {
    switch (location.pathname) {
      case "/shippers":
        return 0;
      case "/carriers":
        return 1;
      case "/about":
        return 2;
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
          {["Shippers", "Carriers", "About", "Request Quote"].map(
            (text, index) => (
              <ListItem
                button
                key={text}
                component={Link}
                to={["/shippers", "/carriers", "/about", "/quote"][index]}
                onClick={handleDrawerToggle}
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
      <AppBar
        position="static"
        style={{ backgroundColor: "#FFFFFF", height: 60 }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <NavbarContainer>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                color: theme.palette.primary.main,
                fontFamily: "Inter",
              }}
            >
              Sunny Logistics
            </Typography>
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
                {["Shippers", "Carriers", "About"].map((label, index) => (
                  <Tab
                    key={label}
                    label={label}
                    component={Link}
                    to={["/shippers", "/carriers", "/about"][index]}
                    style={{
                      minWidth: 10,
                      marginLeft: "15px",
                      textTransform: "none",
                      fontSize: "16px",
                      color: theme.palette.text.main,
                      fontFamily: "Inter",
                    }}
                  />
                ))}
                <Button
                  variant="contained"
                  component={Link}
                  to="/quote"
                  style={{
                    marginLeft: "20px",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.secondary.main,
                    textTransform: "none",
                    fontSize: "16px",
                    borderRadius: "7px",
                    height: 50,
                    fontFamily: "Inter",
                  }}
                >
                  Request Quote
                </Button>
              </Tabs>
            )}
          </NavbarContainer>
        </Toolbar>
      </AppBar>
      {drawer}
    </ThemeProvider>
  );
};

export default Navbar;
