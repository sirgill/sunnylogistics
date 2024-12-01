import React from "react";
import styled from "@emotion/styled";
import { Grid, Typography } from "@material-ui/core";
import HeroSectionContainer from "../components/HeroSectionContainer";
import SectionContainer from "../components/SectionContainer";
import ValuesCard from "../cards/ValuesCard";
import { Shield, TrendingUp, Heart } from "lucide-react";

const TimelineContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const TimelineYear = styled(Typography)`
  color: ${props => props.theme.palette.primary.main};
  font-weight: bold;
  white-space: nowrap;
`;

const TimelineContent = styled.div`
  flex-grow: 1;
`;

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionContainer>
        <Typography variant="h1" gutterBottom>
          Building the<br />Next Freight<br />Ecosystem
        </Typography>
        <Typography variant="h5" component="p">
          Since 2019, we've been transforming Midwest logistics through innovation, 
          technology, and an unwavering commitment to excellence.
        </Typography>
      </HeroSectionContainer>

      {/* Mission & Vision Section */}
      <SectionContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1">
              To create a connected freight ecosystem driven by data, automation, and service. 
              We aim to build a healthy and stable network for shippers and carriers in the Midwest, 
              fostering growth and efficiency through technology and transparency.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1">
              To become the leading technology-enabled logistics provider in the Midwest, 
              setting new standards for reliability, innovation, and customer service in 
              the transportation industry.
            </Typography>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Core Values Section */}
      <SectionContainer background="light">
        <Typography variant="h3" align="center" gutterBottom>
          Our Core Values
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <ValuesCard
              icon={<Shield />}
              title="Trust"
              description="Building lasting relationships through reliability and consistent performance"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ValuesCard
              icon={<TrendingUp />}
              title="Transparency"
              description="Maintaining open communication and visibility in all our operations"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ValuesCard
              icon={<Heart />}
              title="Fairness"
              description="Treating all partners with respect and ensuring mutual success"
            />
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Journey Timeline Section */}
      <SectionContainer>
        <Typography variant="h3" gutterBottom>
          Our Journey
        </Typography>
        
        <TimelineContainer>
          <TimelineYear variant="h4">2019</TimelineYear>
          <TimelineContent>
            <Typography variant="h5" gutterBottom>Foundation</Typography>
            <Typography variant="body1">
              Started with a vision to revolutionize Midwest logistics. Founded by industry veterans 
              who saw the need for a more innovative, technology-driven approach to transportation. 
              Began operations with a single truck and a commitment to exceptional service.
            </Typography>
          </TimelineContent>
        </TimelineContainer>

        <TimelineContainer>
          <TimelineYear variant="h4">2020</TimelineYear>
          <TimelineContent>
            <Typography variant="h5" gutterBottom>Sunny Freight Launch</Typography>
            <Typography variant="body1">
              Established our trucking division to provide dedicated capacity solutions. 
              Expanded our fleet to serve key Midwest lanes and built our initial customer base 
              through a focus on reliability and personal service. Implemented our first digital 
              tracking solutions.
            </Typography>
          </TimelineContent>
        </TimelineContainer>

        <TimelineContainer>
          <TimelineYear variant="h4">2021</TimelineYear>
          <TimelineContent>
            <Typography variant="h5" gutterBottom>Technology Integration & Growth</Typography>
            <Typography variant="body1">
              Partnered with freightdok to enhance our digital capabilities. Launched our 
              automated booking platform, real-time tracking system, and digital documentation 
              solutions. Expanded our carrier network to over 50 trusted partners and achieved 
              5,000+ successful deliveries.
            </Typography>
          </TimelineContent>
        </TimelineContainer>

        <TimelineContainer>
          <TimelineYear variant="h4">2023</TimelineYear>
          <TimelineContent>
            <Typography variant="h5" gutterBottom>Network & Technology Evolution</Typography>
            <Typography variant="body1">
              Reached milestone of 10,000+ loads delivered and 100+ active customers. Enhanced 
              our freightdok integration with new features for both carriers and shippers. 
              Expanded our trailer pool program and implemented advanced route optimization 
              algorithms.
            </Typography>
          </TimelineContent>
        </TimelineContainer>
      </SectionContainer>
    </>
  );
};

export default About;