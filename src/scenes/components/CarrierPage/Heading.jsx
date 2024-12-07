import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";
const HeadingWrapper = styled(Typography)`
  margin-bottom: 16px;
  font-weight: bold;
`;
const HeadingWhite = styled(HeadingWrapper)`
  color: #ffffff;
`;
const HeadingBlack = styled(HeadingWrapper)`
  color: #000000;
  font-weight: bold;
`;
const CardHeading = styled(HeadingWrapper)`
  color: #000000;
`;
const Heading = ({ children }) => {
  return <HeadingWhite variant="h4">{children}</HeadingWhite>;
};
const Heading2 = ({ children }) => {
  return <HeadingBlack variant="h4">{children}</HeadingBlack>;
};
const CardsHeading = ({ children }) => {
  return <CardHeading variant="h6">{children}</CardHeading>;
};
export { Heading, Heading2, CardsHeading };
