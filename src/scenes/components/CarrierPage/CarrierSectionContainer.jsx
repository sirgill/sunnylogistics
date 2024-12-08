import React from 'react';
import styled from '@emotion/styled';
import { Paper } from '@material-ui/core';

const CarrierSectionContainerWrapper = styled(Paper)`
  margin-bottom: 16px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor || '#141B2A'} !important; 
  text-align: left;
  padding-left:16%;
  
   @media (max-width: 600px) { 
    padding-left: 10%;
  }
`;

const CarrierSectionContainer = ({ children, backgroundColor }) => {
  return <CarrierSectionContainerWrapper backgroundColor={backgroundColor}>{children}</CarrierSectionContainerWrapper>;
};

export default CarrierSectionContainer;
