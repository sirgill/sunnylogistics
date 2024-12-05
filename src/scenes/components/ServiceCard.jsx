import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";
import { CheckCircle, ChevronRight } from "lucide-react";
import { useTheme } from "@material-ui/core/styles";
import CardHeading from "../heading/cardHeading";

const IconWrapper = styled.div`
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
    margin-right: 0.75rem;
    width: 16px;
    height: 16px;
  }
`;

const ServiceCardContainer = styled.div`
  background-color: #ffffff;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border: 1px solid #f0f0f0;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  }
  margin-top: 10px;
  width:100%
`;

const Title = styled.h3`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: #666666;
  margin-bottom: 8px;
`;

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  buttonText,
  buttonLink,
}) => {
  const theme = useTheme();

  return (
    <ServiceCardContainer>
      {icon && (
        <IconWrapper style={{ color: theme.palette.primary.main }}>
          {icon}
        </IconWrapper>
      )}
      <CardHeading style={{fontSize:'20px'}}>{title}</CardHeading>
      <Description>{description}</Description>
      {features && (
        <FeatureList>
          {features.map((feature, index) => (
            <FeatureItem key={index}>
              <ChevronRight
                size={16}
                color={theme.palette.primary.main}
                style={{ marginRight: 8 }}
              />
              <Typography variant="body2">{feature}</Typography>
            </FeatureItem>
          ))}
        </FeatureList>
      )}
    </ServiceCardContainer>
  );
};

export default ServiceCard;
