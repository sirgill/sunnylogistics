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
import LocalShippingIcon from "@material-ui/icons/LocalShippingOutlined";
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

const AssetBasedCard = () => {
  const listItems = [
    "Advanced GPS tracking and telematics",
    "Automated dispatch and routing optimization",
    "Digital BOL and POD documentation",
    "Real-time temperature monitoring",
    "Predictive maintenance scheduling",
    "Smart capacity utilization",
  ];

  return (
    <CardContainer>
      <CardContent>
        <IconWrapper>
          <LocalShippingIcon fontSize="large" style={{ color: colors.theme }} />
        </IconWrapper>
        <CardsHeading>Asset-Based Fleet</CardsHeading>
        <Typography
          variant="body1"
          gutterBottom
          style={{ color: colors.paragraphText, fontSize: "16px" }}
        >
          Operating 40+ tractors and 50+ trailers across the Midwest region,
          powered by freightdok technology for real-time visibility and
          automated dispatch.
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

export default AssetBasedCard;
