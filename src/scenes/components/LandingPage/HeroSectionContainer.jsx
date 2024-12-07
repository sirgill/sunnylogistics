import React from 'react';
import styled from '@emotion/styled';
import { Paper } from '@material-ui/core';

const HeroSectionContainerWrapper = styled(Paper)`
  margin-bottom: 16px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor || '#141B2A'} !important; 
  text-Align :center
`;

const HeroSectionContainer = ({ children, backgroundColor }) => {
  return <HeroSectionContainerWrapper backgroundColor={backgroundColor}>{children}</HeroSectionContainerWrapper>;
};

export default HeroSectionContainer;
