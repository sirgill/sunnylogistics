import React from "react";
import styled from "@emotion/styled";

const CardContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 16px;
  width: 70%;
`;
const StoryContainerWrapper = styled.div`
  margin: 16px;
  padding: 10px;
  width: 80%;
`;
const CardContainer = ({ children }) => {
  return <CardContainerWrapper>{children}</CardContainerWrapper>;
};
const StoryContainer = ({ children }) => {
  return <StoryContainerWrapper>{children}</StoryContainerWrapper>;
};
export { CardContainer, StoryContainer };
