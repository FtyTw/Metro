import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { isIOS } from './constants';

const CustomTheme = (theme) => ({
    ...theme,
    colors: {
        ...theme.colors,
    },
    paddings: {
        paddingLeft: 33,
        paddingRight: 33,
        paddingHorizontal: 33,
    },
    shadows: {
        main: isIOS ? 'box-shadow: 0px 3px 6px #00000029' : 'elevation: 9',
    },
    fonts: {
        s: 12,
        m: 14,
        l: 16,
        xl: 18,
        xxl: 24,
    },
    defaults: {
        light: '#ffffff',
        dark: '#1C1C1C',
        font: '#FFFFFFE3',
    },
});

export const MetroTheme = {
    ...CustomTheme(DefaultTheme),
    ...{
        fontColor: '#000000',
        invertedColor: '#FFFFFFE3',
        background: '#ffffff',
        invertedBackground: '#1C1C1C',
        opacityBackground: 'rgba(255 ,255 ,255 ,0.8)',
    },
};

export const MetroDarkTheme = {
    ...CustomTheme(DarkTheme),
    ...{
        fontColor: '#FFFFFFE3',
        invertedColor: '#000000',
        invertedBackground: '#ffffff',
        background: '#1C1C1C',
        opacityBackground: 'rgba(0, 0, 0, 0.8)',
    },
};
