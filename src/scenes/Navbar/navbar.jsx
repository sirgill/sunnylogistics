import React, { useState } from "react";
import styled from "@emotion/styled";
import { 
  AppBar, 
  Toolbar, 
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  color: ${props => props.theme.palette.primary.main};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 960px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.palette.text.primary};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: ${props => props.theme.palette.primary.main};
  }
`;

const QuoteButton = styled(Button)`
  margin-left: 1.5rem;
`;

const MenuButton = styled(IconButton)`
  margin-left: auto;
  display: none;

  @media (max-width: 960px) {
    display: block;
  }
`;

const DrawerContent = styled.div`
  width: 250px;
  padding: 1rem;
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.palette.divider};
`;

const MobileNavLink = styled(Link)`
  color: ${props => props.theme.palette.text.primary};
  text-decoration: none;
  width: 100%;
`;

const MobileQuoteButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: 'What We Do', path: '/' },
    { text: 'Shippers', path: '/shippers' },
    { text: 'Carriers', path: '/carriers' },
    { text: 'About', path: '/about' },
  ];

  const drawer = (
    <DrawerContent>
      <DrawerHeader>
        <Logo to="/" onClick={handleDrawerToggle}>
          Sunny logistics
        </Logo>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.text} onClick={handleDrawerToggle}>
            <MobileNavLink to={item.path}>
              <ListItemText primary={item.text} />
            </MobileNavLink>
          </ListItem>
        ))}
        <ListItem>
          <MobileQuoteButton
            variant="contained"
            color="primary"
            fullWidth
          >
            Request Quote
          </MobileQuoteButton>
        </ListItem>
      </List>
    </DrawerContent>
  );

  return (
    <>
      <StyledAppBar position="sticky">
        <Toolbar>
          <Logo to="/">
            Sunny logistics
          </Logo>
          <NavLinks>
            {navItems.map((item) => (
              <NavLink key={item.text} to={item.path}>
                {item.text}
              </NavLink>
            ))}
            <QuoteButton
              variant="contained"
              color="primary"
              size="medium"
            >
              Request Quote
            </QuoteButton>
          </NavLinks>
          {isMobile && (
            <MenuButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </MenuButton>
          )}
        </Toolbar>
      </StyledAppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;