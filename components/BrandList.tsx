import React, { useRef, useState } from 'react';
import { Dimensions, Animated, View } from 'react-native';
import { Box, useColorMode } from 'native-base';
import { useEffect } from 'react';

const API_URL = 'https://stockx.com/api';
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

    const [brands, setBrands] = useState<string[]>([]);
    const ITEM_SIZE = width * 0.38;
    const ITEM_SPACING = (width - ITEM_SIZE) / 2;

    const getBrands = async () => {
        await fetch(`${API_URL}/browse?productCategory=sneakers`)
            .then((res) => res.json())
            .then((res) => {
                const arr = Object.keys(res.Facets.brand);

                setBrands(arr);
            });
    };

    // Get Brands
    useEffect(() => {
        getBrands();
        console.log('BRAND');
    }, []);

    // Test
    // useEffect(() => {
    //     scrollX.addListener((v) => console.log('HEY => ', v));
    // }, [scrollX]);

    console.log('RENDU');

    return (
        <Box minHeight={25}>
            <Animated.FlatList
                data={brands}
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
        </Box>
    );
}
