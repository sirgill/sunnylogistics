import React from "react";
import styled from "@emotion/styled";
import CarrierSectionContainer from "../components/CarrierPage/CarrierSectionContainer";
import SectionContainer from "../components/CarrierPage/SectionContainer";
import StatBox from "../components/LandingPage/StatBox";
import FeatureCard from "../components/CarrierPage/FeatureCard";
import ServiceCard from "../components/LandingPage/ServiceCard";
import Footer from "../Footer/Footer";
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { DollarSign, Users, CheckCircle, BarChart } from "lucide-react";
import { MainHeading, SectionHeading, BodyText } from "../heading";
import dictionary from "../dictionary";

const StatsGrid = styled(Grid)`
  margin-top: 2rem;
`;

const RequirementItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    color: red;
    margin-right: 1rem;
  }
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

const Carriers = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          {dictionary.carrierhero.heading}
        </SectionHeading>
        <MainHeading
          style={{
            color: theme.palette.secondary.main,
            fontSize: "45px",
            fontWeight: "bold",
          }}
        >
          {dictionary.carrierhero.mainHeading}
        </MainHeading>
        <BodyText
          style={{
            color: theme.palette.secondary.main,
            fontSize: "20px",
            marginTop: 30,
          }}
        >
          {dictionary.carrierhero.description}
        </BodyText>
        <Button
          variant="outlined"
          size="large"
          className={classes.outlinedButton}
        >
          {dictionary.carrierhero.button}
        </Button>
      </CarrierSectionContainer>

      {/* Stats Section */}
      <SectionContainer background={theme.palette.secondary.main}>
        <Grid item xs={12} md={9}>
          <MainHeading
            style={{
              color: theme.palette.darkGrey.main,
              fontSize: isMobile ? '30px':"40px",
              textAlign: "left",
            }}
          >
            {dictionary.carrierstats.heading}
          </MainHeading>
          <BodyText
            style={{
              color: theme.palette.text.main,
              fontSize: "18px",
              marginTop: 30,
              textAlign: "left",
              fontWeight: 400,
            }}
          >
            {dictionary.carrierstats.description}
          </BodyText>

          <StatsGrid spacing={2} style={{ marginTop: 30 }}>
            <Grid container item xs={12} spacing={2}>
              {dictionary.carrierstats.stats.slice(0, 2).map((stat, index) => (
                <Grid
                  key={index}
                  item
                  xs={6}
                  style={{ backgroundColor: "#F9FAFB" }}
                >
                  <StatBox title={stat.title} description={stat.description} />
                </Grid>
              ))}
            </Grid>
            <Grid container item xs={12} spacing={2}>
              {dictionary.carrierstats.stats.slice(2).map((stat, index) => (
                <Grid
                  key={index}
                  item
                  xs={6}
                  style={{ backgroundColor: "#F9FAFB" }}
                >
                  <StatBox title={stat.title} description={stat.description} />
                </Grid>
              ))}
            </Grid>
          </StatsGrid>
        </Grid>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer background="#F9FAFB">
        <Grid item xs={12} md={9} style={{ width: isMobile ? "100%" : "80%" }}>
          <MainHeading
            style={{
              color: theme.palette.darkGrey.main,
              fontSize: isMobile ? '30px':"40px",
              textAlign: "center",
            }}
          >
            {dictionary.benefits.heading}
          </MainHeading>
          <StatsGrid spacing={2} style={{ marginTop: 30 }}>
            {dictionary.benefits.features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={
                  feature.icon === "DollarSign" ? (
                    <DollarSign />
                  ) : feature.icon === "BarChart" ? (
                    <BarChart />
                  ) : (
                    <Users />
                  )
                }
                title={feature.title}
                description={feature.description}
              />
            ))}
          </StatsGrid>
        </Grid>
      </SectionContainer>

      {/* Network Technology */}
      <SectionContainer background={theme.palette.secondary.main}>
        <Grid item xs={12} md={9} style={{ width: isMobile ? "100%" : "80%" }}>
          <MainHeading
            style={{
              color: theme.palette.darkGrey.main,
              fontSize: isMobile ? '30px':"40px",
              textAlign: "left",
            }}
          >
            {dictionary.network.heading}
          </MainHeading>
          <BodyText
            style={{
              color: theme.palette.darkGrey.main,
              fontSize: "16px",
              marginTop: 30,
              textAlign: "left",
              fontWeight: 400,
            }}
          >
            {dictionary.network.description}
          </BodyText>
          <div style={{ marginTop: 30 }}>
            {dictionary.network.requirements.map((requirement, index) => (
              <RequirementItem key={index}>
                <CheckCircle />
                <Typography>{requirement}</Typography>
              </RequirementItem>
            ))}
          </div>
        </Grid>
      </SectionContainer>

      {/* Requirements Section */}
      <SectionContainer background="light">
        <Grid item xs={12} md={9} style={{ width: isMobile ? "100%" : "80%" }}>
          <MainHeading
            style={{
              color: theme.palette.darkGrey.main,
              fontSize: isMobile ? '30px':"40px",
              textAlign: "center",
            }}
          >
            {dictionary.requirements.heading}
          </MainHeading>
          {dictionary.requirements.cards.map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              features={card.features}
              useCheckCircle={true}
              titleFontSize="18px"
              descriptionFontSize="16px"
              featureFontSize="14px"
            />
          ))}
        </Grid>
      </SectionContainer>

      {/* CTA Section */}
      <Footer
        title={dictionary.carrierfooter.title}
        description={dictionary.carrierfooter.description}
        buttonOne={dictionary.carrierfooter.buttonOne}
        buttonTwo={dictionary.carrierfooter.buttonTwo}
      />
    </>
  );
};

export default Carriers;
