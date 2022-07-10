import React, { memo, PropsWithChildren } from 'react';
import { Box, Text, VStack, HStack, Center, Image } from 'native-base';
import LikeBtn from '../shared/LikeBtn';
import { Shoe } from '../../types';
import { dollarToEuro } from '../../utils/helpers';
import { AntDesign as Icon } from '@expo/vector-icons';

interface IProps {
    item: Shoe;
    index?: number;
    thumbsize: number;
}

function ShoeBox({ item, index, thumbsize: THUMB_SIZE }: IProps) {
    const releaseDays = (dateString: string) => {
        const now = new Date().getTime();
        const countdownDate = new Date(dateString).getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        return days;
    };

    return (
        <Box
            p={5}
            bg="white"
            w="90%"
            shadow="1"
            borderRadius="2xl"
            position="relative"
        >
            <VStack>
                <HStack>
                    <Text
                        fontSize={12}
                        fontWeight="bold"
                        style={{
                            flex: 1,
                            flexWrap: 'wrap',
                            textTransform: 'uppercase',
                        }}
                    >
                        {item.shoe.split(' ')[0]}
                    </Text>

                    <LikeBtn />
                </HStack>

                <Text fontSize={20} fontWeight="bold" numberOfLines={1}>
                    {item.shoe.split(' ').length > 1
                        ? item.shoe
                              .split(' ')
                              .splice(1, item.shoe.split(' ').length - 2)
                        : ''}
                </Text>
            </VStack>

            <HStack alignItems="center">
                <Box w={3} h={3} bg="orange.300" borderRadius="lg" />

                <Text ml={1} fontWeight="bold">
                    {item.retailPrice != 0
                        ? dollarToEuro(item.retailPrice)
                        : dollarToEuro(item.market.lastSale)}
                    €
                </Text>
            </HStack>
            <Center>
                <Image
                    source={{ uri: item.media.thumbUrl }}
                    alt="shoes"
                    w={THUMB_SIZE}
                    h={THUMB_SIZE}
                    resizeMode="contain"
                />
            </Center>

            <HStack justifyContent="space-between">
                <Text>
                    {releaseDays(item.releaseDate) < 0 ||
                    typeof releaseDays(item.releaseDate) !== 'number'
                        ? ''
                        : releaseDays(item.releaseDate) + ' jours'}
                </Text>

                <Box
                    w={10}
                    h={10}
                    bg="black"
                    borderRadius={100}
                    alignSelf="flex-end"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Icon name="arrowright" color="white" size={24} />
                </Box>
            </HStack>
        </Box>
    );
}

function arePropsEqual(
    prevProps: Readonly<PropsWithChildren<IProps>>,
    nextProps: Readonly<PropsWithChildren<IProps>>
) {
    return prevProps.item.id === nextProps.item.id;
}

export default memo(ShoeBox, arePropsEqual);
