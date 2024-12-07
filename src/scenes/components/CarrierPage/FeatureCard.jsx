import React from "react";
import styled from "@emotion/styled";
import { BodyText, MainHeading } from "../../heading";
import { useTheme } from "@material-ui/core/styles";

const Card = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
  margin-top: 30px; /* Correct camelCase syntax */
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureCard = ({ icon, title, description }) => {
  const theme = useTheme();

  return (
    <Card>
      {icon && (
        <div style={{ color: theme.palette.primary.main,marginBottom:10,fontWeight:'bold' }}>
          {icon}
        </div>
      )}
      
      <MainHeading
            style={{ color: theme.palette.darkGrey.main, fontSize: "20px" }}
          >
           {title}
          </MainHeading>
      <BodyText
        style={{
          color: theme.palette.text.main,
          fontSize: "16px",
          marginTop: 20,
          textAlign: "left",
        }}
      >
        {description}
      </BodyText>
    </Card>
  );
};

export default FeatureCard;
