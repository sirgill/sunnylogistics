import React from "react";
import styled from "@emotion/styled";
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
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

const ProactiveServiceModelCard = () => {
  return (
    <CardContainer>
      <CardContent>
        <IconWrapper>
          <BuildIcon fontSize="large" />
        </IconWrapper>
        <Typography variant="h5" component="h2" gutterBottom>
          Proactive Service Model
        </Typography>
        <Typography variant="body1" gutterBottom>
          We don't wait for problems to occur. Our team actively monitors your shipments and market conditions to anticipate and prevent issues before they impact your supply chain.
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Capacity forecasting" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Market rate analysis" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Performance metrics" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Continuous improvement" />
          </ListItem>
        </List>
      </CardContent>
    </CardContainer>
  );
};

export default ProactiveServiceModelCard;
