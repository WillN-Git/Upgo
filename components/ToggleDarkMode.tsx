import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { HStack, Pressable, useColorMode } from 'native-base';

export default function ToggleDarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack space={2} alignItems="center">
            <Pressable onPress={toggleColorMode}>
                {colorMode === 'light' ? (
                    <Icon name="moon" size={24} color="black" />
                ) : (
                    <Icon name="sun" size={24} color="orange" />
                )}
            </Pressable>
        </HStack>
    );
}
