import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { Box, Text, HStack, VStack, Image } from 'native-base';
import { dollarToEuro } from '../../utils/helpers';
import { RootBottomTabParamList, RootStackParamList, Shoe } from '../../types';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useShoes } from '../../hooks';

interface IProps {
    dataSource: Shoe[];
    filteredData: Shoe[];
    setDataSource: (arg: Shoe[]) => void;
    navigation: CompositeNavigationProp<
        BottomTabNavigationProp<RootBottomTabParamList, 'Search', undefined>,
        NativeStackNavigationProp<RootStackParamList, 'Root', undefined>
    >;
}

const ITEM_SIZE = 120;
const ITEM_SPACING = 20;

export default function SearchShoeList({
    dataSource,
    filteredData,
    navigation,
    setDataSource,
}: IProps) {
    const [page, setPage] = useState(1);
    const { data, error, isSuccess, isLoading } = useShoes(page); // The whole data
    const windowSize =
        data && dataSource.length > 50 ? dataSource.length / 4 : 21;
    const num = 15;
    const initialLoadNumber = 10;

    // Update dataSource
    useEffect(() => {
        if (data) {
            setDataSource([...dataSource, ...data]);
        }
    }, [data, page]);

    // Scroll Animtion params
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

                            <Text>
                                {item.retailPrice
                                    ? dollarToEuro(item.retailPrice)
                                    : dollarToEuro(item.market.lastSale)}
                                €
                            </Text>
                        </VStack>
                    </HStack>
                </Animated.View>
            </Pressable>
        );
    };

    return (
        <Animated.FlatList
            data={filteredData}
            keyExtractor={(item, index) => `${index}-${item.id}`}
            renderItem={renderItem}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: ITEM_FULL_SIZE }}
            initialNumToRender={initialLoadNumber}
            windowSize={windowSize}
            maxToRenderPerBatch={num / 2}
            removeClippedSubviews={true}
            onEndReached={() => setPage(page + 1)}
            onEndReachedThreshold={0}
        />
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
