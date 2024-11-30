import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";
import { colors } from "../assets/colors/colors";

const StatBoxWrapper = styled.div`
  text-align: center;
`;

const ValueTypography = styled(Typography)`
  color: ${colors.theme};
  font-weight: bold;
`;

const LabelTypography = styled(Typography)`
  color: ${colors.paragraphText};
`;

const StatBox = ({ value, label }) => {
  return (
    <StatBoxWrapper>
      <ValueTypography variant="h5">{value}</ValueTypography>
      <LabelTypography variant="body2">{label}</LabelTypography>
    </StatBoxWrapper>
  );
};

export default StatBox;
