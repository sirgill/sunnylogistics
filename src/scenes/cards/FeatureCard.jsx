import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";

const Card = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  color: ${props => props.theme.palette.primary.main};
  margin-bottom: 1rem;
`;

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </Card>
  );
};

export default FeatureCard;