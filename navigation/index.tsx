import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';

export default function Navigation() {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    );
}

/**
 * ROOT STACK
 */

// const Stack = createNativeStackNavigator();

// function RootNavigator() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="Root"
//                 component={BottomTabNavigator}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name="NotFound"
//                 component={NotFoundScreen}
//                 options={{ title: 'Oops !' }}
//             />
//             <Stack.Group screenOptions={{ presentation: 'modal' }}>
//                 <Stack.Screen name="Modal" component={ModalScreen} />
//             </Stack.Group>
//         </Stack.Navigator>
//     );
// }
