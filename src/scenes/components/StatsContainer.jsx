import React from "react";
import styled from "@emotion/styled";

const StatsContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 15px;
  width: 40%; 
  box-sizing: border-box;
`;

const StatsContainer = ({ children }) => {
  return <StatsContainerWrapper>{children}</StatsContainerWrapper>;
};

export default StatsContainer;
