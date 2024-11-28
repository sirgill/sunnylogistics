import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForwardIos";

import SectionContainer from "../components/SectionContainer";
import Heading from "../components/Heading";
import StatsContainer from "../components/StatsContainer";
import StatBox from "../components/StatBox";
import ButtonsContainer from "../components/ButtonsContainer";
import StyledButton from "../components/StyledButton";
import CardContainer from "../components/CardContainer";
import AssetBasedCard from "../cards/AssetBasedCard";
import StrategicFreightCard from "../cards/StrategicFreightCard";
import VisionCard from "../cards/VisionCard";
import ValuesCard from "../cards/ValuesCard";
import PersonalAccountManagementCard from "../cards/PersonalAccountManagementCard";
import OperationsCenterCard from "../cards/OperationsCenterCard";
import ProactiveServiceModelCard from "../cards/ProactiveServiceModelCard";

const LandingPageContainer = styled.div`
  padding: 16px;
`;

export const LandingPage = () => {
  return (
    <LandingPageContainer>
      <SectionContainer>
        <Heading>Hybrid Logistics Solutions</Heading>
        <Typography variant="body1">
          Asset-Based Carrier & Tech-Enabled Freight Brokerage serving the
          Midwest since 2019
        </Typography>
        <ButtonsContainer>
          <StyledButton
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
          >
            Ship Now
          </StyledButton>
          <StyledButton variant="contained" color="secondary">
            Join Our Network
          </StyledButton>
        </ButtonsContainer>
      </SectionContainer>
      <SectionContainer>
        <Heading>Complete Logistics Solutions</Heading>
        <Typography variant="body1">
          Since 2019, we've successfully moved thousands of loads for our valued
          customers, maintaining a 98.5% on-time delivery rate. Our commitment
          to excellence has earned us long-term partnerships with leading
          manufacturers and distributors across the Midwest.
        </Typography>
        <StatsContainer>
          <StatBox value="15,000+" label="Loads Delivered" />
          <StatBox value="98.5%" label="On-Time Delivery" />
          <StatBox value="100+" label="Active Customers" />
        </StatsContainer>
      </SectionContainer>
      <SectionContainer>
        <Heading>Our Story</Heading>
        <Typography variant="body1">
          Founded in 2019 in Indianapolis, Sunny Logistics began with a single
          truck and a vision to revolutionize Midwest freight transportation.
          Our founders recognized the need for a logistics provider that could
          combine the reliability of asset-based operations with the flexibility
          of a tech-enabled brokerage. Starting from humble beginnings, we've
          grown to operate a fleet of 40+ trucks and 50+ trailers, while
          building a technology platform that sets new standards for efficiency
          and transparency in the logistics industry. Today, we're proud to be a
          trusted partner for hundreds of shippers across the Midwest, combining
          our asset-based capabilities with strategic brokerage solutions to
          meet any logistics challenge.
        </Typography>
        <CardContainer>
          <VisionCard /> <ValuesCard />
        </CardContainer>
      </SectionContainer>
      <SectionContainer>
        <Heading>Dedicated Support Excellence</Heading>
        <CardContainer>
          <PersonalAccountManagementCard /> <OperationsCenterCard />
          <ProactiveServiceModelCard />
        </CardContainer>
      </SectionContainer>
      <SectionContainer>
        <Heading>Asset-Based Fleet</Heading> <AssetBasedCard />
      </SectionContainer>
      <SectionContainer>
        <Heading>Strategic Freight Solutions</Heading> <StrategicFreightCard />
      </SectionContainer>
    </LandingPageContainer>
  );
};
