import React from "react";
import styled from "@emotion/styled";
import { Card, CardContent, Typography } from "@material-ui/core";
import AdjustRoundedIcon from '@material-ui/icons/AdjustRounded'; // Renamed import for clarity
import { CardsHeading } from "../components/Heading";
import { colors } from "../assets/colors/colors";

const CardContainer = styled(Card)`
  margin: 16px;
  padding: 16px;
  width: 80%;
`;

const IconWrapper = styled.div`
  display: flex;
  color: #f5292f;
  margin-bottom: 16px;
  align-items: center;
  margin-right: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const VisionCard = () => {
  return (
    <CardContainer>
      <CardContent>
        <IconContainer>
          <IconWrapper>
            <AdjustRoundedIcon fontSize="large" style={{ color: '#f5292f' }} />
          </IconWrapper>
          <CardsHeading
            variant="h5"
            component="h2"
            gutterBottom
            style={{ marginLeft: "10px" }}
          >
            Vision
          </CardsHeading>
        </IconContainer>
        <Typography
          variant="body1"
          gutterBottom
          style={{ color: colors.paragraphText }}
        >
          Creating a connected freight ecosystem driven by data, automation, and
          service excellence, establishing new standards for reliability and
          efficiency in Midwest logistics.
        </Typography>
      </CardContent>
    </CardContainer>
  );
};

export default VisionCard;
