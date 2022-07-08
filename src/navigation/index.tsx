import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import { NotFoundScreen, DetailScreen } from '../screens';

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

/**
 * ROOT STACK
 */

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: 'Oops !', headerShown: false }}
            />
            <Stack.Group>
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    options={{
                        headerStyle: { backgroundColor: 'black' },
                        headerShadowVisible: true,
                        headerTintColor: 'white',
                    }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}
