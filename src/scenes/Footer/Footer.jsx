import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";
import { colors } from "../assets/colors/colors";
import { Heading } from "../components/Heading";
import ButtonsContainer from "../components/ButtonsContainer";
import StyledButton from "../components/StyledButton";

const FooterContainer = styled.div`
  background-color: ${colors.theme};
  max-width: 100%;
  max-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4%;
  text-align: center;
  border-radius: 5px;
`;

const WhiteTypography = styled(Typography)`
  color: #ffffff;
`;

const CustomStyledButton = styled(StyledButton)`
  &.MuiButton-containedPrimary {
    background-color: #ffffff;
    color: ${colors.theme};
    padding: 15px;
    letter-spacing: 1px;
    border-radius: 5px;
    box-shadow: none;
    margin: 10px;
  }
  &.MuiButton-outlinedSecondary {
    color: #ffffff;
    border-color: #ffffff;
    padding: 15px;
    letter-spacing: 1px;
    border-radius: 5px;
    box-shadow: none;
    margin: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Heading>Ready to Streamline. Connect. Deliver?</Heading>
      <WhiteTypography
        variant="body1"
        style={{ marginTop: "10px", fontWeight: 400, letterSpacing: 1, color:'#FFFFFF' }}
      >
        Experience the power of hybrid logistics solutions
      </WhiteTypography>
      <ButtonsContainer>
        <CustomStyledButton variant="contained" color="primary" style={{textTransform:'none'}}>
          Request a Quote
        </CustomStyledButton>
        <CustomStyledButton variant="outlined" color="secondary" style={{textTransform:'none'}}>
          Contact Sales
        </CustomStyledButton>
      </ButtonsContainer>
    </FooterContainer>
  );
};

export default Footer;
