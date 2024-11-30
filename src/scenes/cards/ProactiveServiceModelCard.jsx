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
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import ArrowForwardIcon from "@material-ui/icons/ArrowForwardIos";
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

const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  color: ${colors.theme};
  font-size: 14px;
`;

const ProactiveServiceModelCard = () => {
  const listItems = [
    "Capacity forecasting",
    "Market rate analysis",
    "Performance metrics",
    "Continuous improvement",
  ];

  return (
    <CardContainer>
      <CardContent>
        <IconWrapper>
          <WatchLaterOutlinedIcon
            fontSize="large"
            style={{ color: colors.theme }}
          />
        </IconWrapper>
        <CardsHeading>Proactive Service Model</CardsHeading>
        <Typography
          variant="body1"
          gutterBottom
          style={{ color: colors.paragraphText, fontSize: "16px" }}
        >
          We don't wait for problems to occur. Our team actively monitors your
          shipments and market conditions to anticipate and prevent issues
          before they impact your supply chain.
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

export default ProactiveServiceModelCard;
