import React from "react";
import styled from "@emotion/styled";
import { Button } from "@material-ui/core";

const ButtonWrapper = styled(Button)`
  margin: 8px;
`;

const StyledButton = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default StyledButton;
