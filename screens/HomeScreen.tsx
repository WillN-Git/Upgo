import React from 'react';
import { Box, HStack, Text, VStack, Image } from 'native-base';
import BrandList from '../components/BrandList';
import ShoesList from '../components/ShoesList';

export default function HomeScreen() {
    const THUMB_SIZE = 150;

    return (
        <Box
            pt={5}
            pr={5}
            pl={5}
            flex={1}
            _dark={{ bg: 'blueGray.800' }}
            _light={{ bg: 'blueGray.200' }}
        >
            {/* Most Popular section */}
            <VStack>
                <Text fontFamily="Inter_900Black" fontSize="3xl">
                    En Vogue
                </Text>

                <HStack>
                    <Text color="orange.400" fontStyle="italic">
                        Ne la laisse pas t'échapper
                    </Text>
                    <Text> 😯</Text>
                </HStack>
            </VStack>

            {/* Shoes Box */}
            <Box bg="rgba(0, 0, 0, 0.1)" mt={3} borderRadius="2xl">
                <HStack pl={3} justifyContent="flex-start">
                    <VStack justifyContent="center">
                        <Text fontFamily="Inter_900Black">
                            Nike Air Vapor Max 360
                        </Text>

                        <Text color="gray.500">Men's shoes</Text>
                    </VStack>

                    <Box bg="white" borderRadius="2xl">
                        <Image
                            source={{
                                uri: 'https://images.stockx.com/images/Nike-Air-VaporMax-360-Hyper-Pink-W-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1611071162',
                            }}
                            alt="Shoes"
                            resizeMode="contain"
                            w={THUMB_SIZE}
                            h={THUMB_SIZE}
                        />
                    </Box>
                </HStack>
            </Box>

            {/* Brands */}
            <BrandList />

            {/* <ShoesList /> */}
        </Box>
    );
}
