import React from "react";
import styled from "@emotion/styled";
import { Card, CardContent, Typography } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

const CardContainer = styled(Card)`
  margin: 16px;
  padding: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  color: #F5292F;
  margin-bottom: 16px;
`;

const VisionCard = () => {
  return (
    <CardContainer>
      <CardContent>
        <IconWrapper>
          <VisibilityIcon fontSize="large" />
        </IconWrapper>
        <Typography variant="h5" component="h2" gutterBottom>
          Vision
        </Typography>
        <Typography variant="body1" gutterBottom>
          Creating a connected freight ecosystem driven by data, automation, and service excellence, establishing new standards for reliability and efficiency in Midwest logistics.
        </Typography>
      </CardContent>
    </CardContainer>
  );
};

export default VisionCard;
