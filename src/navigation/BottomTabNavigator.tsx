import React, { ComponentProps } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather as Icon } from '@expo/vector-icons';
import { useColorMode, useColorModeValue } from 'native-base';

// Screens
import { HomeScreen, SearchScreen, FavoriteScreen } from '../screens';
import Header from '../containers/Header';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    const { colorMode } = useColorMode();

    // Tab Bar Options
    const commonOptions = {
        headerTitle: () => <Header />,
        headerStyle: {
            backgroundColor: colorMode === 'light' ? 'white' : '#1e293b',
        },
        tabBarStyle: {
            height: 80,
            borderColor: 'transparent',
            backgroundColor: colorMode === 'light' ? 'white' : '#1e293b',
        },
    };

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            // screenOptions={{ headerStyle: { backgroundColor: 'gray' } }}
            // screenOptions={{ headerShown: false }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    ...commonOptions,
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="home" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    ...commonOptions,
                    title: 'Search',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="search" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    ...commonOptions,
                    title: 'Favorite',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="heart" color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * Icon for the tabs
 * @param props: { name: string, color: string }
 * @returns <Icon />
 */
function TabBarIcon(props: {
    name: ComponentProps<typeof Icon>['name'],
    color: string,
}) {
    return <Icon size={30} {...props} />;
}
