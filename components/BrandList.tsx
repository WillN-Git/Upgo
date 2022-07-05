import React, { useRef } from 'react';
import { Dimensions, Animated, View } from 'react-native';
import { Box, useColorMode, Text } from 'native-base';
import useBrands from '../hooks/useBrands';

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

    // List Item config
    const ITEM_SIZE = width * 0.38;
    const ITEM_SPACING = (width - ITEM_SIZE) / 2;

    const { data, error, isSuccess, isLoading } = useBrands();

    // Test
    // useEffect(() => {
    //     scrollX.addListener((offset) => {
    //         const index = Math.ceil(offset.value / ITEM_SIZE);

    //         console.log('MARQUE => ', brands[index]);
    //     });
    // }, [scrollX]);

    return (
        <Box minHeight={25}>
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
                    keyExtractor={(item) => `brand-category-${item}`}
                    renderItem={({ item, index }) => {
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

                        return (
                            <View
                                style={{
                                    justifyContent: 'center',
                                }}
                            >
                                <Animated.Text
                                    style={[
                                        {
                                            fontFamily: 'Inter_900Black',
                                            fontWeight: '900',
                                            fontSize: 25,
                                            textTransform: 'uppercase',
                                            textAlign: 'center',
                                            width: ITEM_SIZE,
                                            color:
                                                colorMode === 'light'
                                                    ? 'black'
                                                    : 'white',
                                        },
                                        {
                                            opacity,
                                            transform: [{ scale }],
                                        },
                                    ]}
                                >
                                    {item}
                                </Animated.Text>
                            </View>
                        );
                    }}
                />
            )}
        </Box>
    );
}
