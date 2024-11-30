import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import styled from "@emotion/styled";
import theme from "./components/layout/ui/Theme";
import Navbar from "./scenes/Navbar/navbar";
import LandingPage from "./scenes/Landingpage/LandingPage";

const AppContainer = styled.div`
  padding: 5px;
  background-color: #FFFFFF; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppContainer>
          <Navbar />
          <Route exact path="/" component={LandingPage} />
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
