import React, { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MovieList, MovieDetails } from './RouteNames';
import { MovieList as MovieListScreen, MovieDetails as MovieDetailsScreen } from '../screens';
import { Header, ErrorLoading, Loading } from '../components';
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
        defaults: { dark },
        paddings: { paddingHorizontal },
        background,
    } = useAppTheme();

    const fetchMoviesList = useFetchMovies();

    useEffect(() => {
        fetchMoviesList();
    }, []);

    const { loading, error } = useFetchAllMoviesData();

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <ErrorLoading />;
    }
    return (
        <Stack.Navigator
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
                options={{ cardStyle: { backgroundColor: dark }, headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const onRouteChange = ({ index = null, routeNames }) => {
    const lightStatusBarScreens = ['movies'];
    const currentRouteName = typeof index === 'number' && routeNames ? routeNames[index] : index;
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
