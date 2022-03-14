import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { isIOS } from './constants';

const CustomTheme = (theme) => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary: 'rgb(255, 45, 85)',
    },
    paddings: {
        paddingLeft: 33,
        paddingRight: 33,
        paddingHorizontal: 33,
    },
    shadows: {
        main: isIOS ? 'box-shadow: 0px 3px 6px #00000029' : 'elevation: 9',
    },
});

export const MetroTheme = CustomTheme(DefaultTheme);

export const MetroDarkTheme = CustomTheme(DarkTheme);
