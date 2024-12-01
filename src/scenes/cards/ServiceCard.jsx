import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";
import { CheckCircle } from "lucide-react";

const Card = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  color: ${props => props.theme.palette.primary.main};
  margin-bottom: 1.5rem;
  
  svg {
    width: 48px;
    height: 48px;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  
  svg {
    color: ${props => props.theme.palette.primary.main};
    margin-right: 0.75rem;
    width: 16px;
    height: 16px;
  }
`;

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <Card>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {description}
      </Typography>
      {features && (
        <FeatureList>
          {features.map((feature, index) => (
            <FeatureItem key={index}>
              <CheckCircle />
              <Typography variant="body2">{feature}</Typography>
            </FeatureItem>
          ))}
        </FeatureList>
      )}
    </Card>
  );
};

export default ServiceCard;