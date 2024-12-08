import React from 'react';
import styled from '@emotion/styled';
import { Paper } from '@material-ui/core';

const AboutSectionContainerWrapper = styled(Paper)`
  margin-bottom: 16px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor || '#141B2A'} !important; 
  text-align: left;
  padding-left:16% 
`;

const AboutSectionContainer = ({ children, backgroundColor }) => {
  return <AboutSectionContainerWrapper backgroundColor={backgroundColor}>{children}</AboutSectionContainerWrapper>;
};

export default AboutSectionContainer;