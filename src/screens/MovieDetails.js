import React from 'react';
import styled from 'styled-components';

import {
    ImageBackgroundComponent,
    TextHandler,
    DefaultSafeArea,
    SimilarScroll,
} from '../components';

export const MovieDetails = ({ route }) => {
    const {
        params: { backdrop, id, original_title, overview, releaseYear },
    } = route;

    const imageStyle = { height: '100%', width: '100%' };
    const titleStyles = 'margin-top: 6px;height: 34px;';

    return (
        <DefaultSafeArea>
            <MovieDetailsScrollView>
                <ImageWrapper>
                    <ImageBackgroundComponent
                        resizeMode="cover"
                        source={backdrop}
                        imageStyle={imageStyle}
                    />
                </ImageWrapper>

                <PaddingWrapper>
                    <TextHandler size="xl" inverted light>
                        {releaseYear}
                    </TextHandler>

                    <Section>
                        <TextHandler containerStyles={titleStyles} size="xxl" uppercase inverted>
                            {original_title}
                        </TextHandler>
                    </Section>

                    <Section>
                        <TextHandler size="xl" uppercase inverted>
                            overview:
                        </TextHandler>
                    </Section>

                    <Section>
                        <TextHandler size="xl" inverted light>
                            {overview}
                        </TextHandler>
                    </Section>

                    <Section>
                        <TextHandler size="xl" uppercase inverted>
                            similar movies:
                        </TextHandler>
                    </Section>

                    <SimilarScroll id={id} />
                </PaddingWrapper>
            </MovieDetailsScrollView>
        </DefaultSafeArea>
    );
};

MovieDetails.propTypes = {
    route: PropTypes.object,
};

const MovieDetailsScrollView = styled.ScrollView`
    margin-top: 16px;
`;

const ImageWrapper = styled.View`
    height: 240px;
    width: 100%;
    position: relative;
`;

const PaddingWrapper = styled.View`
    padding: 0 24px;
    margin-top: 16px;
`;

const Section = styled.View`
    margin-bottom: 30px;
`;
