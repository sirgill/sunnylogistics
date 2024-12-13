import React from "react";
import styled from "@emotion/styled";
import { Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const StatContainer = styled.div`
  text-align: center;
  padding: 1.5rem;
  // Remove background-color: white

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const StatValue = styled(Typography)`
  font-weight: bold;
  font-size: 2rem; // Increased font size to match design
  margin-bottom: 0.5rem; // Add spacing between value and label

  @media (max-width: 600px) {
    font-size: 1.75rem;
  }
`;

const StatLabel = styled(Typography)`
  font-size: 1rem;
  font-weight: 500;
  color: #4B5563; // Match the gray color from design

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;

const StatBox = ({ title, description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:700px)");

  return (
    <StatContainer>
      <StatValue
        style={{
          color: '#EF4444', // Red color from design
          fontFamily: theme.typography.fontFamily,
          fontSize: isMobile ? "1.75rem" : "2rem",
          fontWeight: '700' // Bolder weight to match design
        }}
      >
        {title}
      </StatValue>
      <StatLabel
        style={{
          color: '#4B5563', // Gray color from design
          fontSize: isMobile ? "14px" : "16px",
        }}
      >
        {description}
      </StatLabel>
    </StatContainer>
  );
};

export default StatBox;