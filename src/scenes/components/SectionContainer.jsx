import React from "react";
import styled from "@emotion/styled";
import { Paper } from "@material-ui/core";

const SectionContainerWrapper = styled(Paper)`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ background }) => background} !important; 
`;

const SectionContainer = ({ children, background }) => {
  return <SectionContainerWrapper background={background}>{children}</SectionContainerWrapper>;
};

export default SectionContainer;
