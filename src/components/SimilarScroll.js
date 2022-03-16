import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';

import { TextHandler } from './TextHandler';
import { ImageBackgroundComponent } from './ImageBackgroundComponent';
import { prepareMovieResults } from '../utils';
import { useNavigationFunc } from '../hooks';
import { useGetSimilarMoviesByIdQuery } from '../state/hooks';

const { width: similarWidth } = Dimensions.get('window');

export const SimilarScroll = ({ id }) => {
    const { navigateToDetails } = useNavigationFunc();
    const { status, data = { results: [] } } = useGetSimilarMoviesByIdQuery(id);
    const similar = prepareMovieResults(data.results);
    const isLoaded = status === 'fulfilled';

    return (
        <SimilarScrollView>
            {isLoaded &&
                similar.map((movie) => {
                    const { backdrop, id, title } = movie;
                    return (
                        <SimilarItem onPress={() => navigateToDetails(movie)} key={id}>
                            <SimilarItemWrapper>
                                <ImageBackgroundComponent
                                    resizeMode="cover"
                                    source={backdrop}
                                    imageStyle={{ height: '100%', width: '100%' }}
                                />
                            </SimilarItemWrapper>
                            <TextHandler inverted size="l" uppercase>
                                {title}
                            </TextHandler>
                        </SimilarItem>
                    );
                })}
        </SimilarScrollView>
    );
};

SimilarScroll.propTypes = {
    id: PropTypes.number,
};

const SimilarScrollView = styled.ScrollView.attrs({
    horizontal: true,
})``;

const SimilarItem = styled.Pressable`
    margin-bottom: 16px;
    margin-right: 16px;
    border-style: solid;
    padding-bottom: 16px;
    width: ${similarWidth - 48}px;
    max-width: ${similarWidth - 48}px;
`;

const SimilarItemWrapper = styled.View`
    height: 166px;
    margin-bottom: 16px;
`;
