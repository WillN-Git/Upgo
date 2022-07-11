import React from 'react';
import { Center } from 'native-base';
import Lottie from 'lottie-react-native';

export default function Splash() {
    return (
        <Center h="full">
            <Lottie
                source={require('../../assets/loading.json')}
                autoPlay
                loop
            />
        </Center>
    );
}
