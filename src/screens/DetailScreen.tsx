import React from 'react';
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
import { View, Dimensions } from 'react-native';
import { LikeBtn } from '../components';

export default function DetailScreen() {
    const THUMB_SIZE = 230;

    return (
        <>
            <ScrollView bg="white" showsHorizontalScrollIndicator={false}>
                {/* Header */}
                <VStack px={5}>
                    <Text fontSize="3xl" fontFamily="Inter_900Black">
                        {'Adidas Yeezy\nBoost 700 Static'}
                    </Text>
                    <Text color="gray.500" fontStyle="italic">
                        Men's Shoe
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
                                    uri: 'https://images.stockx.com/images/Vans-Old-Skool-Black-White-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607043282',
                                }}
                                alt="Shoes"
                                resizeMode="contain"
                                w={THUMB_SIZE}
                                h={THUMB_SIZE}
                            />
                        </Box>
                    </Center>
                    <Text fontSize="3xl" fontFamily="Inter_700Bold">
                        130€
                    </Text>
                </VStack>

                <VStack mt={5} px={5}>
                    {/* Description */}
                    <Text fontSize="md" mb={3} fontFamily="Inter_700Bold">
                        Description
                    </Text>
                    <Text numberOfLines={4}>
                        {
                            "One of Yeezy's most celebrated designs received a reflective makeover with the adidas Yeezy Boost 350 V2 Beluga Reflective.\n\n\nThe adidas Yeezy Boost 350 V2 Beluga Reflective builds off of the original Beluga colorway by adding reflective qualities and speckled orange accents to its Primeknit upper. Signature details like a Boost sole and orange side stripe complete the design.\n\n\nThe adidas Yeezy Boost 350 V2 Beluga Reflective released in December of 2021 and retailed for $240."
                        }
                    </Text>
                    <Text fontSize="md" mb={3} fontFamily="Inter_700Bold">
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
                        {['Adidas', 'Men', 'Sneakers', 'Yeezy'].map(
                            (item, index) => (
                                <Badge
                                    key={`tag-${index}`}
                                    bg={`blueGray.${index + 1}00`}
                                    px={5}
                                    py={1}
                                    borderRadius={100}
                                    mx={1}
                                >
                                    <Text textAlign="center">item</Text>
                                </Badge>
                            )
                        )}
                    </View>
                    {/* Avatar */}
                    <Text fontSize="md" mb={3} fontFamily="Inter_700Bold">
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
