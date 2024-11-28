import React from "react";
import styled from "@emotion/styled";
import { Card, CardContent, Typography } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const CardContainer = styled(Card)`
  margin: 16px;
  padding: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  color: #F5292F;
  margin-bottom: 16px;
`;

const ValuesCard = () => {
  return (
    <CardContainer>
      <CardContent>
        <IconWrapper>
          <ThumbUpIcon fontSize="large" />
        </IconWrapper>
        <Typography variant="h5" component="h2" gutterBottom>
          Values
        </Typography>
        <Typography variant="body1" gutterBottom>
          Built on the foundations of Trust, Transparency, and Fairness, we maintain the highest standards of integrity in every interaction with our customers, carriers, and team members.
        </Typography>
      </CardContent>
    </CardContainer>
  );
};

export default ValuesCard;
