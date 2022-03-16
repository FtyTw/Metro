import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MovieList, MovieDetails } from './RouteNames';
import {
    Loading as LoadingScreen,
    MovieList as MovieListScreen,
    MovieDetails as MovieDetailsScreen,
} from '../screens';
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
        background,
        invertedBackground,
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
        <Stack.Navigator
            // initialRouteName={MovieDetails}
            screenOptions={{
                cardStyle: {
                    ...cardOptionsOS,
                },
            }}
        >
            <Stack.Screen
                name={MovieList}
                component={MovieListScreen}
                options={{
                    cardStyle: {
                        backgroundColor: background,
                    },
                    header: ({ route }) => {
                        return <Header title={route.name} extraStyles={{ paddingHorizontal }} />;
                    },
                }}
            />
            <Stack.Screen
                name={MovieDetails}
                component={MovieDetailsScreen}
                options={{ cardStyle: { backgroundColor: invertedBackground }, headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const onRouteChange = ({ index, routeNames }) => {
    const lightStatusBarScreens = ['movies'];
    const currentRouteName = routeNames[index];
    StatusBar.setBarStyle(
        lightStatusBarScreens.includes(currentRouteName) ? 'dark-content' : 'light-content'
    );
};

export const Routes = () => {
    const theme = useAppTheme();

    return (
        <NavigationContainer onStateChange={onRouteChange} theme={theme}>
            <MainStack />
        </NavigationContainer>
    );
};

export default Routes;
