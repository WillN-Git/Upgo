import React from 'react';
import { Center, Text } from 'native-base';
import Lottie from 'lottie-react-native';

export default function Loader() {
    return (
        <Center h="full">
            <Lottie source={require('../assets/loading.json')} autoPlay loop />
        </Center>
    );
}
