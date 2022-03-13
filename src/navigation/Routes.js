import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Loading} from './RouteNames'
import {Loading as LoadingScreen} from '../screens'

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{headerShown: false}}
                name={Loading}
                component={LoadingScreen}
            />
        </Stack.Navigator>
    )
}

export const Routes = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}

export default Routes
