import React from "react";
import styled from "@emotion/styled";
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
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

const PersonalAccountManagementCard = () => {
  return (
    <CardContainer>
      <CardContent>
        <IconWrapper>
          <PersonIcon fontSize="large" />
        </IconWrapper>
        <Typography variant="h5" component="h2" gutterBottom>
          Personal Account Management
        </Typography>
        <Typography variant="body1" gutterBottom>
          Experience the difference of having a dedicated account manager who understands your business inside and out. Our team members average 8+ years of logistics experience and are empowered to make decisions that benefit your supply chain.
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Direct phone line access" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Proactive communication" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Customized reporting" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Strategic planning sessions" />
          </ListItem>
        </List>
      </CardContent>
    </CardContainer>
  );
};

export default PersonalAccountManagementCard;
