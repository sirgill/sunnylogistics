import React from "react";
import styled from "@emotion/styled";
import { Grid, Typography, Button } from "@material-ui/core";
import HeroSectionContainer from "../components/HeroSectionContainer";  
import SectionContainer from "../components/SectionContainer";         
import StatBox from "../cards/StatBox";
import ServiceCard from "../cards/ServiceCard";
import { Truck, Network } from "lucide-react";

const HeroActionButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionContainer>
        <Typography variant="h1" gutterBottom>
          Hybrid Logistics Solutions
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Asset-Based Carrier & Tech-Enabled Freight Brokerage serving the Midwest since 2019
        </Typography>
        <HeroActionButtons>
          <Button variant="contained" color="secondary" size="large">
            Ship Now
          </Button>
          <Button variant="outlined" color="inherit" size="large">
            Join Our Network
          </Button>
        </HeroActionButtons>
      </HeroSectionContainer>

      {/* Stats Overview */}
      <SectionContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Complete Logistics Solutions
            </Typography>
            <Typography variant="body1">
              Since 2019, we've successfully moved thousands of loads for our valued customers, 
              maintaining a 98.5% on-time delivery rate. Our commitment to excellence has earned 
              us long-term partnerships with leading manufacturers and distributors across the Midwest.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <StatBox title="10,000+" description="Loads Delivered" />
              </Grid>
              <Grid item xs={6}>
                <StatBox title="1:1" description="Single Point of Contact" />
              </Grid>
              <Grid item xs={6}>
                <StatBox title="100+" description="Active Shippers" />
              </Grid>
              <Grid item xs={6}>
                <StatBox title="24/7" description="Support" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Services Section */}
      <SectionContainer background="light">
        <Typography variant="h3" align="center" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ServiceCard
              icon={<Truck />}
              title="For Shippers"
              description="Service, responsiveness and consistent results"
              features={[
                "Dedicated capacity",
                "Real-time tracking",
                "Analytics dashboard",
                "24/7 support"
              ]}
              buttonText="Learn More"
              buttonLink="/shippers"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ServiceCard
              icon={<Network />}
              title="For Carriers"
              description="The support you need to be successful"
              features={[
                "Consistent freight",
                "Quick pay options",
                "Digital load booking",
                "Dedicated support"
              ]}
              buttonText="Learn More"
              buttonLink="/carriers"
            />
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Technology Platform */}
      <SectionContainer>
        <Typography variant="h3" align="center" gutterBottom>
          Carrier Network
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          Our carrier network is powered by freightdok capacity network, providing cutting-edge 
          technology and seamless operations
        </Typography>
        <Grid container spacing={4} justifyContent="center" style={{ marginTop: '2rem' }}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <StatBox title="Digital Booking" description="Instant load booking" />
              </Grid>
              <Grid item xs={6}>
                <StatBox title="Real-Time Updates" description="Automated notifications" />
              </Grid>
              <Grid item xs={6}>
                <StatBox title="Fast Pay" description="Quick payment options" />
              </Grid>
              <Grid item xs={6}>
                <StatBox title="24/7 Support" description="Always available" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer background="primary">
        <Typography variant="h3" align="center" gutterBottom>
          Ready to Streamline.Connect.Deliver?
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          Experience the power of hybrid logistics solutions
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

export default LandingPage;