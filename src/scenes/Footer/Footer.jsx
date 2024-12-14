import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Link } from "@material-ui/core";
import SectionContainer from "../components/CarrierPage/SectionContainer";
import styled from "@emotion/styled";
import { useMediaQuery } from "@material-ui/core";

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;  // Reduced padding

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;  // Reduced gap
`;

const FooterLink = styled(Link)`
  color: #FFFFFF;  // Lighter color for better contrast
  text-decoration: none;
  font-size: 0.875rem;  // Smaller font size
  margin-bottom: 0.25rem;
  font-family: Inter, sans-serif;
  
  &:hover {
    color: #FFFFFF;
    text-decoration: none;
  }
`;

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <SectionContainer background={theme.palette.primary.main}>
      <FooterContainer>
        {/* Links Section */}
        <FooterSection>
          <Typography 
            variant="h6" 
            style={{ 
              color: '#FFFFFF',
              fontWeight: 600,
              marginBottom: '0.5rem',
              fontSize: '1rem',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Quick Links
          </Typography>
          <FooterLink href="/"
          style={{ 
              color: '#FFFFFF',
              marginBottom: '0.5rem',
              fontSize: '1rem',
              fontFamily: 'Inter, sans-serif'
            }}

          >Home</FooterLink>
          <FooterLink href="/shippers"
          style={{ 
              color: '#FFFFFF',
              marginBottom: '0.5rem',
              fontSize: '1rem',
              fontFamily: 'Inter, sans-serif'
            }}
          >Ship with us</FooterLink>
          <FooterLink href="/carriers"
          style={{ 
              color: '#FFFFFF',
              marginBottom: '0.5rem',
              fontSize: '1rem',
              fontFamily: 'Inter, sans-serif'
            }}

          >Register as a Carrier</FooterLink>
          
        </FooterSection>

        {/* Company Info Section */}
        <FooterSection>
          <Typography 
            variant="h6" 
            style={{ 
              color: '#FFFFFF',
              fontWeight: 600,
              marginBottom: '0.5rem',
              fontSize: '1rem',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Our Office
          </Typography>
          <Typography 
            style={{ 
              color: '#FFFFFF',
              marginBottom: '0.5rem',
              fontSize: '1rem',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            11 MUNICIPAL DRIVE<br />
            SUITE 200<br />
            FISHERS, IN 46038
          </Typography>
        </FooterSection>

        {/* Legal Section */}
        <FooterSection>
          <Typography 
            variant="h6" 
            style={{ 
              color: '#FFFFFF',
              fontWeight: 600,
              marginBottom: '0.5rem',
              fontSize: '1rem',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Legal
          </Typography>
          <FooterLink href="/terms"
            style={{ 
              color: '#FFFFFF',
              marginBottom: '0.5rem',
              fontSize: '1rem',
              fontFamily: 'Inter, sans-serif'
            }}
          >Terms of Service </FooterLink>
          <FooterLink href="/privacy"
          style={{ 
              color: '#FFFFFF',
              marginBottom: '0.5rem',
              fontSize: '1rem',
              fontFamily: 'Inter, sans-serif'
            }}

          >Privacy Policy </FooterLink>
        </FooterSection>
      </FooterContainer>

      {/* Copyright Section */}
      <Typography 
        style={{ 
          color: '#FFFFFF',
          textAlign: 'center',
          padding: '1rem 0',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          fontSize: '0.875rem',
          fontFamily: 'Inter, sans-serif'
        }}
      >
        © 2024 Sunny Logistics. All rights reserved.
      </Typography>
    </SectionContainer>
  );
};

export default Footer;