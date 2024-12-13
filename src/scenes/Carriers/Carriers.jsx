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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
      <CarrierSectionContainer backgroundColor="#141B2A">
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
          href="https://app.freightdok.io/federalSignup"
        >
          {dictionary.carrierhero.button}
        </Button>
      </CarrierSectionContainer>

      {/* Stats Section */}
     {/* Stats Section */}
<SectionContainer background={theme.palette.secondary.main}>
  <Grid item xs={12} md={9}>
    <MainHeading
      style={{
        color: theme.palette.darkGrey.main,
        fontSize: isMobile ? '30px' : "40px",
        textAlign: "left",
        fontWeight: "bold",
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
      }}
    >
      {dictionary.carrierstats.description}
    </BodyText>

    <StatsGrid>
      {dictionary.carrierstats.stats.map((stat, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#F9FAFB",
            padding: "2rem",
            borderRadius: "0.5rem"
          }}
        >
          <StatBox 
            title={stat.title} 
            description={stat.description}
          />
        </div>
      ))}
    </StatsGrid>
  </Grid>
</SectionContainer>

{/* Benefits Section */}
<SectionContainer background="#F9FAFB">
  <Grid item xs={12} md={9} style={{ width: isMobile ? "100%" : "80%" }}>
    <MainHeading
      style={{
        color: theme.palette.darkGrey.main,
        fontSize: isMobile ? '30px' : "40px",
        textAlign: "center",
        fontWeight: "800",
        marginBottom: "3rem"
      }}
    >
      {dictionary.benefits.heading}
    </MainHeading>
    <div style={{ 
      display: 'grid', 
      gap: '2rem',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem'
    }}>
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
    </div>
  </Grid>
</SectionContainer>

{/* Network Technology */}
<SectionContainer background={theme.palette.secondary.main}>
  <Grid item xs={12} md={9} style={{ width: isMobile ? "100%" : "80%" }}>
    <MainHeading
      style={{
        color: theme.palette.darkGrey.main,
        fontSize: isMobile ? '30px' : "40px",
        textAlign: "left",
        fontWeight: "800",
        marginBottom: "2.5rem"
      }}
    >
      {dictionary.network.heading}
    </MainHeading>
    <BodyText
      style={{
        color: theme.palette.darkGrey.main,
        fontSize: "18px",
        marginBottom: "2.5rem",
        textAlign: "left",
        lineHeight: "1.6"
      }}
    >
      {dictionary.network.description}
    </BodyText>
    <div style={{ display: 'grid', gap: '0.75rem', marginTop: "2rem" }}>
      {dictionary.network.requirements.map((requirement, index) => (
        <RequirementItem key={index}>
          <CheckCircle style={{ 
            color: '#EF4444', 
            width: 20, // Smaller icon
            height: 20 // Smaller icon


        }}/>
          <Typography style={{ 
            fontSize: "16px",
            color: "#374151" }}>{requirement}</Typography>
        </RequirementItem>
      ))}
    </div>
  </Grid>
</SectionContainer>

{/* Requirements Section */}
{/* Requirements Section */}
<SectionContainer background="#F9FAFB">
  <Grid item xs={12} md={9} style={{ width: isMobile ? "100%" : "80%" }}>
    <MainHeading
      style={{
        color: "#111827", // Darker color for more contrast
        fontSize: isMobile ? '30px' : "40px",
        textAlign: "center",
        fontWeight: "800",
        marginBottom: "3rem"
      }}
    >
      {dictionary.requirements.heading}
    </MainHeading>
    <div style={{ 
      display: 'grid', 
      gap: '2rem',
      width: '100%' 
    }}>
      {dictionary.requirements.cards.map((card, index) => (
        <ServiceCard
          key={index}
          title={card.title}
          features={card.features}
          useCheckCircle={true}
          titleFontSize="18px" // Adjusted size
          titleFontWeight="700"
          descriptionFontSize="16px"
          featureFontSize="16px"
          cardStyle={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: '0.5rem',
            padding: '2rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}
        />
      ))}
    </div>
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
