import React from "react";
import styled from "@emotion/styled";
import { Typography, Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SectionContainer from "../components/SectionContainer";
import Heading from "../components/Heading";
import ButtonsContainer from "../components/ButtonsContainer";
import StyledButton from "../components/StyledButton";

const FooterContainer = styled(SectionContainer)`
  background-color: #141B2A;
  color: #fff;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Heading>Ready to Streamline. Connect. Deliver?</Heading>
      <Typography variant="body1">
        Experience the power of hybrid logistics solutions
      </Typography>
      <ButtonsContainer>
        <StyledButton
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
        >
          Request a Quote
        </StyledButton>
        <StyledButton variant="contained" color="secondary">
          Contact Sales
        </StyledButton>
      </ButtonsContainer>
    </FooterContainer>
  );
};

export default Footer;
