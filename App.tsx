import React, { useState, useEffect } from 'react';
import { StatusBar as SB } from 'react-native';
import { Box, Center, extendTheme, NativeBaseProvider } from 'native-base';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

// Components
import Loader from './components/Loader';
import ToggleDarkMode from './components/ToggleDarkMode';
import { StatusBar } from 'expo-status-bar';
import BrandList from './components/BrandList';
import LikeBtn from './components/LikeBtn';
import ShoesBox from './containers/ShoesBox';
import Navigation from './navigation';


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
    const FAKE_TIME_LOAD = 5000;
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
                // <Box pt={SB.currentHeight}>
                //     <ToggleDarkMode />

                //     <Center h="full" _dark={{ bg: 'blueGray.700' }} _light={{ bg: 'blueGray.200' }} pl="10" pr="10">
                //         {/* <LikeBtn /> */}

                //         <ShoesBox />
                //     </Center>
                // </Box>
                <Navigation />
            )}
            <StatusBar style="auto" />
        </NativeBaseProvider>
    );
}