import React from 'react';
import { Text, Center } from 'native-base';
import Lottie from 'lottie-react-native';
import { MAX_HEIGHT } from '../utils/constants';

export default function NotFoundScreen() {
    return (
        <Center h="full" bg="white">
            <Lottie
                source={require('../../assets/page-not-found.json')}
                autoPlay
                loop
            />

            <Text
                fontFamily="Inter_900Black"
                fontSize="6xl"
                position="absolute"
                top={MAX_HEIGHT / 4}
                color="white"
            >
                Oops ! 😅
            </Text>
        </Center>
    );
}
