import React from "react";
import styled from "@emotion/styled";
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import ArrowForwardIcon from "@material-ui/icons/ArrowForwardIos";

const CardContainer = styled(Card)`
  margin: 16px;
  padding: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  color: #F5292F;
  margin-bottom: 16px;
`;

const OperationsCenterCard = () => {
  return (
    <CardContainer>
      <CardContent>
        <IconWrapper>
          <PhoneInTalkIcon fontSize="large" />
        </IconWrapper>
        <Typography variant="h5" component="h2" gutterBottom>
          24/7 Operations Center
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our round-the-clock operations center in Indianapolis ensures you're never alone. With real-time tracking and immediate response capabilities, we handle everything from routine updates to emergency situations with professional efficiency.
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Live load tracking" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Immediate issue resolution" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Weather monitoring" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Route optimization" />
          </ListItem>
        </List>
      </CardContent>
    </CardContainer>
  );
};

export default OperationsCenterCard;
