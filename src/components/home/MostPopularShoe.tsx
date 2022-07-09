import React from 'react';
import { Text, HStack, VStack, Image, Center } from 'native-base';
import { MotiView } from 'moti';

export default function MostPopularShoe() {
    const THUMB_SIZE = 130;

    return (
        <VStack pt={6} my={6} bg="white" borderRadius="lg">
            <MotiView
                from={{
                    opacity: 0,
                    transform: [
                        { translateX: THUMB_SIZE / 3 },
                        { rotateY: '180deg' },
                        { rotateZ: '0deg' },
                        { scale: 1.45 },
                    ],
                }}
                animate={{
                    opacity: 1,
                    transform: [
                        { translateX: 0 },
                        { rotateY: '180deg' },
                        { rotateZ: '15deg' },
                        { scale: 1.45 },
                    ],
                }}
                transition={{
                    type: 'timing',
                }}
            >
                <Center>
                    <Image
                        source={{
                            uri: 'https://images.stockx.com/images/Vans-Old-Skool-Black-White-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607043282',
                        }}
                        alt="Shoes"
                        resizeMode="contain"
                        w={THUMB_SIZE}
                        h={THUMB_SIZE}
                    />
                </Center>
            </MotiView>

            <HStack
                bg="black"
                py="2.5"
                borderBottomLeftRadius="lg"
                borderBottomRightRadius="lg"
                justifyContent="space-around"
            >
                <VStack>
                    {/* shoe */}
                    <Text
                        color="white"
                        fontSize="md"
                        fontFamily="Inter_700Bold"
                    >
                        Vans Old Skool
                    </Text>
                    {/* name */}
                    <Text color="gray.500">Black White</Text>
                </VStack>

                <VStack>
                    {/* retailPrice */}
                    <Text
                        color="white"
                        fontSize="md"
                        fontFamily="Inter_700Bold"
                    >
                        130€
                    </Text>
                    {/* countryOfManufacture */}
                    <Text color="gray.500">VN</Text>
                </VStack>
            </HStack>
        </VStack>
    );
}
