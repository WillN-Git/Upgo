import React from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { Box, Text, HStack, Image, VStack } from 'native-base';
import { Searchbar, Filter } from '../components';
import { useShoes } from '../hooks';
import { useRef } from 'react';
import { RootBottomTabScreenProps, Shoe } from '../types';

const ITEM_SIZE = 120;
const ITEM_SPACING = 20;

export default function SearchScreen({
    navigation,
    route,
}: RootBottomTabScreenProps<'Search'>) {
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
            <Pressable onPress={() => navigation.push('Detail', item)}>
                <Animated.View
                    style={[
                        styles.container,
                        { opacity, transform: [{ scale }] },
                    ]}
                >
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

                            <Text>{item.retailPrice}€</Text>
                        </VStack>
                    </HStack>
                </Animated.View>
            </Pressable>
        );
    };

    return (
        <Box pt="16">
            {/* Header */}
            <HStack px={5}>
                <Searchbar />

                <Filter />
            </HStack>

            {/* Shoes List */}
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
        paddingHorizontal: 10,
        marginVertical: ITEM_SPACING / 2,
        marginHorizontal: 20,
        borderRadius: 15,
        backgroundColor: 'white',
    },
});
