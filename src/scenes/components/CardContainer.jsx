import React from "react";
import styled from "@emotion/styled";

const CardContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 16px;
`;

const CardContainer = ({ children }) => {
  return <CardContainerWrapper>{children}</CardContainerWrapper>;
};

export default CardContainer;
