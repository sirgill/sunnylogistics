import React from "react";
import styled from "@emotion/styled";
import { Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const StatContainer = styled.div`
  text-align: center;
  padding: 1.5rem;
  background-color: white;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const StatValue = styled(Typography)`
  font-weight: bold;
  font-size: 24px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const StatLabel = styled(Typography)`
  font-size: 1rem;
  font-weight: 500;

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
          color: theme.palette.primary.main,
          fontFamily: theme.typography.fontFamily,
          fontSize: isMobile ? "20px" : "24px",
        }}
      >
        {title}
      </StatValue>
      <StatLabel
        style={{
          color: theme.palette.text.primary,
          fontSize: isMobile ? "14px" : "16px",
        }}
      >
        {description}
      </StatLabel>
    </StatContainer>
  );
};

export default StatBox;
