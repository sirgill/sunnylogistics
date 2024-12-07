import React from "react";
import styled from "@emotion/styled";
import { Card, CardContent, Typography } from "@material-ui/core";
import ShieldOutlinedIcon from "@material-ui/icons/Security";
import { CardsHeading } from "../components/CarrierPage/Heading";
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

const ValuesCard = () => {
  return (
    <CardContainer>
      <CardContent>
        <IconContainer>
          <IconWrapper>
            <ShieldOutlinedIcon fontSize="large" style={{ color: '#f5292f' }} />
          </IconWrapper>
          <CardsHeading
            variant="h5"
            component="h2"
            gutterBottom
            style={{ marginLeft: "10px" }}
          >
            Values
          </CardsHeading>
        </IconContainer>
        <Typography
          variant="body1"
          gutterBottom
          style={{ color: colors.paragraphText }}
        >
          Built on the foundations of Trust, Transparency, and Fairness, we maintain the highest standards of integrity in every interaction with our customers, carriers, and team members.
        </Typography>
      </CardContent>
    </CardContainer>
  );
};

export default ValuesCard;
