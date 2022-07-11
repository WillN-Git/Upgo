import React from 'react';
import { Dimensions } from 'react-native';
import { Box, HStack, Button } from 'native-base';
import LikeBtn from '../shared/LikeBtn';
import { Shoe } from '../../types';

interface IProps {
    shoe: Shoe;
}

export default function ActionBar({ shoe }: IProps) {
    return (
        <HStack
            p={3}
            w="full"
            bg="white"
            borderRadius={100}
            shadow="9"
            justifyContent="space-around"
            alignItems="center"
            style={{
                position: 'absolute',
                bottom: 15,
                left: 20,
                width: Dimensions.get('screen').width - 40,
            }}
        >
            <Box
                p={2}
                borderColor="gray.300"
                borderRadius="lg"
                borderWidth={1}
                justifyContent="center"
                alignItems="center"
            >
                <LikeBtn item={shoe} />
            </Box>

            <Button bg="black" px={5} borderRadius={100}>
                Précommander
            </Button>
        </HStack>
    );
}
