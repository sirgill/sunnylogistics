import React from "react";
import styled from "@emotion/styled";
import { Grid, Typography, Button } from "@material-ui/core";
import HeroSectionContainer from "../components/LandingPage/HeroSectionContainer";
import SectionContainer from "../components/LandingPage/SectionContainer";
import StatBox from "../cards/StatBox";
import ServiceCard from "../components/LandingPage/ServiceCard";
import FeatureCard from "../cards/FeatureCard";
import { Truck, Network, Shield, Clock, Target, Box, BarChart } from "lucide-react";

const StatsGrid = styled(Grid)`
  margin-top: 2rem;
`;

const FeatureIcon = styled.div`
  color: ${props => props.theme.palette.primary.main};
  margin-bottom: 1rem;
`;

const Shippers = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionContainer>
        <Typography variant="overline" gutterBottom>
          Shippers
        </Typography>
        <Typography variant="h1" gutterBottom>
          Streamline.<br />Connect.<br />Deliver.
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Experience the power of hybrid logistics solutions combining asset-based 
          reliability with tech-enabled flexibility.
        </Typography>
        <Button variant="outlined" color="inherit" size="large">
          Get Started
        </Button>
      </HeroSectionContainer>

      {/* Stats Section */}
      <SectionContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Your Trusted Logistics Partner
            </Typography>
            <Typography variant="body1">
              Since 2019, we've been delivering excellence in freight transportation across 
              the Midwest. Our hybrid model combines the reliability of asset-based operations 
              with the flexibility of a tech-enabled brokerage.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <StatsGrid container spacing={3}>
              <Grid item xs={6}>
                <StatBox title="10,000+" description="Loads Delivered" />
              </Grid>
              <Grid item xs={6}>
                <StatBox title="99.5%" description="On-Time Delivery" />
              </Grid>
              <Grid item xs={6}>
                <StatBox title="24/7" description="Support" />
              </Grid>
              <Grid item xs={6}>
                <StatBox title="40+" description="Trucks" />
              </Grid>
            </StatsGrid>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Services Section */}
      <SectionContainer background="light">
        <Typography variant="h3" align="center" gutterBottom>
          Complete Logistics Solutions
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ServiceCard
              icon={<Truck />}
              title="Asset-Based Services"
              description="Reliable capacity with our dedicated fleet"
              features={[
                "Dedicated equipment",
                "Professional company drivers",
                "Regular routes available",
                "Temperature controlled options"
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ServiceCard
              icon={<Network />}
              title="Brokerage Services"
              description="Flexible solutions for any shipping need"
              features={[
                "Nationwide coverage",
                "Vetted carrier network",
                "Specialized equipment",
                "Surge capacity"
              ]}
            />
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Technology Platform */}
      <SectionContainer>
        <Typography variant="h3" align="center" gutterBottom>
          Technology-Driven Solutions
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          Powered by freightdok, our platform provides real-time visibility 
          and control over your shipments
        </Typography>
        <Grid container spacing={4} style={{ marginTop: '2rem' }}>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={<Target />}
              title="Real-Time Tracking"
              description="Monitor your shipments with GPS precision and receive proactive status updates"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={<Box />}
              title="Digital Documentation"
              description="Access BOLs, PODs, and invoices in one centralized platform"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={<BarChart />}
              title="Analytics Dashboard"
              description="Gain insights into your shipping patterns and optimize your supply chain"
            />
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Our Edge Section */}
      <SectionContainer background="light">
        <Typography variant="h3" align="center" gutterBottom>
          Our Edge
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={<Shield />}
              title="Dedicated Service"
              description="Single point of contact for all your shipping needs with 24/7 support"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={<Clock />}
              title="Fast Response"
              description="Quick quotes and immediate capacity solutions when you need them"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={<Target />}
              title="Regional Expertise"
              description="Specialized knowledge of Midwest freight lanes and requirements"
            />
          </Grid>
        </Grid>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer background="primary">
        <Typography variant="h3" align="center" gutterBottom>
          Ready to optimize your supply chain?
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          Experience the difference of working with a logistics partner who understands your needs.
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Button variant="contained" color="secondary" size="large">
              Request a Quote
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="inherit" size="large">
              Contact Sales
            </Button>
          </Grid>
        </Grid>
      </SectionContainer>
    </>
  );
};

export default Shippers;