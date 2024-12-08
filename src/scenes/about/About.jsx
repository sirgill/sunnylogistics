import React from "react";
import styled from "@emotion/styled";
import { Grid, Typography, Paper, Box, Divider } from "@material-ui/core";
import SectionContainer from "../components/LandingPage/SectionContainer";
import { Shield, TrendingUp, Heart } from "lucide-react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Footer from "../Footer/Footer";
import { MainHeading, SectionHeading, BodyText } from "../heading";
import AboutSectionContainer from "../components/AboutPage/AboutSectionContainer";
import ServiceCard from "../components/LandingPage/ServiceCard";

const timelineData = [
  {
    year: "2019",
    title: "Foundation",
    description:
      "Started with a vision to revolutionize Midwest logistics. Founded by industry veterans who saw the need for a more innovative, technology-driven approach to transportation. Began operations with a single truck and a commitment to exceptional service.",
  },
  {
    year: "2020",
    title: "Sunny Freight Launch",
    description:
      "Established our trucking division to provide dedicated capacity solutions. Expanded our fleet to serve key Midwest lanes and built our initial customer base through a focus on reliability and personal service. Implemented our first digital tracking solutions.",
  },
  {
    year: "2021",
    title: "Technology Integration & Growth",
    description:
      "Partnered with freightdok to enhance our digital capabilities. Launched our automated booking platform, real-time tracking system, and digital documentation solutions. Expanded our carrier network to over 50 trusted partners and achieved 5,000+ successful deliveries.",
  },
  {
    year: "2023",
    title: "Network & Technology Evolution",
    description:
      "Reached milestone of 10,000+ loads delivered and 100+ active customers. Enhanced our freightdok integration with new features for both carriers and shippers. Expanded our trailer pool program and implemented advanced route optimization algorithms.",
  },
];

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

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      {/* Hero Section */}
      <AboutSectionContainer backgroundColor={theme.palette.primary.main}>
        <MainHeading
          style={{ color: theme.palette.secondary.main, fontSize: "45px" ,fontWeight:'bold'}}
        >
          Building the
          <br />
          Next Freight
          <br />
          Ecosystem
        </MainHeading>
        <SectionHeading
          style={{
            color: theme.palette.secondary.main,
            marginBottom: 20,
            fontWeight: 400,
          }}
        >
          Since 2019, we've been transforming Midwest logistics through
          innovation,
          <br /> technology, and an unwavering commitment to excellence.
        </SectionHeading>
      </AboutSectionContainer>

      {/* Mission & Vision Section */}
      <SectionContainer background={theme.palette.secondary.main}>
        <Grid item xs={12} md={9}>
          <MainHeading
            style={{
              color: theme.palette.darkGrey.main,
              fontSize: "30px",
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            Our Mission
          </MainHeading>
          <BodyText
            style={{
              color: theme.palette.text.main,
              fontSize: "18px",
              marginTop: 30,
              textAlign: "left",
            }}
          >
            To create a connected freight ecosystem driven by data, automation,
            and service. We aim to build a healthy and stable network for
            shippers and carriers in the Midwest, fostering growth and
            efficiency through technology and transparency.
          </BodyText>
        </Grid>

        <Grid item xs={12} md={9}>
          <MainHeading
            style={{
              color: theme.palette.darkGrey.main,
              fontSize: "30px",
              textAlign: "left",
              marginTop: 30,
              fontWeight: "bold",
            }}
          >
            Our Vision
          </MainHeading>
          <BodyText
            style={{
              color: theme.palette.text.main,
              fontSize: "18px",
              marginTop: 30,
              textAlign: "left",
            }}
          >
            To become the leading technology-enabled logistics provider in the
            Midwest, setting new standards for reliability, innovation, and
            customer service in the transportation industry.
          </BodyText>
        </Grid>
      </SectionContainer>

      {/* Core Values Section */}
      <SectionContainer background="light">
        <MainHeading
          style={{
            color: theme.palette.darkGrey.main,
            fontSize: "40px",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          Our Core Values
        </MainHeading>
        <Grid spacing={4} style={{ width: "75%" }}>
          <ServiceCard
            icon={<Shield />}
            title="Trust"
            description="Building lasting relationships through reliability and consistent performance"
            titleFontSize="24px"
            descriptionFontSize="16px"
          />
          <ServiceCard
            icon={<TrendingUp />}
            title="Transparency"
            description="Maintaining open communication and visibility in all our operations"
            titleFontSize="24px"
            descriptionFontSize="16px"
          />
          <ServiceCard
            icon={<Heart />}
            title="Fairness"
            description="Treating all partners with respect and ensuring mutual success"
            titleFontSize="24px"
            descriptionFontSize="16px"
          />
        </Grid>
      </SectionContainer>

      {/* Journey Timeline Section */}
      <SectionContainer>
        <MainHeading
          style={{
            color: theme.palette.darkGrey.main,
            fontSize: "40px",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          Our Journey
        </MainHeading>
        {timelineData.map((item, index) => (
          <Grid item xs={12} md={9} key={index}>
            <div
              style={{
                marginTop: 30,
                display: "flex",
                alignItems: "flex-start", // Align items to the start
                padding: "16px",
              }}
            >
              <Typography
                style={{
                  marginRight: "20px",
                  fontWeight: "bold",
                  color: theme.palette.primary.main,
                  fontSize: "24px",
                }}
              >
                {item.year}
              </Typography>
              <div>
                <Typography
                  style={{
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: "20px", 
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  style={{
                    textAlign: "left",
                    marginTop: 10,
                    fontSize: "16px", 
                  }}
                >
                  {item.description}
                </Typography>
              </div>
            </div>
          </Grid>
        ))}
      </SectionContainer>
      <Footer
        title="Want to Learn More?"
        description="Connect with our team to learn more about our services and how we can help optimize your supply chain."
        buttonOne="Contact Us"
        buttonTwo="Join Our Team"
      />
    </>
  );
};

export default About;
