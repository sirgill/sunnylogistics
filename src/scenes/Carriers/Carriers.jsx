import React from "react";
import styled from "@emotion/styled";
import CarrierSectionContainer from "../components/CarrierPage/CarrierSectionContainer";
import SectionContainer from "../components/CarrierPage/SectionContainer";
import StatBox from "../components/LandingPage/StatBox";
import ServiceCard from "../components/LandingPage/ServiceCard";
import FeatureCard from "../components/CarrierPage/FeatureCard";
import { Grid, Typography, Button } from "@material-ui/core";
import { DollarSign, Users, CheckCircle, BarChart } from "lucide-react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { MainHeading, SectionHeading, BodyText } from "../heading";
import Footer from "../Footer/Footer";

const StatsGrid = styled(Grid)`
  margin-top: 2rem;
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

const RequirementItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    color: red;
    margin-right: 1rem;
  }
`;

const Carriers = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      {/* Hero Section */}
      <CarrierSectionContainer backgroundColor={theme.palette.primary.main}>
        <SectionHeading
          style={{
            color: theme.palette.secondary.main,
            marginBottom: 20,
            fontWeight: 400,
          }}
        >
          Carriers
        </SectionHeading>
        <MainHeading
          style={{ color: theme.palette.secondary.main, fontSize: "45px" }}
        >
          Driven <br /> for you.
        </MainHeading>
        <BodyText
          style={{
            color: theme.palette.secondary.main,
            fontSize: "20px",
            marginTop: 30,
          }}
        >
          Join our growing network of successful carriers. We <br /> provide
          consistent freight opportunities and the <br /> support you need to
          grow your business.
        </BodyText>
        <Button
          variant="outlined"
          size="large"
          className={classes.outlinedButton}
        >
          Sign up as a carrier
        </Button>
      </CarrierSectionContainer>

      {/* Stats Section */}
      <SectionContainer background={theme.palette.secondary.main}>
        <Grid item xs={12} md={9}>
          <MainHeading
            style={{
              color: theme.palette.darkGrey.main,
              fontSize: "40px",
              textAlign: "left",
            }}
          >
            Let Sunny Logistics work for you.
          </MainHeading>
          <BodyText
            style={{
              color: theme.palette.text.main,
              fontSize: "18px",
              marginTop: 30,
              textAlign: "left",
            }}
          >
            Founded in 2019, we built our company on the principle of treating
            carriers with fairness and transparency. Our extensive customer base
            in the Midwest provides consistent freight opportunities year-round.
          </BodyText>

          <StatsGrid spacing={2} style={{ marginTop: 30 }}>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={6} style={{ backgroundColor: "#F9FAFB" }}>
                <StatBox title="10,000+" description="Loads Delivered" />
              </Grid>
              <Grid item xs={6} style={{ backgroundColor: "#F9FAFB" }}>
                <StatBox title="1:1" description="Single Point of Contact" />
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={6} style={{ backgroundColor: "#F9FAFB" }}>
                <StatBox title="100+" description="Active Shippers" />
              </Grid>
              <Grid item xs={6} style={{ backgroundColor: "#F9FAFB" }}>
                <StatBox title="24/7" description="Support" />
              </Grid>
            </Grid>
          </StatsGrid>
        </Grid>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer background="#F9FAFB">
        <Grid item xs={12} md={9} style={{ width: "80%" }}>
          <MainHeading
            style={{
              color: theme.palette.darkGrey.main,
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            Why Partner With Us
          </MainHeading>
          <StatsGrid spacing={2} style={{ marginTop: 30 }}>
            <Grid item xs={12} spacing={2}>
              <FeatureCard
                icon={<DollarSign />}
                title="Competitive Rates"
                description="Earn more with our competitive rates and quick pay options available within 24 hours"
              />
            </Grid>
            <Grid item xs={12} spacing={2}>
              <FeatureCard
                icon={<BarChart />}
                title="Consistent Freight"
                description="Access steady, year-round opportunities from our established Midwest customer base"
              />
            </Grid>
            <Grid item xs={12} spacing={2}>
              <FeatureCard
                icon={<Users />}
                title="Dedicated Support"
                description="Work with a dedicated team that understands your business needs"
              />
            </Grid>
          </StatsGrid>
        </Grid>
      </SectionContainer>

      {/* Network Technology */}
      <SectionContainer background={theme.palette.secondary.main}>
        <Grid item xs={12} md={9} style={{ width: "80%" }}>
          <Grid item xs={12} md={9}>
            <MainHeading
              style={{
                color: theme.palette.darkGrey.main,
                fontSize: "40px",
                textAlign: "left",
              }}
            >
              Carrier Network
            </MainHeading>
            <BodyText
              style={{
                color: theme.palette.darkGrey.main,
                fontSize: "16px",
                marginTop: 30,
                textAlign: "left",
              }}
            >
              Our carrier network is powered by freightdok capacity network,
              providing you with cutting-edge technology and seamless
              operations.
            </BodyText>
            <div style={{ marginTop: 30 }}>
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
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <ServiceCard
                title="Digital Booking"
                description="Book loads instantly through our platform"
                titleFontSize="16px"
                descriptionFontSize="14px"
              />
            </Grid>
            <Grid item xs={6}>
              <ServiceCard
                title="Fast Pay"
                description="Get paid quickly with various payment terms"
                titleFontSize="16px"
                descriptionFontSize="14px"
              />
            </Grid>
            <Grid item xs={6}>
              <ServiceCard
                title="Real-Time Updates"
                description="Stay informed with automated notifications"
                titleFontSize="16px"
                descriptionFontSize="14px"
              />
            </Grid>
            <Grid item xs={6}>
              <ServiceCard
                title="24/7 Support"
                description="Access support whenever you need it"
                titleFontSize="16px"
                descriptionFontSize="14px"
              />
            </Grid>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Requirements Section */}
      <SectionContainer background="light">
        <Grid item xs={12} md={9} style={{ width: "80%" }}>
          <MainHeading
            style={{
              color: theme.palette.darkGrey.main,
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            Partner Requirements
          </MainHeading>
          <ServiceCard
            title="Insurance Coverage"
            features={["$100,000 Cargo Insurance", "$1,000,000 Auto Liability"]}
            useCheckCircle={true}
            titleFontSize="18px"
            descriptionFontSize="16px"
            featureFontSize="14px"
          />
          <ServiceCard
            title="Compliance"
            features={[
              "Valid Operating Authority",
              "Satisfactory Safety Rating",
              "ELD Compliance",
            ]}
            useCheckCircle={true}
            titleFontSize="18px"
            descriptionFontSize="16px"
            featureFontSize="14px"
          />
          <ServiceCard
            title="Documentation"
            features={["W-9 Form", "Carrier Agreement", "Direct Deposit Info"]}
            useCheckCircle={true}
            titleFontSize="18px"
            descriptionFontSize="16px"
            featureFontSize="14px"
          />
        </Grid>
      </SectionContainer>

      {/* CTA Section */}
      <Footer
        title="Ready to grow with us?"
        description="Join our carrier network today and access consistent, profitable
          freight opportunities across the Midwest."
        buttonOne="Apply Now"
        buttonTwo="Contact Us"
      />
    </>
  );
};

export default Carriers;
