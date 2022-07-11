import React from 'react';
import { Center } from 'native-base';
import Lottie from 'lottie-react-native';

export default function Loader() {
    return (
        <Center h="full">
            <Lottie
                source={require('../../assets/loader.json')}
                autoPlay
                loop
            />
        </Center>
    );
}
