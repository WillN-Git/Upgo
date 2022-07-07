import React from 'react';
import { Box, Text } from 'native-base';
import { Searchbar, Filter } from '../components';

interface SearchScreenProps {}

export default function SearchScreen() {
    return (
        <Box pt={5} _dark={{ bg: 'blueGray.800' }} _light={{ bg: 'gray.100' }}>
            <Searchbar />

            <Filter />
        </Box>
    );
}
