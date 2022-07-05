import React from 'react';
import { Dimensions } from 'react-native';
import { Text, Center } from 'native-base';
import Lottie from 'lottie-react-native';

const { height } = Dimensions.get('screen');

export default function NotFoundScreen() {
    return (
        <Center h="full" bg="primary.700">
            <Lottie
                source={require('../assets/page-not-found.json')}
                autoPlay
                loop
            />

            <Text
                fontFamily="Inter_900Black"
                fontSize="6xl"
                position="absolute"
                top={height / 4}
                color="white"
            >
                Oops ! 😅
            </Text>
        </Center>
    );
}
