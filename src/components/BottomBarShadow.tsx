import React from 'react';
import { Box } from 'native-base';
import { Dimensions } from 'react-native';

export default function BottomBarShadow() {
    return (
        <Box
            w="full"
            bg="transparent"
            borderRadius={100}
            shadow="9"
            style={{
                position: 'absolute',
                bottom: 15,
                left: 20,
                height: 55,
                width: Dimensions.get('screen').width - 40,
            }}
        />
    );
}
