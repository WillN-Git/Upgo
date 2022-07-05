import { Center, NativeBaseProvider } from 'native-base';
import React from 'react';

import NativeBaseIcon from './components/NativeBaseIcon';

export default function App() {
    return (
        <NativeBaseProvider>
            <Center h="full">
                <NativeBaseIcon />
            </Center>
        </NativeBaseProvider>
    );
}
