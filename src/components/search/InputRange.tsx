import React, { memo, useRef } from 'react';
import { View, TextInput, Dimensions, StyleSheet } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import {
    GestureHandlerRootView,
    PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, { call, useCode } from 'react-native-reanimated';
import { usePanGesture } from '../../hooks';
import { THRESHOLD, CURSOR_SIZE } from '../../hooks/usePanGesture';

const { width: WIDTH } = Dimensions.get('screen');

interface IProps {
    minValue: number;
    maxValue: number;
    onChangeMin: (min: number) => void;
    onChangeMax: (max: number) => void;
}

const AnimatedLine = Animated.createAnimatedComponent(Line);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

function InputRange({ minValue, maxValue, onChangeMin, onChangeMax }: IProps) {
    // Range
    const min = useRef(null);
    const max = useRef(null);

    // Cursors
    const { Pan: Pan1, transX: x1 } = PanComponent(0);
    const { Pan: Pan2, transX: x2 } = PanComponent(WIDTH);

    // x1 text Value handler
    useCode(
        () => [
            call([x1], ([value]) => {
                if (min.current) {
                    onChangeMin(
                        minValue + (value / WIDTH) * (maxValue - minValue)
                    );
                    min.current.setNativeProps({
                        text: `${Math.round(
                            minValue + (value / WIDTH) * (maxValue - minValue)
                        )}`,
                    });
                }
            }),
        ],
        [x1]
    );

    // x2 text Value handler
    useCode(
        () => [
            call([x2], ([value]) => {
                if (max.current) {
                    onChangeMax(
                        minValue + (value / WIDTH) * (maxValue - minValue)
                    );
                    max.current.setNativeProps({
                        text: `${Math.round(
                            minValue + (value / WIDTH) * (maxValue - minValue)
                        )}`,
                    });
                }
            }),
        ],
        [x2]
    );

    return (
        <GestureHandlerRootView>
            <View style={styles.container}>
                <View style={styles.slider} />

                <Svg
                    height="6"
                    width={WIDTH - THRESHOLD}
                    style={{ position: 'absolute' }}
                >
                    <AnimatedLine
                        stroke="black"
                        strokeWidth="12"
                        x1={x1}
                        x2={x2}
                        y1={0}
                        y2={0}
                    />
                </Svg>

                <Pan1 />
                <Pan2 />
            </View>

            <View style={styles.range}>
                <AnimatedTextInput
                    defaultValue={`${minValue}`}
                    editable={false}
                    ref={min}
                    style={styles.label}
                />
                <AnimatedTextInput
                    defaultValue={`${maxValue}`}
                    editable={false}
                    ref={max}
                    style={styles.label}
                />
            </View>
        </GestureHandlerRootView>
    );
}

function PanComponent(initialPos: number) {
    const { transX, onGestureHandle } = usePanGesture(initialPos);

    const Pan = () => (
        <PanGestureHandler
            onGestureEvent={onGestureHandle}
            onHandlerStateChange={onGestureHandle}
        >
            <Animated.View
                style={[styles.cursor, { transform: [{ translateX: transX }] }]}
            />
        </PanGestureHandler>
    );

    return { transX, Pan };
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40,
        justifyContent: 'center',
        position: 'relative',
    },
    slider: {
        height: 6,
        width: WIDTH - THRESHOLD,
        borderRadius: 6,
        backgroundColor: 'gray',
    },
    cursor: {
        height: CURSOR_SIZE,
        width: CURSOR_SIZE,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 3,
        backgroundColor: 'white',
        position: 'absolute',
    },
    range: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop: 8,
    },
    label: {
        fontSize: 16,
    },
});

export default memo(InputRange);
