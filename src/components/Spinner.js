import React, { useRef, useEffect } from 'react';
import { ActivityIndicator, Animated } from 'react-native';
import styled from 'styled-components';

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: transparent;
  z-index: ${({ zIndex }) => zIndex};
  position: absolute;
`;

const AnimatedWrapper = Animated.createAnimatedComponent(Wrapper);

export const Spinner = ({ loaded = null, zIndex = 1 }) => {
    useEffect(() => {
        if (typeof loaded === 'boolean') {
            toggleAnimation(!+loaded);
        }
    }, [loaded]);

    const animatedOpacity = useRef(new Animated.Value(1)).current;

    const toggleAnimation = (toValue) =>
        Animated.timing(animatedOpacity, { toValue, useNativeDriver: false }).start();

    return (
        <AnimatedWrapper zIndex={zIndex} style={{ opacity: animatedOpacity }}>
            <ActivityIndicator />
        </AnimatedWrapper>
    );
};

Spinner.propTypes = {
    loaded: PropTypes.bool,
    zIndex: PropTypes.number,
};
