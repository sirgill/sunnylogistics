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

const AssetBasedCard = () => {
  return (
    <CardContainer>
      <CardContent>
        <IconWrapper>
          <LocalShippingIcon fontSize="large" />
        </IconWrapper>
        <Typography variant="h5" component="h2" gutterBottom>
          Asset-Based Fleet
        </Typography>
        <Typography variant="body1" gutterBottom>
          Operating 40+ tractors and 50+ trailers across the Midwest region, powered by freightdok technology for real-time visibility and automated dispatch.
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Advanced GPS tracking and telematics" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Automated dispatch and routing optimization" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Digital BOL and POD documentation" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Real-time temperature monitoring" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Predictive maintenance scheduling" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Smart capacity utilization" />
          </ListItem>
        </List>
      </CardContent>
    </CardContainer>
  );
};

export default AssetBasedCard;
