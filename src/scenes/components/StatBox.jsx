import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";

const StatBoxWrapper = styled.div`
  text-align: center;
`;

const StatBox = ({ value, label }) => {
  return (
    <StatBoxWrapper>
      <Typography variant="h5">{value}</Typography>
      <Typography variant="body2">{label}</Typography>
    </StatBoxWrapper>
  );
};

export default StatBox;
