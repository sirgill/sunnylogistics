import React from "react";
import styled from "@emotion/styled";
import { Grid, useMediaQuery, Button } from "@material-ui/core";
import ShipperSectionContainer from "../components/ShippersPage/ShippersSectionContainer";
import SectionContainer from "../components/LandingPage/SectionContainer";
import StatBox from "../components/LandingPage/StatBox";
import ServiceCard from "../components/LandingPage/ServiceCard";
import FeatureCard from "../components/CarrierPage/FeatureCard";
import {
  Truck,
  Network,
  Shield,
  Clock,
  Target,
  Box,
  BarChart,
} from "lucide-react";
import { SectionHeading, BodyText, MainHeading } from "../heading";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Footer from "../Footer/Footer";
import dictionary from "../dictionary";
import ShipNowForm from '../ShipNow/ShipNow';
import { useState } from 'react'; 

const StatsGrid = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const useStyles = makeStyles((theme) => ({
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
    fontWeight: 600,
    marginTop: 30,
  },
}));

const Shippers = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <ShipperSectionContainer backgroundColor="#141B2A">
        <SectionHeading
          style={{
            color: theme.palette.secondary.main,
            marginBottom: 20,
            fontWeight: 400,
          }}
        >
          {dictionary.heroSection.heading}
        </SectionHeading>
        <MainHeading
          style={{
            color: theme.palette.secondary.main,
            fontSize: "45px",
            fontWeight: "bold",
          }}
        >
          Streamline.
          <br />
          Connect.
          <br />
          Deliver.
        </MainHeading>
        <BodyText
          style={{
            color: theme.palette.secondary.main,
            fontSize: "20px",
            marginTop: 30,
          }}
        >
          {dictionary.heroSection.bodyText}
        </BodyText>
        <Button
          variant="outlined"
          size="large"
          className={classes.outlinedButton}
          onClick={() => setIsFormOpen(true)}
        >
          {dictionary.heroSection.button}
        </Button>

        <ShipNowForm 
          open={isFormOpen} 
          onClose={() => setIsFormOpen(false)} 
        />
        
      </ShipperSectionContainer>

      {/* Stats Section */}
      <SectionContainer background={theme.palette.secondary.main}>
  <Grid item xs={12} md={9}>
    <MainHeading
      style={{
        color: theme.palette.darkGrey.main,
        fontSize: isMobile ? '30px' : "40px",
        textAlign: "left",
        fontWeight: "bold",
      }}
    >
      {dictionary.statsSection.mainHeading}
    </MainHeading>
    <BodyText
      style={{
        color: theme.palette.text.main,
        fontSize: "18px",
        marginTop: 30,
        textAlign: "left",
      }}
    >
      {dictionary.statsSection.bodyText}
    </BodyText>

    <StatsGrid>
      {dictionary.statsSection.stats.map((stat, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#F9FAFB",
            padding: "2rem",
            borderRadius: "0.5rem",
            textAlign: "center"
          }}
        >
          <StatBox 
            title={stat.title} 
            description={stat.description}
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
      {/* Services Section */}
      <SectionContainer background="#F9FAFB">
        <MainHeading
          style={{
            color: theme.palette.darkGrey.main,
            fontSize: isMobile? '30px':"40px",
            textAlign: "left",
            fontWeight: "800",
            marginBottom: "3rem"
          }}
        >
          {dictionary.servicesSection.mainHeading}
        </MainHeading>
        <Grid style={{ width: isMobile ? '100%' : '75%', display: 'grid', gap: '2rem', }}>
          {dictionary.servicesSection.services.map((service, index) => (
            <Grid key={index} item xs={12} md={12}>
              <ServiceCard
                icon={service.icon === "Truck" ? <Truck /> : <Network />}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* Technology Platform */}
      <SectionContainer>
        <MainHeading
          style={{
            color: theme.palette.darkGrey.main,
            fontSize: isMobile? '30px':"40px",
            textAlign: "left",
            fontWeight: "800",

          }}
        >
          {dictionary.technologyPlatform.mainHeading}
        </MainHeading>
        <BodyText
          style={{
            color: theme.palette.text.main,
            fontSize: "18px",
            marginTop: 30,
            textAlign: "left",
          }}
        >
          {dictionary.technologyPlatform.bodyText}
        </BodyText>
        <Grid spacing={4} style={{ marginTop: "2rem", width: isMobile ? '100%' : '75%'  }}>
          {dictionary.technologyPlatform.features.map((feature, index) => (
            <Grid key={index} item md={12}>
              <FeatureCard
                icon={
                  feature.icon === "Target" ? (
                    <Target />
                  ) : feature.icon === "Box" ? (
                    <Box />
                  ) : (
                    <BarChart />
                  )
                }
                title={feature.title}
                description={feature.description}
              />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* Our Edge Section */}
      <SectionContainer background="#F9FAFB">
        <MainHeading
          style={{
            color: theme.palette.darkGrey.main,
            fontSize: isMobile? '30px':"40px",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          {dictionary.ourEdge.mainHeading}
        </MainHeading>
        <Grid spacing={4} style={{ marginTop: "2rem", width: isMobile ? '100%' : '75%'  }}>
          {dictionary.ourEdge.features.map((feature, index) => (
            <Grid key={index} item xs={12} md={12}>
              <FeatureCard
                icon={
                  feature.icon === "Shield" ? (
                    <Shield />
                  ) : feature.icon === "Clock" ? (
                    <Clock />
                  ) : (
                    <Target />
                  )
                }
                title={feature.title}
                description={feature.description}
              />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* CTA Section */}
      <Footer
        title={dictionary.footer.title}
        description={dictionary.footer.description}
        buttonOne={dictionary.footer.buttonOne}
        buttonTwo={dictionary.footer.buttonTwo}
      />
    </>
  );
};

export default Shippers;
