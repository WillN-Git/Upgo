import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import {
    Box,
    Text,
    Image,
    HStack,
    Center,
    FlatList,
    VStack,
    View,
} from 'native-base';
import { API_URL } from '../../utils/constants';
import { Shoe } from '../../types/Shoes';
import { AntDesign as Icon } from '@expo/vector-icons';
import LikeBtn from '../LikeBtn';
import { MotiView } from 'moti';

const { width } = Dimensions.get('screen');

interface IProps {
    brand: string;
}

export default function ShoesList({ brand }: IProps) {
    const [shoes, setShoes] = useState<Shoe[]>();

    // Fetch shoes
    const getShoes = async () => {
        await fetch(`${API_URL}/browse?productCategory=sneakers&brand=${brand}`)
            .then((res) => res.json())
            .then((res) => {
                setShoes(res.Products);
            });
    };

    useEffect(() => {
        getShoes();
    }, [brand]);

    const THUMB_BOX_SIZE = width * 0.5 + 30;
    const THUMB_BOX_MARGIN = (width - THUMB_BOX_SIZE) / 2;
    const THUMB_SIZE = THUMB_BOX_SIZE * 0.9;

    const renderItem = ({ item }: { item: Shoe, index: number }) => {
        const releaseDate = (dateString: string) => {
            const now = new Date().getTime();
            const countdownDate = new Date(dateString).getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));

            return days;
        };

        return (
            <Box w={THUMB_BOX_SIZE}>
                {shoes && (
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

                            <Text
                                fontSize={20}
                                fontWeight="bold"
                                numberOfLines={1}
                            >
                                {item.shoe.split(' ').length > 1
                                    ? item.shoe
                                          .split(' ')
                                          .splice(
                                              1,
                                              item.shoe.split(' ').length - 2
                                          )
                                    : ''}
                            </Text>
                        </VStack>

                        <HStack alignItems="center">
                            <Box
                                w={3}
                                h={3}
                                bg="orange.300"
                                borderRadius="lg"
                            />

                            <Text ml={1} fontWeight="bold">
                                {item.retailPrice}€
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
                                {releaseDate(item.releaseDate) < 0 ||
                                typeof releaseDate(item.releaseDate) !==
                                    'number'
                                    ? ''
                                    : releaseDate(item.releaseDate) + ' jours'}
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
                                <Icon
                                    name="arrowright"
                                    color="white"
                                    size={24}
                                />
                            </Box>
                        </HStack>
                    </Box>
                )}
            </Box>
        );
    };

    return (
        <>
            {shoes && (
                <FlatList
                    data={shoes}
                    horizontal
                    bounces={false}
                    style={{ flexGrow: 0 }}
                    decelerationRate="fast"
                    snapToInterval={THUMB_BOX_SIZE}
                    contentContainerStyle={{
                        paddingHorizontal: THUMB_BOX_MARGIN,
                        paddingVertical: 5,
                    }}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => `shoe-${brand}-${item.id}`}
                    renderItem={renderItem}
                />
            )}
        </>
    );
}
