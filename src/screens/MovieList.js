import React from 'react';
import styled from 'styled-components';

import { MovieListItem } from '../components';
import { useSelectMoviesListPrepared } from '../state/hooks';
import { useAppTheme } from '../hooks';

export const MovieList = () => {
    const listData = useSelectMoviesListPrepared();
    const {
        paddings: { paddingHorizontal },
    } = useAppTheme();

    return (
        <StyledSafeAreView>
            <MovieScrollView paddingHorizontal={paddingHorizontal}>
                {listData.map(({ poster, backdrop, original_title, releaseYear, id }, index) => (
                    <MovieWrapper index={index} key={id}>
                        <MovieListItem
                            onPress={() => console.log(id)}
                            title={original_title}
                            subtitle={releaseYear}
                            poster={poster}
                            backdrop={backdrop}
                        />
                    </MovieWrapper>
                ))}
            </MovieScrollView>
        </StyledSafeAreView>
    );
};

const StyledSafeAreView = styled.SafeAreaView`
  flex: 1;
`;
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
