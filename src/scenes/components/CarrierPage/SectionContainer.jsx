import React from "react";
import styled from "@emotion/styled";
import { Paper } from "@material-ui/core";

const SectionContainerWrapper = styled(Paper)`
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ background }) => background} !important;
  text-align: center;
  box-shadow: none;
  border-radius: 0;
  margin: 0;
  position: relative;
  
  &&& {
    box-shadow: none;
  }
`;

const SectionContainer = ({ children, background }) => {
  return (
    <SectionContainerWrapper 
      background={background}
      elevation={0}
    >
      {children}
    </SectionContainerWrapper>
  );
};

export default SectionContainer;