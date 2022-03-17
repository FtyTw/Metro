import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Spinner } from './Spinner';

/*
    @param{source} String will be used as primary source to load the poster image
    @param{backdrop} String will be used in case if poster loading fails
    @param{ImageStyle} Object with styles supported by Image/ImageBackground components of React-Native
    @param{resizeMode} String property of resize mode setting that accepts by Image/ImageBackground components of React-Native
    component has 100% width and height values, so must be wrapped in parent component with needed sizes
*/
export const ImageBackgroundComponent = ({
    source = '',
    children,
    imageStyle,
    backdrop,
    resizeMode,
}) => {
    const [loaded, setLoaded] = useState(null);
    const [uri, setUri] = useState(null);

    const loadEndHandler = () => {
        setLoaded(true);
    };

    const onErrorHandler = () => {
        if (backdrop) {
            setUri(backdrop);
        }
    };

    useEffect(() => {
        if (source) {
            setUri(source);
        }
    }, [source]);

    return (
        <StyledImageBackground
            resizeMode={resizeMode}
            onError={onErrorHandler}
            onLoadEnd={loadEndHandler}
            source={{ uri }}
            imageStyle={imageStyle}
        >
            <Spinner loaded={loaded} />
            {children}
        </StyledImageBackground>
    );
};

ImageBackgroundComponent.propTypes = {
    source: PropTypes.string,
    children: PropTypes.element,
    imageStyle: PropTypes.object,
    backdrop: PropTypes.string,
    resizeMode: PropTypes.string,
};

const StyledImageBackground = styled.ImageBackground.attrs(({ imageStyle }) => ({
    imageStyle,
}))`
    width: 100%;
    height: 100%;
    justify-content: flex-end;
`;
