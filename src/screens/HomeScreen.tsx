import React from 'react';
import { Box, HStack, Text, VStack, Image, Button, Divider } from 'native-base';
import { BrandList, MostPopularShoe, ShoesList } from '../components';
import { useStore } from '../hooks';

export default function HomeScreen() {
    const brandSelected = useStore((state) => state.brandSelected);

    return (
        <Box
            px={5}
            pt={5}
            flex={1}
            _dark={{ bg: 'blueGray.800' }}
            _light={{ bg: 'white' }}
        >
            {/* Most Popular section */}
            <VStack>
                <Text fontFamily="Inter_900Black" fontSize="3xl">
                    En Vogue
                </Text>

                <HStack>
                    <Text fontStyle="italic">Ne la laisse pas t'échapper</Text>
                    <Text> 😯</Text>
                </HStack>
            </VStack>

            {/* Shoes Box */}
            <MostPopularShoe />

            <Divider w="90%" mt="2" mx="auto" opacity={0.5} />

            {/* Brands */}
            <BrandList />

            <ShoesList brand={brandSelected} />
        </Box>
    );
}
