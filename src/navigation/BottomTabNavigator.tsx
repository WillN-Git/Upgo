import React, { ComponentProps } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather as Icon } from '@expo/vector-icons';
import { useColorMode } from 'native-base';

// Screens
import {
    HomeScreen,
    SearchScreen,
    FavoriteScreen,
    CalendarScreen,
} from '../screens';
import { Header } from '../components';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    const { colorMode } = useColorMode();

    // Tab Bar Options
    const commonOptions = {
        headerShown: false,
        headerTitle: () => <Header />,
        headerStyle: {
            backgroundColor: colorMode === 'light' ? '#f4f4f5' : '#1e293b',
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
            height: 55,
            position: 'absolute',
            bottom: 15,
            left: 20,
            right: 20,
            borderColor: 'none',
            borderWidth: 0,
            borderRadius: 100,
            backgroundColor: colorMode === 'light' ? '#000' : '#1e293b',
        },
    };

    return (
        <BottomTab.Navigator initialRouteName="Home">
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
                name="Calendar"
                component={CalendarScreen}
                options={{
                    ...commonOptions,
                    title: 'Search',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="calendar" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    ...commonOptions,
                    title: 'Favorite',
                    tabBarIcon: ({ color }) => {
                        return <TabBarIcon name="heart" color={color} />;
                    },
                }}
            />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: {
    name: ComponentProps<typeof Icon>['name'],
    color: string,
}) {
    return <Icon size={24} {...props} />;
}
