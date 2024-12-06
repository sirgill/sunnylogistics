import React from "react";
import styled from "@emotion/styled";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import HeroSectionContainer from "../components/HeroSectionContainer";
import SectionContainer from "../components/SectionContainer";
import StatBox from "../components/StatBox";
import ServiceCard from "../components/ServiceCard";
import { Truck, Network } from "lucide-react";
import { MainHeading, SectionHeading, BodyText } from "../heading/index";
import { ChevronRight } from "lucide-react";

const HeroActionButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const useStyles = makeStyles((theme) => ({
  Button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    textTransform: "none",
    padding: 12,
    borderRadius: 8,
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.light,
    },
    fontWeight: 400,
    width: 150,
  },
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
    fontWeight: 400,
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      {/* Hero Section */}
      <HeroSectionContainer backgroundColor="#141B2A">
        <MainHeading style={{ color: "#FFFFFF", fontSize: "40px" }}>
          Hybrid Logistics Solutions
        </MainHeading>
        <SectionHeading style={{ color: "#D1D5DB" }}>
          Asset-Based Carrier & Tech-Enabled Freight Brokerage serving the
          Midwest since 2019
        </SectionHeading>
        <HeroActionButtons>
          <Button
            variant="contained"
            className={classes.Button}
            size="large"
            endIcon={<ChevronRight />}
          >
            Ship Now
          </Button>
          <Button
            variant="outlined"
            className={classes.outlinedButton}
            size="large"
          >
            Join Our Network
          </Button>
        </HeroActionButtons>
      </HeroSectionContainer>

      {/* About Section */}
      <SectionContainer background={theme.palette.secondary.main}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ textAlign: "center", margin: "0 auto" }}
        >
          <MainHeading
            style={{ color: theme.palette.darkGrey.main, fontSize: "30px" }}
          >
            Complete Logistics Solutions
          </MainHeading>
          <BodyText
            style={{ color: theme.palette.text.main, fontSize: "20px" }}
          >
            Since 2019, we've successfully moved thousands of loads for our
            valued customers, maintaining a 98.5% on-time delivery rate. Our
            commitment to excellence has earned us long-term partnerships with
            leading manufacturers and distributors across the Midwest.
          </BodyText>
        </Grid>
        <div
          style={{ display: "flex", justifyContent: "center", gap: "2rem",marginTop:30 }}
        >
          <StatBox title="10,000+" description="Loads Delivered" />
          <StatBox title="1:1" description="Single Point of Contact" />
          <StatBox title="100+" description="Active Shippers" />
          <StatBox title="24/7" description="Support" />
        </div>
      </SectionContainer>

      {/* Services Section */}
      <SectionContainer background="#fff">
        <MainHeading style={{ color: theme.palette.darkGrey.main }}>
          Our Services
        </MainHeading>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item xs={12} md={8} style={{ width: "100%" }}>
            <ServiceCard
              icon={<Truck />}
              title="For Shippers"
              description="Service, responsiveness and consistent results"
              features={[
                "Dedicated capacity",
                "Real-time tracking",
                "Analytics dashboard",
                "24/7 support",
              ]}
              buttonText="Learn More"
              buttonLink="/shippers"
            />
          </Grid>
          <Grid item xs={12} md={8} style={{ width: "100%" }}>
            <ServiceCard
              icon={<Network />}
              title="For Carriers"
              description="The support you need to be successful"
              features={[
                "Consistent freight",
                "Quick pay options",
                "Digital load booking",
                "Dedicated support",
              ]}
              buttonText="Learn More"
              buttonLink="/carriers"
            />
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Technology Platform */}
      <SectionContainer>
        <MainHeading style={{ color: theme.palette.darkGrey.main }}>
          Carrier Network
        </MainHeading>
        <Typography variant="h6" align="center" gutterBottom>
          Our carrier network is powered by freightdok capacity network,
          providing cutting-edge technology and seamless operations
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          style={{ marginTop: "2rem" }}
        >
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <StatBox
                  title="Digital Booking"
                  description="Instant load booking"
                />
              </Grid>
              <Grid item xs={6}>
                <StatBox
                  title="Real-Time Updates"
                  description="Automated notifications"
                />
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
      <SectionContainer
        style={{ padding: "5%" }}
        background={theme.palette.primary.main}
      >
        <MainHeading style={{ color: "#FFFFFF", fontSize: "40px" }}>
          Ready to Streamline. Connect. Deliver?
        </MainHeading>
        <BodyText
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#FFFFFF",
            fontSize: "20px",
          }}
        >
          Experience the power of hybrid logistics solutions
        </BodyText>
        <Grid
          container
          justifyContent="center"
          spacing={2}
          style={{ marginTop: "2rem" }}
        >
          {[
            { text: "Request a Quote", variant: "contained", color: "#FFFFFF" },
            { text: "Contact Sales", variant: "outlined", color: "#FFFFFF" },
          ].map((cta, index) => (
            <Grid item key={index}>
              <Button
                variant={cta.variant}
                style={{
                  backgroundColor:
                    cta.variant === "contained" ? "#FFFFFF" : "transparent",
                  color:
                    cta.variant === "contained"
                      ? theme.palette.primary.main
                      : "#FFFFFF",
                  borderColor: "#FFFFFF",
                  textTransform: "none",
                }}
                size="large"
              >
                {cta.text}
              </Button>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </>
  );
};

export default LandingPage;
