import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";

const HeadingWrapper = styled(Typography)`
  margin-bottom: 16px;
`;

const Heading = ({ children }) => {
  return <HeadingWrapper variant="h4">{children}</HeadingWrapper>;
};

export default Heading;
