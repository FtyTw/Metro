import React from 'react';
import styled from 'styled-components';

import { useAppTheme } from '../hooks';

export const MovieListItem = ({
    onPress = () => console.log('press to movie item'),
    title = 'Spider man: Long way to disaster of franchise',
    subtitle = '2022',
    poster,
}) => {
    const {
        colors: { card },
        shadows: { main },
    } = useAppTheme();

    return (
        <StyledPressable onPress={onPress}>
            <Wrapper background={card} shadow={main}>
                <StyledImageBackground source={{ uri: poster }}>
                    <TitleWrapper>
                        <Title>{title}</Title>
                        <Subtitle>{subtitle}</Subtitle>
                    </TitleWrapper>
                </StyledImageBackground>
            </Wrapper>
        </StyledPressable>
    );
};

MovieListItem.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    poster: PropTypes.string,
};

const Wrapper = styled.View`
  width: 140px;
  height: 200px;
  background: ${({ background }) => background};
  ${({ shadow }) => shadow};
  border-radius: 15px;
`;

const StyledPressable = styled.Pressable``;

const StyledImageBackground = styled.ImageBackground.attrs({
    imageStyle: { borderRadius: 15 },
})`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

const TitleWrapper = styled.View`
  height: 70px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 10px 12px 14px 12px;
`;

const Title = styled.Text.attrs({
    numberOfLines: 2,
    ellipsizeMode: 'tail',
})`
  height: 36px;
  font-size: 14px;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  font-size: 12px;
`;
