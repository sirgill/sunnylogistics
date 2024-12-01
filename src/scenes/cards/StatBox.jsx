import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";

const StatContainer = styled.div`
  text-align: center;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const StatValue = styled(Typography)`
  color: ${props => props.theme.palette.primary.main};
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled(Typography)`
  color: ${props => props.theme.palette.text.secondary};
  font-size: 1rem;
  font-weight: 500;
`;

const StatBox = ({ title, description }) => {
  return (
    <StatContainer>
      <StatValue variant="h3">
        {title}
      </StatValue>
      <StatLabel variant="body1">
        {description}
      </StatLabel>
    </StatContainer>
  );
};

export default StatBox;