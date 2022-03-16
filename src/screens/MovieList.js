import React from 'react';
import styled from 'styled-components';

import { MovieListItem, DefaultSafeArea } from '../components';
import { useSelectMoviesListPrepared } from '../state/hooks';
import { useAppTheme, useNavigationFunc } from '../hooks';

export const MovieList = () => {
    const listData = useSelectMoviesListPrepared();
    const {
        paddings: { paddingHorizontal },
    } = useAppTheme();
    const { navigateToDetails } = useNavigationFunc();

    return (
        <DefaultSafeArea>
            <MovieScrollView paddingHorizontal={paddingHorizontal}>
                {listData.map((movie, index) => {
                    const { poster, backdrop, original_title, releaseYear, id } = movie;
                    return (
                        <MovieWrapper index={index} key={id}>
                            <MovieListItem
                                onPress={() => navigateToDetails(movie)}
                                title={original_title}
                                subtitle={releaseYear}
                                poster={poster}
                                backdrop={backdrop}
                            />
                        </MovieWrapper>
                    );
                })}
            </MovieScrollView>
        </DefaultSafeArea>
    );
};

const MovieScrollView = styled.ScrollView.attrs({
    contentContainerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
})``;

const MovieWrapper = styled.View`
  margin-top: 20px;
`;

//TODO ask about should the space between cards strictly 30 or more important is sides margins
// ${({ index }) => (index % 2 ? 'margin-left:15px' : 'margin-right:15px')};
