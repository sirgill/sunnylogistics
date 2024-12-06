import React from "react";
import styled from "@emotion/styled";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import HeroSectionContainer from "../components/HeroSectionContainer";
import SectionContainer from "../components/SectionContainer";
import StatBox from "../components/StatBox";
import ServiceCard from "../components/ServiceCard";
import { Truck, Network } from "lucide-react";
import { MainHeading, SectionHeading, BodyText } from "../heading/index";
import { ChevronRight } from "lucide-react";
import dictionary from "../dictionary"; 

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

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      {/* Hero Section */}
      <HeroSectionContainer backgroundColor="#141B2A">
        <MainHeading
          style={{ color: theme.palette.secondary.main, fontSize: "40px" }}
        >
          {dictionary.hero.title}
        </MainHeading>
        <SectionHeading style={{ color: "#D1D5DB" }}>
          {dictionary.hero.subtitle}
        </SectionHeading>
        <HeroActionButtons>
          <Button
            variant="contained"
            className={classes.Button}
            size="large"
            endIcon={<ChevronRight />}
          >
            {dictionary.hero.shipNow}
          </Button>
          <Button
            variant="outlined"
            className={classes.outlinedButton}
            size="large"
          >
            {dictionary.hero.joinNetwork}
          </Button>
        </HeroActionButtons>
      </HeroSectionContainer>

      {/* About Section */}
      <SectionContainer background={theme.palette.secondary.main}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ textAlign: "center", margin: "0 auto" }}
        >
          <MainHeading
            style={{ color: theme.palette.darkGrey.main, fontSize: "30px" }}
          >
            {dictionary.about.heading}
          </MainHeading>
          <BodyText
            style={{
              color: theme.palette.text.main,
              fontSize: "20px",
              marginTop: 30,
            }}
          >
            {dictionary.about.body}
          </BodyText>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: 30,
          }}
        >
          <StatBox title="10,000+" description="Loads Delivered" />
          <StatBox title="1:1" description="Single Point of Contact" />
          <StatBox title="100+" description="Active Shippers" />
          <StatBox title="24/7" description="Support" />
        </div>
      </SectionContainer>

      {/* Services Section */}
      <SectionContainer background="#fff">
        <MainHeading
          style={{ color: theme.palette.darkGrey.main, fontSize: "30px" }}
        >
          Our Services
        </MainHeading>
        <Grid container style={{ justifyContent: "center", marginTop: 20 }}>
          <Grid item xs={12} md={9} style={{ width: "100%" }}>
            <ServiceCard
              icon={<Truck />}
              title={dictionary.services.forShippers.title}
              description={dictionary.services.forShippers.description}
              features={dictionary.services.forShippers.features}
              buttonText={dictionary.services.forShippers.buttonText}
              buttonLink={dictionary.services.forShippers.buttonLink}
            />
          </Grid>
          <Grid item xs={12} md={9} style={{ width: "100%" }}>
            <ServiceCard
              icon={<Network />}
              title={dictionary.services.forCarriers.title}
              description={dictionary.services.forCarriers.description}
              features={dictionary.services.forCarriers.features}
              buttonText={dictionary.services.forCarriers.buttonText}
              buttonLink={dictionary.services.forCarriers.buttonLink}
            />
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Technology Platform */}
      <SectionContainer>
  <MainHeading style={{ color: theme.palette.darkGrey.main, fontSize: "30px" }}>
    {dictionary.carrierNetwork.main}
  </MainHeading>
  <SectionHeading style={{ color: theme.palette.darkGrey }}>
    {dictionary.carrierNetwork.description}
  </SectionHeading>
  <Grid container spacing={4} justifyContent="center" style={{ marginTop: "2rem" }}>
    <Grid item xs={12} md={8}>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: 30 }}>
        <Grid item xs={6}>
          <StatBox
            title={dictionary.carrierNetwork.statBoxes.digitalBooking.title}
            description={dictionary.carrierNetwork.statBoxes.digitalBooking.description}
          />
        </Grid>
        <Grid item xs={7}>
          <StatBox
            title={dictionary.carrierNetwork.statBoxes.realTimeUpdates.title}
            description={dictionary.carrierNetwork.statBoxes.realTimeUpdates.description}
          />
        </Grid>
        <Grid item xs={6}>
          <StatBox
            title={dictionary.carrierNetwork.statBoxes.fastPay.title}
            description={dictionary.carrierNetwork.statBoxes.fastPay.description}
          />
        </Grid>
        <Grid item xs={6}>
          <StatBox
            title={dictionary.carrierNetwork.statBoxes.support.title}
            description={dictionary.carrierNetwork.statBoxes.support.description}
          />
        </Grid>
      </div>
    </Grid>
  </Grid>
</SectionContainer>


      {/* CTA Section */}
      <SectionContainer
        style={{ padding: "5%" }}
        background={theme.palette.primary.main}
      >
        <MainHeading
          style={{ color: theme.palette.secondary.main, fontSize: "40px" }}
        >
          {dictionary.cta.main}
        </MainHeading>
        <BodyText
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: theme.palette.secondary.main,
            fontSize: "20px",
          }}
        >
          {dictionary.cta.body}
        </BodyText>

        <HeroActionButtons>
          <Button
            variant="contained"
            className={classes.requestButton}
            size="large"
          >
            {dictionary.cta.requestQuote}
          </Button>
          <Button
            variant="outlined"
            className={classes.outlinedButton}
            size="large"
          >
            {dictionary.cta.contactSales}
          </Button>
        </HeroActionButtons>
      </SectionContainer>
    </>
  );
};

export default LandingPage;
