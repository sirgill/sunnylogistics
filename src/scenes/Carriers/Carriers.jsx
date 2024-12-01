import React from "react";
import styled from "@emotion/styled";
import HeroSectionContainer from "../components/HeroSectionContainer";
import SectionContainer from "../components/SectionContainer";
import StatBox from "../cards/StatBox";
import ServiceCard from "../cards/ServiceCard";
import FeatureCard from "../cards/FeatureCard";
import { Grid, Typography, Button } from "@material-ui/core";
import { Truck, Network, Shield, Clock, Target, DollarSign, Users, CheckCircle, BarChart } from "lucide-react";

const StatsGrid = styled(Grid)`
  margin-top: 2rem;
`;

const RequirementItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  svg {
    color: ${props => props.theme.palette.primary.main};
    margin-right: 1rem;
  }
`;

const Carriers = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionContainer>
        <Typography variant="overline" gutterBottom>
          Carriers
        </Typography>
        <Typography variant="h1" gutterBottom>
          Driven<br />for you.
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Join our growing network of successful carriers. We provide consistent freight 
          opportunities and the support you need to grow your business.
        </Typography>
        <Button variant="outlined" color="inherit" size="large">
          Sign up as a carrier
        </Button>
      </HeroSectionContainer>

      {/* Stats Section */}
      <SectionContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Let Sunny Logistics work for you.
            </Typography>
            <Typography variant="body1">
              Founded in 2019, we built our company on the principle of treating carriers 
              with fairness and transparency. Our extensive customer base in the Midwest 
              provides consistent freight opportunities year-round.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <StatsGrid container spacing={3}>
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
            </StatsGrid>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer background="light">
        <Typography variant="h3" align="center" gutterBottom>
          Why Partner With Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={<DollarSign />}
              title="Competitive Rates"
              description="Earn more with our competitive rates and quick pay options available within 24 hours"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={<BarChart />}
              title="Consistent Freight"
              description="Access steady, year-round opportunities from our established Midwest customer base"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={<Users />}
              title="Dedicated Support"
              description="Work with a dedicated team that understands your business needs"
            />
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Network Technology */}
      <SectionContainer>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Carrier Network
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our carrier network is powered by freightdok capacity network, providing you 
              with cutting-edge technology and seamless operations.
            </Typography>
            <div className="space-y-4">
              <RequirementItem>
                <CheckCircle />
                <Typography>Real-time load matching and booking</Typography>
              </RequirementItem>
              <RequirementItem>
                <CheckCircle />
                <Typography>Automated document processing</Typography>
              </RequirementItem>
              <RequirementItem>
                <CheckCircle />
                <Typography>Quick and easy settlement access</Typography>
              </RequirementItem>
              <RequirementItem>
                <CheckCircle />
                <Typography>Mobile app for on-the-go management</Typography>
              </RequirementItem>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <ServiceCard
                  title="Digital Booking"
                  description="Book loads instantly through our platform"
                />
              </Grid>
              <Grid item xs={6}>
                <ServiceCard
                  title="Fast Pay"
                  description="Get paid quickly with various payment terms"
                />
              </Grid>
              <Grid item xs={6}>
                <ServiceCard
                  title="Real-Time Updates"
                  description="Stay informed with automated notifications"
                />
              </Grid>
              <Grid item xs={6}>
                <ServiceCard
                  title="24/7 Support"
                  description="Access support whenever you need it"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Requirements Section */}
      <SectionContainer background="light">
        <Typography variant="h3" align="center" gutterBottom>
          Partner Requirements
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <ServiceCard
              title="Insurance Coverage"
              items={[
                "$100,000 Cargo Insurance",
                "$1,000,000 Auto Liability"
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard
              title="Compliance"
              items={[
                "Valid Operating Authority",
                "Satisfactory Safety Rating",
                "ELD Compliance"
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard
              title="Documentation"
              items={[
                "W-9 Form",
                "Carrier Agreement",
                "Direct Deposit Info"
              ]}
            />
          </Grid>
        </Grid>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer background="primary">
        <Typography variant="h3" align="center" gutterBottom>
          Ready to grow with us?
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          Join our carrier network today and access consistent, profitable freight 
          opportunities across the Midwest.
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Button variant="contained" color="secondary" size="large">
              Apply Now
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="inherit" size="large">
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </SectionContainer>
    </>
  );
};

export default Carriers;