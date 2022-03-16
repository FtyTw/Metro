import React from 'react';
import styled from 'styled-components';

import { useAppTheme } from '../hooks';

export const TextHandler = ({
    children: text,
    size = 's',
    inverted = false,
    uppercase = false,
    containerStyles = '',
    light = false,
    ...attrs
}) => {
    const { fontColor, invertedColor, fonts } = useAppTheme();
    return (
        <StyledText
            containerStyles={containerStyles}
            size={fonts[size]}
            color={inverted ? invertedColor : fontColor}
            light={light}
            {...attrs}
        >
            {uppercase ? text.toUpperCase() : text}
        </StyledText>
    );
};

TextHandler.propTypes = {
    children: PropTypes.node,
    size: PropTypes.string,
    inverted: PropTypes.bool,
    uppercase: PropTypes.bool,
    containerStyles: PropTypes.string,
    light: PropTypes.bool,
};

const StyledText = styled.Text`
  font-weight: ${({ light }) => (light ? 'normal' : 'bold')};
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
  font-family: 'Helvetica Neue';
  ${({ containerStyles }) => containerStyles}
`;
