import React from 'react';
import { Box, HStack, Text, VStack, Divider, ScrollView } from 'native-base';
import { BrandList, ShoesList, MostPopularShoe } from '../components';
import { useStore } from '../hooks';
import { Title, BottomBarShadow } from '../components';
import { RootBottomTabScreenProps } from '../types';

export default function HomeScreen({
    navigation,
    route,
}: RootBottomTabScreenProps<'Home'>) {
    const brandSelected = useStore((state) => state.brandSelected);

    return (
        <Box pt="16" bg="gray.100">
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Most Popular section */}
                <VStack mx={5}>
                    <Title text="En Vogue" />

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

                <Title text="Explore aussi" style={{ marginLeft: 5 }} />

                {/* Brands */}
                <BrandList />

                <ShoesList brand={brandSelected} navigation={navigation} />

                <Box h={50} mt={10} />
            </ScrollView>

            <BottomBarShadow />
        </Box>
    );
}
