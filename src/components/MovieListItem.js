import React from 'react';
import styled from 'styled-components';

import { useAppTheme } from '../hooks';
import { ImageBackgroundComponent, TextHandler } from '../components';

export const MovieListItem = ({
    onPress = () => console.log('press to movie item'),
    title = 'Spider man: Long way to disaster of franchise',
    subtitle = '2022',
    poster,
    backdrop,
}) => {
    const {
        colors: { card },
        shadows: { main },
        opacityBackground,
    } = useAppTheme();

    return (
        <StyledPressable onPress={onPress}>
            <Wrapper background={card} shadow={main}>
                <ImageBackgroundComponent source={poster} backdrop={backdrop}>
                    <TitleWrapper background={opacityBackground}>
                        <TextHandler numberOfLines={2} ellipsizeMode="tail" size="m">
                            {title}
                        </TextHandler>
                        <TextHandler size="s" light>
                            {subtitle}
                        </TextHandler>
                    </TitleWrapper>
                </ImageBackgroundComponent>
            </Wrapper>
        </StyledPressable>
    );
};

MovieListItem.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    poster: PropTypes.string,
    backdrop: PropTypes.string,
};

const Wrapper = styled.View`
  width: 140px;
  height: 200px;
  background: ${({ background }) => background};
  ${({ shadow }) => shadow};
  border-radius: 15px;
  overflow: hidden;
`;

const StyledPressable = styled.Pressable``;

const TitleWrapper = styled.View`
  justify-content: space-between;
  height: 70px;
  width: 100%;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 10px 12px 14px 12px;
  z-index: 2;
  background-color: ${({ background }) => background};
`;
