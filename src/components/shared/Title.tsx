import React from 'react';
import { Text } from 'native-base';
import { StyleProp, TextStyle } from 'react-native';

interface IProps {
    text: string;
    style?: StyleProp<TextStyle>;
}

export default function Title({ text, style }: IProps) {
    return (
        <Text fontSize="3xl" fontFamily="Inter_900Black" {...style}>
            {text}
        </Text>
    );
}
