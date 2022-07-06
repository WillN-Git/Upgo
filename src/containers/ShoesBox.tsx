import React from 'react';
import { Box, Text, HStack, Center } from 'native-base';

export default function ShoesBox() {
    return (
        <Box w="full">
            {/* Sneakers image preview */}
            <Box bg="gray.300" borderRadius={12} h="40" w="full" />

            <Center>
                <Box borderWidth={1} borderColor="black" w="90%">
                    <HStack justifyContent="space-between">
                        <Text>Shoes Name</Text>

                        <Text>Release date</Text>
                    </HStack>

                    <HStack>
                        <Text>Retail price</Text>
                    </HStack>
                </Box>
            </Center>
        </Box>
    );
}
