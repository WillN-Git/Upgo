import React from 'react';
import { Box, HStack, VStack } from 'native-base';
import { Feather as Icon } from '@expo/vector-icons';
import ToggleDarkMode from '../components/ToggleDarkMode';

export default function Header() {
    return (
        <HStack
            w="full"
            h="full"
            alignItems="center"
            justifyContent="space-between"
            // _light={{ bg: 'blueGray.200' }}
            // _dark={{ bg: 'blueGray.800' }}
        >
            {/* Menu */}
            <VStack
                p="2"
                size={25}
                borderWidth={1.5}
                borderColor="gray.300"
                borderRadius={8}
            >
                <Box h={25} w={25} justifyContent="center">
                    <Box
                        w={5}
                        h={0.5}
                        mt={0.5}
                        mb={0.5}
                        borderRadius={3}
                        _light={{ bg: 'black' }}
                        _dark={{ bg: 'white' }}
                    />
                    <Box
                        w={3}
                        h={0.5}
                        mt={0.5}
                        mb={0.5}
                        borderRadius={5}
                        _light={{ bg: 'black' }}
                        _dark={{ bg: 'white' }}
                    />
                    <Box
                        w={5}
                        h={0.5}
                        mt={0.5}
                        mb={0.5}
                        borderRadius={5}
                        _light={{ bg: 'black' }}
                        _dark={{ bg: 'white' }}
                    />
                </Box>
            </VStack>

            {/* Cart */}
            <Box
                p="2"
                borderWidth={1.5}
                borderColor="gray.300"
                borderRadius={8}
            >
                {/* <Icon name="shopping-bag" size={25} color="black" /> */}
                <ToggleDarkMode />
            </Box>
        </HStack>
    );
}
