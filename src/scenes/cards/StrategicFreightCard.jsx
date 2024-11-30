import React from "react";
import styled from "@emotion/styled";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForwardIos";
import HierarchyIcon from '@material-ui/icons/AccountTreeOutlined';
import { CardsHeading } from "../components/Heading";
import { colors } from "../assets/colors/colors";

const CardContainer = styled(Card)`
  margin: 16px;
  padding: 10px;
  width: 80%;
`;

const IconWrapper = styled(ListItemIcon)`
  color: #f5292f;
`;

const StyledListItem = styled(ListItem)`
  padding: 4px 0;
`;

const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 25px;
`;

const StrategicFreightCard = () => {
  const listItems = [
    "Nationwide carrier network",
    "Specialized equipment options",
    "Custom routing solutions",
    "Competitive spot and contract rates",
    "Dedicated capacity agreements",
    "Multi-modal shipping options"
  ];

  return (
    <CardContainer>
      <CardContent>
        <IconWrapper>
          <HierarchyIcon fontSize="large" style={{ color: colors.theme }} />
        </IconWrapper>
        <CardsHeading>Strategic Freight Solutions</CardsHeading>
        <Typography
          variant="body1"
          gutterBottom
          style={{ color: colors.paragraphText, fontSize: "16px" }}
        >
          Leveraging our extensive carrier network and industry expertise to provide reliable, cost-effective shipping solutions.
        </Typography>
        <List>
          {listItems.map((item, index) => (
            <StyledListItem key={index}>
              <StyledListItemIcon>
                <ArrowForwardIcon
                  style={{ color: colors.theme, fontSize: "14px" }}
                />
              </StyledListItemIcon>
              <ListItemText
                primary={item}
                style={{ color: colors.paragraphText, fontSize: "16px" }}
              />
            </StyledListItem>
          ))}
        </List>
      </CardContent>
    </CardContainer>
  );
};

export default StrategicFreightCard;
