import React, { useRef, useState } from 'react';
import { Dimensions, Animated, View } from 'react-native';
import { Box, useColorMode, Text } from 'native-base';
import { useStore, useBrands } from '../../hooks';
import { Brand } from '../../types';

const { width } = Dimensions.get('screen');

/**
 * Optimized !!!
 */

export default function BrandList() {
    // Current color mode
    const { colorMode } = useColorMode();

    // Scroll Handlers
    const scrollX = useRef(new Animated.Value(0)).current;
    const onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
    );

    // Switch brand
    const changeBrand = useStore((state) => state.changeBrand);
    const { data, error, isSuccess, isLoading } = useBrands();
    const [dragEnded, setDragEnded] = useState(false);

    // List Item config
    const ITEM_SIZE = width * 0.38;
    const ITEM_SPACING = (width - ITEM_SIZE) / 2;

    const renderItem = ({ item, index }: { item: Brand, index: number }) => {
        const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
        ];

        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
        });

        const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1.2, 0.6],
        });

        const opacity2 = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
        });

        return (
            <View
                style={{
                    justifyContent: 'center',
                }}
            >
                <Animated.Text
                    style={[
                        {
                            fontFamily: 'Inter_700Bold',
                            fontSize: 20,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            width: ITEM_SIZE,
                            color: colorMode === 'light' ? 'black' : 'white',
                        },
                        {
                            opacity,
                            transform: [{ scale }],
                        },
                    ]}
                >
                    {item.name}
                </Animated.Text>
                {/* <Animated.Text
                    style={[{ textAlign: 'center' }, { opacity: opacity2 }]}
                >
                    {item.qty}
                </Animated.Text> */}
            </View>
        );
    };

    return (
        <Box
            minHeight={25}
            bg="white"
            my={5}
            borderColor="black"
            borderTopWidth={10}
            borderBottomWidth={10}
        >
            {isLoading && <Text>Loading...</Text>}

            {error && <Text>An error occured {error}</Text>}

            {isSuccess && (
                <Animated.FlatList
                    data={data}
                    horizontal
                    bounces={false}
                    style={{ flexGrow: 0 }}
                    onScroll={onScroll}
                    showsHorizontalScrollIndicator={false}
                    decelerationRate="fast"
                    snapToInterval={ITEM_SIZE}
                    contentContainerStyle={{ paddingHorizontal: ITEM_SPACING }}
                    keyExtractor={(item) => `brand-category-${item.name}`}
                    renderItem={renderItem}
                    onScrollEndDrag={() => {
                        setDragEnded(true);
                    }}
                    onMomentumScrollEnd={(ev) => {
                        const index = Math.ceil(
                            ev.nativeEvent.contentOffset.x / ITEM_SIZE
                        );

                        if (data && dragEnded) {
                            changeBrand(data[index].name);
                            setDragEnded(false);
                        }
                    }}
                />
            )}
        </Box>
    );
}
