import { Box } from 'native-base';
import React from 'react';
import { Calendar } from '../components';
import { RootBottomTabScreenProps } from '../types';

export default function CalendarScreen({
    navigation,
    route,
}: RootBottomTabScreenProps<'Calendar'>) {
    return (
        <Box flex={1}>
            <Calendar navigation={navigation} />
        </Box>
    );
}
