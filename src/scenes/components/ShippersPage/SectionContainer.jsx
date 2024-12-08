import React from "react";
import styled from "@emotion/styled";
import { Paper } from "@material-ui/core";

const SectionContainerWrapper = styled(Paper)`
  margin-bottom: 16px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ background }) => background} !important;
  text-align: center;
  box-shadow: none;
  font-weight:bold
`;

const SectionContainer = ({ children, background }) => {
  return (
    <SectionContainerWrapper background={background}>
      {children}
    </SectionContainerWrapper>
  );
};

export default SectionContainer;
