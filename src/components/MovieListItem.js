import React from 'react';
import styled from 'styled-components';

export const MovieListItem = ({
    onPress = () => console.log('press to movie item'),
    title = 'Spider man: Long way to disaster of franchise',
    subtitle = '2022',
}) => (
    <StyledPressable onPress={onPress}>
        <StyledImageBackground
            source={{ uri: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg' }}
        >
            <TitleWrapper>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </TitleWrapper>
        </StyledImageBackground>
    </StyledPressable>
);

MovieListItem.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

const StyledPressable = styled.Pressable`
  box-shadow: 0px 3px 6px #00000029;
  elevation: 9;
`;

const StyledImageBackground = styled.ImageBackground.attrs({
    imageStyle: { borderRadius: 15 },
})`
  width: 140px;
  height: 200px;
  justify-content: flex-end;
  overflow: hidden;
`;

const TitleWrapper = styled.View`
  height: 70px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
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
