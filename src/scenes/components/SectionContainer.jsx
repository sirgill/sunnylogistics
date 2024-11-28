import React from "react";
import styled from "@emotion/styled";
import { Paper } from "@material-ui/core";

const SectionContainerWrapper = styled(Paper)`
  margin-bottom: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionContainer = ({ children }) => {
  return <SectionContainerWrapper>{children}</SectionContainerWrapper>;
};

export default SectionContainer;
