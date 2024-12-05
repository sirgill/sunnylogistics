import React from 'react';
import styled from '@emotion/styled';
import { ChevronRight } from 'lucide-react';

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

const ServiceCard = ({ icon, title, description, features, buttonText, buttonLink }) => (
  <ServiceCardContainer>
    <div>{icon}</div>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>
          <ChevronRight size={16} color="#F5292F" style={{ marginRight: 8 }} />
          {feature}
        </li>
      ))}
    </ul>
    <a href={buttonLink}>{buttonText}</a>
  </ServiceCardContainer>
);

export default ServiceCard;
