import React from 'react';
import styled from 'styled-components';
import { TextHandler } from './TextHandler';

export const Header = ({ title, extraStyles }) => {
    const largeTitle = title.toUpperCase();

    return (
        <HeaderSafeAreaView>
            <HeaderView style={{ ...extraStyles }}>
                <TextHandler size="xxl">{largeTitle}</TextHandler>
            </HeaderView>
        </HeaderSafeAreaView>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    extraStyles: PropTypes.object,
};

const HeaderSafeAreaView = styled.SafeAreaView`
  height: 110px;
  justify-content: flex-end;
`;

const HeaderView = styled.View`
  padding-bottom: 10px;
`;
