import React from 'react';
import { Box, Text, ScrollView, VStack } from 'native-base';
import { DescribeShoe, Reviewers, ShoeTags, Showcase } from '../components';
import { RootStackScreenProps } from '../types';
import ActionBar from '../components/detail/ActionBar';
import { dollarToEuro } from '../utils/helpers';

export default function DetailScreen({
    navigation,
    route,
}: RootStackScreenProps<'Detail'>) {
    const THUMB_SIZE = 230;

    const { media, shoe, id, gender, retailPrice, description, _tags, market } =
        route.params;

    // Data Cleaning
    const cleanDescription = description.replace(/(<br(\/|\s\/)?>)/g, '');
    const cleanTags = _tags.map((tag) => tag.replace(/.*\|/g, ''));
    const cleanLastPrice = dollarToEuro(market.lastSale);
    const cleanPrice = dollarToEuro(retailPrice);

    return (
        <>
            <ScrollView bg="white" showsVerticalScrollIndicator={false}>
                {/* Header */}
                <VStack px={5}>
                    <Text fontSize="3xl" fontFamily="Inter_900Black">
                        {shoe.split(' ').map((v, index) => (
                            <Text key={`${id}-text-${index}`}>{v} </Text>
                        ))}
                    </Text>
                    <Text color="gray.500" fontStyle="italic">
                        <Text textTransform="capitalize">{gender}</Text>'s Shoe
                    </Text>
                </VStack>

                {/* Image Box */}
                <VStack px={5}>
                    <Showcase
                        img={media.smallImageUrl}
                        thumbsize={THUMB_SIZE}
                        lastPrice={cleanLastPrice}
                        currentPrice={cleanPrice}
                    />
                </VStack>

                <VStack mt={5} px={5}>
                    {/* Description */}
                    <DescribeShoe description={cleanDescription} />

                    {/* Tags */}
                    <ShoeTags tags={cleanTags} />

                    {/* Avatars */}
                    <Reviewers />
                </VStack>

                <Box h={50} mt={10} />
            </ScrollView>

            {/* Action bar */}
            <ActionBar shoe={route.params} />
        </>
    );
}
