import React, { memo } from 'react';
import { Box, Text, HStack, VStack, Image } from 'native-base';
import { Shoe } from '../../types';
import { arePropsEqual, dollarToEuro } from '../../utils/helpers';

interface IProps {
    item: Shoe;
}

function SearchShoeBox({ item }: IProps) {
    return (
        <HStack alignItems="center">
            <Box>
                <Image
                    source={{ uri: item.media.thumbUrl }}
                    alt="shoe"
                    w={120}
                    h={120}
                    resizeMode="contain"
                />
            </Box>

            <VStack ml={7}>
                <Text
                    w="80%"
                    fontWeight="bold"
                    flexDirection="row"
                    flexWrap="wrap"
                >
                    {item.shoe}
                </Text>

                <Text>
                    {item.releaseDate.split('-')[2]}-
                    {item.releaseDate.split('-')[1]}-
                    {item.releaseDate.split('-')[0]}
                </Text>

                <Text>
                    {item.retailPrice
                        ? dollarToEuro(item.retailPrice)
                        : dollarToEuro(item.market.lastSale)}
                    €
                </Text>
            </VStack>
        </HStack>
    );
}

export default memo(SearchShoeBox, arePropsEqual);
