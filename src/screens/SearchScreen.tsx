import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Box, Text, HStack, Image, VStack } from 'native-base';
import { Searchbar, Filter } from '../components';
import { useShoes } from '../hooks';
import { useRef } from 'react';
import { Shoe } from '../types';

const ITEM_SIZE = 120;
const ITEM_SPACING = 10;

export default function SearchScreen() {
    const { data, error, isSuccess, isLoading } = useShoes();

    const scrollY = useRef(new Animated.Value(0)).current;
    const ITEM_FULL_SIZE = ITEM_SIZE + ITEM_SPACING;

    const renderItem = ({ item, index }: { item: Shoe, index: number }) => {
        const inputRange = [
            -1,
            0,
            ITEM_FULL_SIZE * index,
            ITEM_FULL_SIZE * (index + 2),
        ];

        const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
        });

        const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
        });

        return (
            <>
                <Animated.View
                    style={[
                        styles.container,
                        { opacity, transform: [{ scale }] },
                    ]}
                >
                    <HStack>
                        <Box>
                            <Image
                                source={{ uri: item.media.thumbUrl }}
                                alt="shoe"
                                w={120}
                                h={120}
                                resizeMode="contain"
                            />
                        </Box>

                        <VStack>
                            <Text>{item.shoe}</Text>

                            <Text>{item.releaseDate}</Text>

                            <Text>{item.retailPrice}</Text>
                        </VStack>
                    </HStack>
                </Animated.View>
            </>
        );
    };

    return (
        <Box pt="16">
            {/* Header */}
            <HStack px={5}>
                <Searchbar />

                <Filter />
            </HStack>

            {data && (
                <Animated.FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: ITEM_SPACING / 2,
        paddingHorizontal: 10,
    },
});
