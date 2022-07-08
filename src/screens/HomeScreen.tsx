import React from 'react';
import { Box, HStack, Text, VStack, Divider, ScrollView } from 'native-base';
import { BrandList, ShoesList, MostPopularShoe } from '../components';
import { useStore } from '../hooks';
import { BottomBarShadow } from '../components';
import { RootBottomTabScreenProps } from '../types';

export default function HomeScreen({
    navigation,
    route,
}: RootBottomTabScreenProps<'Home'>) {
    const brandSelected = useStore((state) => state.brandSelected);

    return (
        <Box pt="16" _dark={{ bg: 'blueGray.800' }} _light={{ bg: 'gray.100' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Most Popular section */}
                <VStack mx={5}>
                    <Text fontFamily="Inter_900Black" fontSize="3xl">
                        En Vogue
                    </Text>

                    <HStack>
                        <Text fontStyle="italic">
                            Ne la laisse pas t'échapper
                        </Text>
                        <Text> 😯</Text>
                    </HStack>
                </VStack>

                {/* Shoes Box */}
                <Box mx={5}>
                    <MostPopularShoe />
                </Box>

                <Divider w="90%" my="2" mx="auto" opacity={0.5} />

                <Text mx={5} fontFamily="Inter_900Black" fontSize="3xl">
                    Explore aussi
                </Text>

                {/* Brands */}
                <BrandList />

                <ShoesList brand={brandSelected} navigation={navigation} />

                <Box h={50} mt={10} />
            </ScrollView>

            <BottomBarShadow />
        </Box>
    );
}
