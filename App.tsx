import React, { useState, useEffect } from 'react';
import { Box, extendTheme, NativeBaseProvider } from 'native-base';
import { useFonts, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';

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

    const FAKE_TIME_LOAD = 3000;
    const [endOfLoading, setEndOfLoading] = useState(false);
    
    // Fonts Loading
    const [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_900Black,
        Roboto_400Regular,
        Roboto_500Medium,
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
                <StatusBar style="light" backgroundColor="black" />
            </NativeBaseProvider>
        </QueryClientProvider>
    );
}