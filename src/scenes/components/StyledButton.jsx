import React from "react";
import styled from "@emotion/styled";
import { Button } from "@material-ui/core";

const ButtonWrapper = styled(Button)`
  margin: 8px;
  padding: 10px;
  text-transform: none;
  padding: 15px;
  letter-spacing: 1px;
  border-radius: 5px;
  box-shadow: none;
`;

const StyledButton = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default StyledButton;
