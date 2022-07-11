import React from 'react';
import {
    Box,
    Text,
    HStack,
    VStack,
    Image,
    Pressable,
    ScrollView,
} from 'native-base';
import { useStore } from '../hooks';
import { RootBottomTabParamList, RootStackParamList, Shoe } from '../types';
import { AntDesign as Icon } from '@expo/vector-icons';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IProps {
    navigation: CompositeNavigationProp<
        BottomTabNavigationProp<RootBottomTabParamList, 'Home', undefined>,
        NativeStackNavigationProp<RootStackParamList, 'Root', undefined>
    >;
}

export default function FavoriteScreen({ navigation }: IProps) {
    const likedShoes: Shoe[] = useStore((state) => state.likedShoes);

    const releaseDays = (dateString: string) => {
        const now = new Date().getTime();
        const countdownDate = new Date(dateString).getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        return days;
    };

    return (
        <Box pt="16" bg="gray.100">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ alignItems: 'center' }}
            >
                {likedShoes.map((item) => {
                    return (
                        <Pressable
                            key={`favorite-${item.id}`}
                            px={5}
                            py={1}
                            my={2}
                            bg="white"
                            w="90%"
                            shadow="1"
                            borderRadius="2xl"
                            position="relative"
                            onPress={() => navigation.push('Detail', item)}
                        >
                            <HStack
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <VStack justifyContent="flex-start">
                                    <Text
                                        fontSize={12}
                                        fontWeight="bold"
                                        style={{ textTransform: 'uppercase' }}
                                    >
                                        {item.shoe.split(' ')[0]}
                                    </Text>

                                    <Text fontSize={20} fontWeight="bold">
                                        {item.shoe.split(' ').length > 1
                                            ? item.shoe
                                                  .split(' ')
                                                  .splice(
                                                      1,
                                                      item.shoe.split(' ')
                                                          .length - 2
                                                  )
                                            : ''}
                                    </Text>
                                </VStack>

                                <Image
                                    source={{ uri: item.media.thumbUrl }}
                                    alt="shoes"
                                    w={100}
                                    h={100}
                                    resizeMode="contain"
                                />
                            </HStack>

                            {/* <HStack alignItems="center">
                                <Box
                                    w={3}
                                    h={3}
                                    bg="orange.300"
                                    borderRadius="lg"
                                />

                                <Text ml={1} fontWeight="bold">
                                    {item.retailPrice != 0
                                        ? dollarToEuro(item.retailPrice)
                                        : dollarToEuro(item.market.lastSale)}
                                    €
                                </Text>
                            </HStack> */}

                            <HStack justifyContent="space-between">
                                <Text>
                                    {releaseDays(item.releaseDate) < 0 ||
                                    typeof releaseDays(item.releaseDate) !==
                                        'number'
                                        ? ''
                                        : releaseDays(item.releaseDate) +
                                          ' jours'}
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
                        </Pressable>
                    );
                })}
            </ScrollView>
        </Box>
    );
}
