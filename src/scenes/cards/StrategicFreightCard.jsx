import React from "react";
import styled from "@emotion/styled";
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForwardIos";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

const CardContainer = styled(Card)`
  margin: 16px;
  padding: 16px;
`;

const IconWrapper = styled(ListItemIcon)`
  color: #F5292F;
`;

const StrategicFreightCard = () => {
  return (
    <CardContainer>
      <CardContent>
        <IconWrapper>
          <LocalShippingIcon fontSize="large" />
        </IconWrapper>
        <Typography variant="h5" component="h2" gutterBottom>
          Strategic Freight Solutions
        </Typography>
        <Typography variant="body1" gutterBottom>
          Leveraging our extensive carrier network and industry expertise to provide reliable, cost-effective shipping solutions.
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Nationwide carrier network" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Specialized equipment options" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Custom routing solutions" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Competitive spot and contract rates" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Dedicated capacity agreements" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Multi-modal shipping options" />
          </ListItem>
        </List>
      </CardContent>
    </CardContainer>
  );
};

export default StrategicFreightCard;
