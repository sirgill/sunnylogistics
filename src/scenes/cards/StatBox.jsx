import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@material-ui/core/styles';

const StatBoxContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 6px;
  border-radius: 8px;
  text-align: center;
`;

const Title = styled.h4`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const StatBox = ({ title, description }) => {
  const theme = useTheme();

  return (
    <StatBoxContainer theme={theme}>
      <Title theme={theme}>{title}</Title>
      <Description theme={theme}>{description}</Description>
    </StatBoxContainer>
  );
};

export default StatBox;
