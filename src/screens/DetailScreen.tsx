import React, { useState } from 'react';
import {
    Box,
    Text,
    ScrollView,
    Image,
    VStack,
    Button,
    HStack,
    Center,
    Badge,
    Avatar,
} from 'native-base';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { LikeBtn } from '../components';
import { RootStackScreenProps } from '../types';

export default function DetailScreen({
    navigation,
    route,
}: RootStackScreenProps<'Detail'>) {
    const THUMB_SIZE = 230;
    const [readMore, setReadMore] = useState(true);
    const { media, shoe, id, gender, retailPrice, description, _tags, market } =
        route.params;

    // Data Cleaning
    const cleanDescription = description.replace(/(<br(\/|\s\/)?>)/g, '');
    const cleanTags = _tags.map((tag) => tag.replace(/.*\|/g, ''));
    const cleanLastPrice = dollarToEuro(market.lastSale);
    const cleanPrice = dollarToEuro(retailPrice);

    return (
        <>
            <ScrollView bg="white" showsHorizontalScrollIndicator={false}>
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
                    <Center>
                        <Box
                            style={{
                                transform: [{ rotateZ: '15deg' }],
                            }}
                        >
                            <Image
                                source={{
                                    uri: media.smallImageUrl,
                                }}
                                alt="Shoes"
                                resizeMode="contain"
                                w={THUMB_SIZE}
                                h={THUMB_SIZE}
                            />
                        </Box>
                    </Center>

                    <VStack>
                        <Text
                            fontSize="lg"
                            textDecorationLine="line-through"
                            textDecorationColor="black"
                        >
                            {cleanLastPrice}€
                        </Text>
                        <Text mt={-2} fontSize="3xl" fontFamily="Inter_700Bold">
                            {cleanPrice}€
                        </Text>
                    </VStack>
                </VStack>

                <VStack mt={5} px={5}>
                    {/* Description */}
                    {description != '' && (
                        <>
                            <Text
                                fontSize="md"
                                mb={3}
                                fontFamily="Inter_700Bold"
                            >
                                Description
                            </Text>

                            {readMore ? (
                                <Text>{cleanDescription}</Text>
                            ) : (
                                <Text numberOfLines={4}>
                                    {cleanDescription}
                                </Text>
                            )}

                            <TouchableOpacity
                                onPress={() => setReadMore(!readMore)}
                                style={{ marginVertical: 10 }}
                            >
                                <Text
                                    fontFamily="Roboto_500Medium"
                                    textDecorationLine="underline"
                                    textDecorationColor="black"
                                >
                                    {readMore ? 'Réduire.' : 'Lire plus...'}
                                </Text>
                            </TouchableOpacity>
                        </>
                    )}
                    <Text fontSize="md" my={3} fontFamily="Inter_700Bold">
                        Tags
                    </Text>
                    {/* Tags */}
                    <View
                        style={{
                            borderRadius: 100,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}
                    >
                        {cleanTags.map((item, index) => (
                            <Badge
                                key={`tag-${index}`}
                                bg="gray.100"
                                px={5}
                                py={1}
                                mt={1}
                                borderRadius={100}
                                borderColor="black"
                                borderWidth={2}
                                mx={1}
                            >
                                <Text textAlign="center">{item}</Text>
                            </Badge>
                        ))}
                    </View>
                    {/* Avatar */}
                    <Text fontSize="md" my={3} fontFamily="Inter_700Bold">
                        Revues
                    </Text>
                    <Center>
                        <Avatar.Group
                            _avatar={{
                                size: 'lg',
                            }}
                            max={3}
                        >
                            <Avatar
                                bg="green.500"
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                                }}
                            >
                                AJ
                            </Avatar>
                            <Avatar
                                bg="cyan.500"
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                                }}
                            >
                                TE
                            </Avatar>
                            <Avatar
                                bg="indigo.500"
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                                }}
                            >
                                JB
                            </Avatar>
                            <Avatar
                                bg="amber.500"
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                                }}
                            >
                                TS
                            </Avatar>
                            <Avatar
                                bg="green.500"
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                                }}
                            >
                                AJ
                            </Avatar>
                            <Avatar
                                bg="cyan.500"
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                                }}
                            >
                                TE
                            </Avatar>
                            <Avatar
                                bg="indigo.500"
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                                }}
                            >
                                JB
                            </Avatar>
                            <Avatar
                                bg="amber.500"
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                                }}
                            >
                                TS
                            </Avatar>
                        </Avatar.Group>
                    </Center>
                </VStack>

                <Box h={50} mt={10} />
            </ScrollView>

            {/* Bottom */}
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
                    <LikeBtn />
                </Box>

                <Button bg="black" px={5} borderRadius={100}>
                    Précommander
                </Button>
            </HStack>
        </>
    );
}

function dollarToEuro(dollar: number) {
    const euro = Math.round(dollar * 0.98);

    return euro;
}
