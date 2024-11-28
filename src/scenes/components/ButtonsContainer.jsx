import React from "react";
import styled from "@emotion/styled";

const ButtonsContainerWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;

const ButtonsContainer = ({ children }) => {
  return <ButtonsContainerWrapper>{children}</ButtonsContainerWrapper>;
};

export default ButtonsContainer;
