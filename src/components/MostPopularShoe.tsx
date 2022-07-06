import React from 'react';
import { Box, Text, HStack, VStack, Button, Image } from 'native-base';

export default function MostPopularShoe() {
    const THUMB_SIZE = 140;

    return (
        <Box my={6} bg="blueGray.200" borderRadius="2xl">
            <HStack pl={3} justifyContent="space-between">
                {/* Short description */}
                <VStack ml="2.5" justifyContent="center">
                    <Text fontSize="xl" fontFamily="Inter_900Black">
                        {'Nike Air Vapor\nMax 360'}
                    </Text>

                    <Text color="gray.500">Men's shoes</Text>

                    <Button w="70%" mt="1.5" bg="black">
                        <Text color="white">Réserver</Text>
                    </Button>
                </VStack>

                {/* Shoes image; */}
                <Box
                    bg="white"
                    position="relative"
                    right={-5}
                    borderColor="gray.300"
                    borderWidth={1}
                    borderRadius="2xl"
                >
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
    );
}
