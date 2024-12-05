import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const StatContainer = styled.div`
  text-align: center;
  padding: 1.5rem;
  background-color: white;
`;

const StatValue = styled(Typography)`
  margin-bottom: 0.5rem;
`;

const StatLabel = styled(Typography)`
  font-size: 1rem;
  font-weight: 500;
`;

const StatBox = ({ title, description }) => {
  const theme = useTheme();

  return (
    <StatContainer>
      <StatValue
        style={{
          color: theme.palette.primary.main,
          fontFamily: 'Inter, Arial, sans-serif',
          fontWeight: theme.typography.h4.fontWeight,
          fontSize:'30px'
        }}
      >
        {title}
      </StatValue>
      <StatLabel style={{ color: theme.palette.text.main }}>
        {description}
      </StatLabel>
    </StatContainer>
  );
};

export default StatBox;
