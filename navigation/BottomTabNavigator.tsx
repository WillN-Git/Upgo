import React, { ComponentProps } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather as Icon } from '@expo/vector-icons';

// Screens
import {
    HomeScreen,
    SearchScreen,
    FavoriteScreen,
    ProfileScreen,
} from '../screens';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
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
                    title: 'Favorite',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="heart" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="user" color={color} />
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
