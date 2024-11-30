import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForwardIos";
import { colors } from "../assets/colors/colors";
import HeroSectionContainer from "../components/HeroSectionContainer";
import SectionContainer from "../components/SectionContainer";
import { Heading, Heading2, CardsHeading } from "../components/Heading";
import StatsContainer from "../components/StatsContainer";
import StatBox from "../components/StatBox";
import ButtonsContainer from "../components/ButtonsContainer";
import StyledButton from "../components/StyledButton";
import { CardContainer, StoryContainer } from "../components/CardContainer";
import AssetBasedCard from "../cards/AssetBasedCard";
import StrategicFreightCard from "../cards/StrategicFreightCard";
import VisionCard from "../cards/VisionCard";
import ValuesCard from "../cards/ValuesCard";
import PersonalAccountManagementCard from "../cards/PersonalAccountManagementCard";
import OperationsCenterCard from "../cards/OperationsCenterCard";
import ProactiveServiceModelCard from "../cards/ProactiveServiceModelCard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/navbar";

const LandingPageContainer = styled.div`
  padding: 16px;
`;

const WhiteTypography = styled(Typography)`
  color: #fff;
`;

const CustomStyledButton = styled(StyledButton)`
  &.MuiButton-containedPrimary {
    background-color: ${colors.theme};
    color: #ffffff;
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

const StyledTypography = styled(Typography)`
  color: ${colors.paragraphText};
  margin-top: ${({ marginTop }) => marginTop || "0px"};
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <div
        style={{
          padding: "5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#141B2A",
          width: "90%",
          borderRadius: "5px",
        }}
      >
        <Heading>Hybrid Logistics Solutions</Heading>
        <WhiteTypography variant="body1" style={{ marginTop: "20px" }}>
          Asset-Based Carrier & Tech-Enabled Freight Brokerage serving the
          Midwest since 2019
        </WhiteTypography>
        <ButtonsContainer>
          <CustomStyledButton
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
          >
            Ship Now
          </CustomStyledButton>
          <CustomStyledButton variant="outlined" color="secondary">
            Join Our Network
          </CustomStyledButton>
        </ButtonsContainer>
      </div>
      <SectionContainer>
        <Heading2>Complete Logistics Solutions</Heading2>
        <StyledTypography
          variant="body1"
          style={{
            marginTop: "15px",
          }}
        >
          Since 2019, we've successfully moved thousands of loads for our valued
          customers,
        </StyledTypography>
        <StyledTypography variant="body1">
          maintaining a 98.5% on-time delivery rate. Our commitment to
          excellence
        </StyledTypography>
        <StyledTypography variant="body1">
          has earned us long-term partnerships with leading manufacturers and
          distributors across the Midwest.
        </StyledTypography>
        <StatsContainer>
          <StatBox value="15,000+" label="Loads Delivered" />
          <StatBox value="98.5%" label="On-Time Delivery" />
          <StatBox value="100+" label="Active Customers" />
        </StatsContainer>
        <AssetBasedCard />
        <StrategicFreightCard />
        <StoryContainer>
          <Heading2>Our Story</Heading2>
          <StyledTypography
            variant="body1"
            style={{
              marginTop: "15px",
            }}
          >
            Founded in 2019 in Indianapolis, Sunny Logistics began with a single
            truck and a vision to revolutionize Midwest freight transportation.
            Our founders recognized the need for a logistics provider that could
            combine the reliability of asset-based operations with the
            flexibility of a tech-enabled brokerage.
          </StyledTypography>
          <StyledTypography
            variant="body1"
            style={{
              marginTop: "12px",
            }}
          >
            Starting from humble beginnings, we've grown to operate a fleet of
            40+ trucks and 50+ trailers, while building a technology platform
            that sets new standards for efficiency and transparency in the
            logistics industry.
          </StyledTypography>
          <StyledTypography
            variant="body1"
            style={{
              marginTop: "12px",
            }}
          >
            Today, we're proud to be a trusted partner for hundreds of shippers
            across the Midwest, combining our asset-based capabilities with
            strategic brokerage solutions to meet any logistics challenge.
          </StyledTypography>
        </StoryContainer>
        <VisionCard />
        <ValuesCard />
        <Heading2>Dedicated Support Excellence</Heading2>
        <PersonalAccountManagementCard />
        <OperationsCenterCard />
        <ProactiveServiceModelCard />
      </SectionContainer>
      <Footer />
    </LandingPageContainer>
  );
};

export default LandingPage;
