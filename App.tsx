import React, { useState, useEffect } from 'react';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

// Components
import Loader from './src/components/Loader';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation';
import { QueryClient, QueryClientProvider } from 'react-query';


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
    const queryClient = new QueryClient();

    const FAKE_TIME_LOAD = 1000;
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
        <QueryClientProvider client={queryClient}>
            <NativeBaseProvider>
                {loadCondition ? (
                    <Loader />
                ) : (
                    <Navigation />
                )}
                <StatusBar style="auto" />
            </NativeBaseProvider>
        </QueryClientProvider>
    );
}