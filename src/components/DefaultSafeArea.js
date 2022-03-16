import React from 'react';
import styled from 'styled-components';

export const DefaultSafeArea = ({ extraStyles = {}, children }) => (
    <StyledSafeArea style={extraStyles}>{children}</StyledSafeArea>
);

DefaultSafeArea.propTypes = {
    extraStyles: PropTypes.object,
    children: PropTypes.element,
};

const StyledSafeArea = styled.SafeAreaView`
	flex: 1;
`;
