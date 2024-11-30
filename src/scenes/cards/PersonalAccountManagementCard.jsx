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
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
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

const PersonalAccountManagementCard = () => {
  const listItems = [
    "Direct phone line access",
    "Proactive communication",
    "Customized reporting",
    "Strategic planning sessions",
  ];

  return (
    <CardContainer>
      <CardContent>
        <IconWrapper>
          <PeopleAltOutlinedIcon fontSize="large" style={{ color: colors.theme }} />
        </IconWrapper>
        <CardsHeading>Personal Account Management</CardsHeading>
        <Typography
          variant="body1"
          gutterBottom
          style={{ color: colors.paragraphText, fontSize: "16px" }}
        >
          Experience the difference of having a dedicated account manager who understands your business inside and out. Our team members average 8+ years of logistics experience and are empowered to make decisions that benefit your supply chain.
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

export default PersonalAccountManagementCard;
