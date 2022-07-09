import React from 'react';
import { Box, Text, Center, Image, VStack } from 'native-base';

interface IProps {
    thumbsize: number;
    lastPrice: number;
    currentPrice: number;
    img: string;
}

export default function Showcase({
    img,
    lastPrice,
    thumbsize,
    currentPrice,
}: IProps) {
    return (
        <>
            <Center>
                <Box
                    style={{
                        transform: [{ rotateZ: '15deg' }],
                    }}
                >
                    <Image
                        source={{
                            uri: img,
                        }}
                        alt="Shoes"
                        resizeMode="contain"
                        w={thumbsize}
                        h={thumbsize}
                    />
                </Box>
            </Center>

            <VStack>
                <Text
                    fontSize="lg"
                    textDecorationLine="line-through"
                    textDecorationColor="black"
                >
                    {lastPrice}€
                </Text>
                <Text mt={-2} fontSize="3xl" fontFamily="Inter_700Bold">
                    {currentPrice}€
                </Text>
            </VStack>
        </>
    );
}
