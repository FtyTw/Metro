import React from 'react';
import styled from 'styled-components';

export const Header = ({ title, extraStyles }) => {
    const largeTitle = title.toUpperCase();

    return (
        <HeaderSafeAreaView>
            <HeaderView style={{ ...extraStyles }}>
                <HeaderTitle>{largeTitle}</HeaderTitle>
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

const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
