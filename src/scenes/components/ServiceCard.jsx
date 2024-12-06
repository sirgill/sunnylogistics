import React from "react";
import styled from "@emotion/styled";
import { ChevronRight } from "lucide-react";
import { useTheme } from "@material-ui/core/styles";
import CardHeading from "../heading/cardHeading";
import { BodyText } from "../heading";

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
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border: 1px solid #f0f0f0;
  transition: box-shadow 0.2s;
  margin-top: 10px;

  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: flex-start; /* Align items to the left */

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ServiceCard = ({ icon, title, description, features }) => {
  const theme = useTheme();

  return (
    <ServiceCardContainer>
      {icon && (
        <IconWrapper style={{ color: theme.palette.primary.main }}>
          {icon}
        </IconWrapper>
      )}
      <CardHeading style={{ fontSize: "24px", textAlign: "left" }}>{title}</CardHeading>
      <BodyText style={{ color: theme.palette.text.main, fontSize: "16px", marginTop: 20, textAlign: "left" }}>
        {description}
      </BodyText>
      {features && (
        <FeatureList>
          {features.map((feature, index) => (
            <FeatureItem key={index}>
              <ChevronRight
                size={16}
                color={theme.palette.primary.main}
                style={{ marginRight: 8 }}
              />
              <BodyText
                style={{
                  color: theme.palette.text.main,
                  fontSize: "16px",
                  marginTop: 0,
                }}
              >
                {feature}
              </BodyText>
            </FeatureItem>
          ))}
        </FeatureList>
      )}
    </ServiceCardContainer>
  );
};

export default ServiceCard;
