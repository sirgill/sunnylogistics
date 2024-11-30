import React from "react";
import styled from "@emotion/styled";
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
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

const OperationsCenterCard = () => {
  const listItems = [
    "Live load tracking",
    "Immediate issue resolution",
    "Weather monitoring",
    "Route optimization"
  ];

  return (
    <CardContainer>
      <CardContent>
        <IconWrapper>
          <NotificationsNoneOutlinedIcon fontSize="large" style={{ color: colors.theme }} />
        </IconWrapper>
        <CardsHeading>24/7 Operations Center</CardsHeading>
        <Typography
          variant="body1"
          gutterBottom
          style={{ color: colors.paragraphText, fontSize: "16px" }}
        >
          Our round-the-clock operations center in Indianapolis ensures you're never alone. With real-time tracking and immediate response capabilities, we handle everything from routine updates to emergency situations with professional efficiency.
        </Typography>
        <List>
          {listItems.map((item, index) => (
            <StyledListItem key={index}>
              <StyledListItemIcon>
                <StyledArrowForwardIcon />
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

export default OperationsCenterCard;
