import React from 'react';
import styled from 'styled-components';
import { ActivityIndicator } from 'react-native';

export const Loading = () => (
    <StyledView>
        <ActivityIndicator size="large" />
    </StyledView>
);

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
