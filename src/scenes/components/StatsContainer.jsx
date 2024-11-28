import React from "react";
import styled from "@emotion/styled";

const StatsContainerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
`;

const StatsContainer = ({ children }) => {
  return <StatsContainerWrapper>{children}</StatsContainerWrapper>;
};

export default StatsContainer;
