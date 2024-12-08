import React from "react";
import styled from "@emotion/styled";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AboutSectionContainer from "../components/AboutPage/AboutSectionContainer";
import SectionContainer from "../components/LandingPage/SectionContainer";
import Footer from "../Footer/Footer";
import { MainHeading, SectionHeading, BodyText } from "../heading";
import ServiceCard from "../components/LandingPage/ServiceCard";
import { Shield, TrendingUp, Heart } from "lucide-react";
import dictionary from "../dictionary";

const useStyles = makeStyles((theme) => ({
  outlinedButton: {
    // Button styling
  },
}));

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { heroSection, missionVision, coreValues, timeline, footer } =
    dictionary;

  return (
    <>
      {/* Hero Section */}
      <AboutSectionContainer backgroundColor={theme.palette.primary.main}>
        <MainHeading
          style={{
            color: theme.palette.secondary.main,
            fontSize: "45px",
            fontWeight: "bold",
          }}
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
            {dictionary.missionVision.missionHeading}
          </MainHeading>
          <BodyText
            style={{
              color: theme.palette.text.main,
              fontSize: "18px",
              marginTop: 30,
              textAlign: "left",
            }}
          >
            {dictionary.missionVision.missionText}
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
            {dictionary.missionVision.visionHeading}
          </MainHeading>
          <BodyText
            style={{
              color: theme.palette.text.main,
              fontSize: "18px",
              marginTop: 30,
              textAlign: "left",
            }}
          >
            {dictionary.missionVision.visionText}
          </BodyText>
        </Grid>
      </SectionContainer>

      {/* Core Values Section */}
      <SectionContainer background="light">
        <MainHeading
          style={{
            color: theme.palette.darkGrey.main,
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          {coreValues.heading}
        </MainHeading>
        <Grid spacing={4} style={{ width: "75%" }}>
          {coreValues.values.map((value, index) => (
            <ServiceCard
              key={index}
              icon={
                index === 0 ? (
                  <Shield />
                ) : index === 1 ? (
                  <TrendingUp />
                ) : (
                  <Heart />
                )
              }
              title={value.title}
              description={value.description}
              titleFontSize="24px"
              descriptionFontSize="16px"
            />
          ))}
        </Grid>
      </SectionContainer>

      {/* Journey Timeline Section */}
      <SectionContainer>
        <MainHeading
          style={{
            color: theme.palette.darkGrey.main,
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          Our Journey
        </MainHeading>
        {timeline.map((item, index) => (
          <Grid item xs={12} md={9} key={index}>
            <div style={{ marginTop: 30, display: "flex", padding: "16px" }}>
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
                <Typography style={{ textAlign: "left", marginTop: 10 }}>
                  {item.description}
                </Typography>
              </div>
            </div>
          </Grid>
        ))}
      </SectionContainer>

      <Footer
        title={footer.title}
        description={footer.description}
        buttonOne={footer.buttonOne}
        buttonTwo={footer.buttonTwo}
      />
    </>
  );
};

export default About;
