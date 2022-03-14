import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MovieList } from './RouteNames';
import { Loading as LoadingScreen, MovieList as MovieListScreen } from '../screens';
import { Header } from '../components';
import { useFetchMovies } from '../state/dispatchers';
import { useFetchAllMoviesData } from '../state/hooks';
import { useAppTheme } from '../hooks';

const Stack = createStackNavigator();

const cardOptionsOS = {
    ...Platform.select({
        android: {
            paddingTop: StatusBar.currentHeight,
        },
    }),
};

const MainStack = () => {
    const {
        paddings: { paddingHorizontal },
    } = useAppTheme();
    useFetchMovies();
    const { loading, error } = useFetchAllMoviesData();

    if (loading) {
        return <LoadingScreen />;
    }
    if (error) {
        return null;
    }
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={MovieList}
                component={MovieListScreen}
                options={{
                    cardStyle: {
                        ...cardOptionsOS,
                    },
                    header: ({ route }) => {
                        return <Header title={route.name} extraStyles={{ paddingHorizontal }} />;
                    },
                }}
            />
        </Stack.Navigator>
    );
};

export const Routes = () => {
    const theme = useAppTheme();

    return (
        <NavigationContainer theme={theme}>
            <MainStack />
        </NavigationContainer>
    );
};

export default Routes;
