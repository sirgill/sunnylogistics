import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { MainHeading, SectionHeading, BodyText } from "../heading";
import SectionContainer from "../components/CarrierPage/SectionContainer";
import { Button } from "@material-ui/core";
import styled from "@emotion/styled";

const HeroActionButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const useStyles = makeStyles((theme) => ({
  Button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    textTransform: "none",
    padding: 12,
    borderRadius: 8,
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.light,
    },
    fontWeight: 400,
    width: 150,
  },
  outlinedButton: {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    textTransform: "none",
    borderRadius: 8,
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    borderWidth: 2,
    "&:hover": {
      borderColor: theme.palette.secondary.main,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    fontWeight: 400,
  },
  requestButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    textTransform: "none",
    padding: 12,
    borderRadius: 8,
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.light,
    },
    fontWeight: 400,
    width: 150,
  },
}));

const Footer = ({ title, description, buttonOne, buttonTwo }) => {

  const classes = useStyles();
  const theme = useTheme(); 

  return (
    <SectionContainer
      style={{ padding: "5%" }}
      background={theme.palette.primary.main}
    >
      <MainHeading
        style={{ color: theme.palette.secondary.main, fontSize: "40px" }}
      >
        {title}
      </MainHeading>
      <BodyText
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: theme.palette.secondary.main,
          fontSize: "20px",
        }}
      >
        {description}
      </BodyText>

      <HeroActionButtons>
        <Button
          variant="contained"
          className={classes.requestButton}
          size="large"
        >
          {buttonOne}
        </Button>
        <Button
          variant="outlined"
          className={classes.outlinedButton}
          size="large"
        >
          {buttonTwo}
        </Button>
      </HeroActionButtons>
    </SectionContainer>
  );
};

export default Footer;
