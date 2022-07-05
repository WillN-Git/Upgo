import React, { useState, useEffect } from 'react';
import { Center, extendTheme, NativeBaseProvider } from 'native-base';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import Loader from './components/Loader';
import NativeBaseIcon from './components/NativeBaseIcon';
import ToggleDarkMode from './components/ToggleDarkMode';

// Define the config
const config = {
    useSystemColorMode: false,
    initialColorMode: 'dark',
};

// Extend the theme
export const theme = extendTheme({ config });

type MyThemeType = typeof theme;

declare module 'native-base' {
  type ICustomTheme = MyThemeType;
}

export default function App() {
    const FAKE_TIME_LOAD = 0;
    const [endOfLoading, setEndOfLoading] = useState(false);
    
    // Fonts Loading
    const [fontsLoaded] = useFonts({
        Inter_900Black,
        Roboto_400Regular,
    });

    const loadCondition = !endOfLoading || !fontsLoaded;

    // Loader
    useEffect(() => {
        setTimeout(() => {
            setEndOfLoading(true);
        }, FAKE_TIME_LOAD);
    }, []);

    return (
        <NativeBaseProvider>
            {loadCondition ? (
                <Loader />
            ) : (
                <Center h="full" _dark={{ bg: 'blueGray.700' }} _light={{ bg: 'blueGray.200' }}>
                    <ToggleDarkMode />
                    <NativeBaseIcon />
                </Center>
            )}
        </NativeBaseProvider>
    );
}