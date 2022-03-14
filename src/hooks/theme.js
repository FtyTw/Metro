import { useColorScheme } from 'react-native';

import { MetroTheme, MetroDarkTheme } from '../utils';

export const useAppTheme = () => {
    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? MetroDarkTheme : MetroTheme;
    return theme;
};
