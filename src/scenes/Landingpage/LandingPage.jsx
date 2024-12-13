
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Grid, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import HeroSectionContainer from "../components/LandingPage/HeroSectionContainer";
import SectionContainer from "../components/LandingPage/SectionContainer";
import StatBox from "../components/LandingPage/StatBox";
import ServiceCard from "../components/LandingPage/ServiceCard";
import { Truck, Network, ChevronRight } from "lucide-react";
import { MainHeading, SectionHeading, BodyText } from "../heading/index";
import dictionary from "../dictionary";
import Footer from "../Footer/Footer";
import ShipNowForm from '../ShipNow/ShipNow';

const HeroActionButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const useStyles = makeStyles((theme) => ({
  Button: {
    backgroundColor: '#EF4444',
    color: theme.palette.secondary.main,
    textTransform: "none",
    padding: '0.75rem 1.5rem',
    borderRadius: 8,
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.light,
    },
    fontWeight: 500,
    width: 'auto',
  },
  outlinedButton: {
    color: theme.palette.secondary.main,
    padding: '0.75rem 1.5rem',
    borderColor: theme.palette.secondary.main,
    textTransform: "none",
    borderRadius: 8,
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    borderWidth: 2,
    "&:hover": {
      borderColor: '#E5E7EB',
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    fontWeight: 500,
  }
}));

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <HeroSectionContainer backgroundColor="#141B2A">
        <MainHeading
          style={{ 
            color: theme.palette.secondary.main, 
            fontSize: "56px",
            fontWeight: '800', 
            letterSpacing: '-0.02em', 
            marginBottom: '1.5rem' 
          }}
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
            onClick={() => setIsFormOpen(true)}
          >
            {dictionary.hero.shipNow}
          </Button>
          <Button
            variant="outlined"
            className={classes.outlinedButton}
            size="large"
            href="https://app.freightdok.io/federalSignup"
          >
            {dictionary.hero.joinNetwork}
          </Button>
        </HeroActionButtons>

        {/* Ship Now Form */}
        <ShipNowForm 
          open={isFormOpen} 
          onClose={() => setIsFormOpen(false)} 
        />
      </HeroSectionContainer>

      {/* About Section */}
      <SectionContainer background={theme.palette.secondary.main}>
        <Grid item xs={12} md={9}>
          <MainHeading
            style={{ 
              color: theme.palette.darkGrey.main, 
              fontSize: isMobile ? '30px' : "40px", 
              fontWeight: '800',
              marginBottom: '1.5rem',
              textAlign: "center"
            }}
          >
            {dictionary.about.heading}
          </MainHeading>
          <BodyText
            style={{
              color: theme.palette.text.main,
              fontSize: "18px",
              marginBottom: "3rem",
              textAlign: "center"
            }}
          >
            {dictionary.about.body}
          </BodyText>
          <StatsGrid>
            {[
              { title: "10,000+", description: "Loads Delivered" },
              { title: "1:1", description: "Single Point of Contact" },
              { title: "100+", description: "Active Shippers" },
              { title: "24/7", description: "Support" }
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#F9FAFB",
                  padding: "2rem",
                  borderRadius: "0.5rem"
                }}
              >
                <StatBox 
                  title={stat.title} 
                  description={stat.description}
                  titleStyle={{
                    color: '#EF4444',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem'
                  }}
                  descriptionStyle={{
                    color: '#4B5563',
                    fontSize: '1rem'
                  }}
                />
              </div>
            ))}
          </StatsGrid>
        </Grid>
      </SectionContainer>

      {/* Services Section */}
      <SectionContainer background="#F9FAFB">
        <MainHeading
          style={{ 
            color: theme.palette.darkGrey.main, 
            fontSize: isMobile ? '30px' : "40px", 
            fontWeight: '800',
            marginBottom: "3rem"
          }}
        >
          Our Services
        </MainHeading>
        <Grid item xs={12} md={9} style={{ width: "75%" }}>
          <ServiceCard
            icon={<Truck style={{ color: '#EF4444' }}/>}
            title={dictionary.services.forShippers.title}
            description={dictionary.services.forShippers.description}
            features={dictionary.services.forShippers.features}
            buttonText={dictionary.services.forShippers.buttonText}
            buttonLink={dictionary.services.forShippers.buttonLink}
            titleFontSize="24px"
            descriptionFontSize="16px"
            featureFontSize="14px"
          />
        </Grid>
        <Grid item xs={12} md={9} style={{ width: "75%", marginTop: "2rem" }}>
          <ServiceCard
            icon={<Network style={{ color: '#EF4444' }}/>}
            title={dictionary.services.forCarriers.title}
            description={dictionary.services.forCarriers.description}
            features={dictionary.services.forCarriers.features}
            buttonText={dictionary.services.forCarriers.buttonText}
            buttonLink={dictionary.services.forCarriers.buttonLink}
            titleFontSize="24px"
            descriptionFontSize="16px"
            featureFontSize="14px"
          />
        </Grid>
      </SectionContainer>

      {/* Technology Platform */}
      <SectionContainer background={theme.palette.secondary.main}>
        <Grid item xs={12} md={9} style={{ width: "75%" }}>
          <MainHeading
            style={{ 
              color: theme.palette.darkGrey.main, 
              fontSize: isMobile ? '30px' : "40px", 
              fontWeight: '800',
              marginBottom: '1.5rem',
              textAlign: "center"
            }}
          >
            {dictionary.carrierNetwork.main}
          </MainHeading>
          <BodyText
            style={{
              color: theme.palette.darkGrey.main,
              fontSize: "18px",
              marginBottom: "3rem",
              textAlign: "center"
            }}
          >
            {dictionary.carrierNetwork.description}
          </BodyText>
          <StatsGrid>
            {Object.values(dictionary.carrierNetwork.statBoxes).map((box, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#F9FAFB",
                  padding: "2rem",
                  borderRadius: "0.5rem"
                }}
              >
                <StatBox
                  title={box.title}
                  description={box.description}
                  titleStyle={{
                    color: '#EF4444',
                    fontSize: '2rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem'
                  }}
                  descriptionStyle={{
                    color: '#4B5563',
                    fontSize: '1rem'
                  }}
                />
              </div>
            ))}
          </StatsGrid>
        </Grid>
      </SectionContainer>

      {/* CTA Section */}
      <Footer
        title={dictionary.cta.main}
        description={dictionary.cta.body}
        buttonOne={dictionary.cta.requestQuote}
        buttonTwo={dictionary.cta.contactSales}
      />
    </>
  );
};

export default LandingPage;