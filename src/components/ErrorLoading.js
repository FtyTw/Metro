import React from 'react';
import styled from 'styled-components';
import { DefaultSafeArea } from './DefaultSafeArea';
import { TextHandler } from './TextHandler';
import { useFetchMovies } from '../state/dispatchers';
import { useFetchAllMoviesData } from '../state/hooks';
import { useAppTheme } from '../hooks';

export const ErrorLoading = () => {
    const fetchMovieList = useFetchMovies();
    const {
        paddings: { paddingHorizontal },
    } = useAppTheme();
    const { loading = true } = useFetchAllMoviesData();

    return (
        <DefaultSafeArea>
            <ErrorWrapper
                onPress={() => !loading && fetchMovieList()}
                style={{ paddingHorizontal }}
            >
                <TextHandler inverted size="xxl">
                    Hi im error.
                </TextHandler>
                <TextHandler inverted size="l">
                    {`Looks like something went wrong!
    Press anywhere to try again.`}
                </TextHandler>
            </ErrorWrapper>
        </DefaultSafeArea>
    );
};

const ErrorWrapper = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
