import { useRef, useMemo } from 'react';
import { Dimensions } from 'react-native';
import {
    PanGestureHandlerGestureEvent,
    State,
} from 'react-native-gesture-handler';
import Animated, {
    Value,
    event,
    set,
    block,
    eq,
    add,
    cond,
    lessThan,
    greaterThan,
} from 'react-native-reanimated';

const { width: MAX_WIDTH } = Dimensions.get('screen');
export const THRESHOLD = 80;
export const CURSOR_SIZE = 20;

export default function usePanGesture(initialPos: number) {
    const transX = useRef(new Value(initialPos)).current;
    const offsetX = useRef(new Value(initialPos)).current;

    const onGestureHandle = useMemo(() => {
        return Animated.event([
            {
                nativeEvent: ({ translationX: x, state }) =>
                    block([
                        cond(lessThan(add(offsetX, x), 0), set(transX, 0), [
                            cond(
                                greaterThan(
                                    add(offsetX, x),
                                    MAX_WIDTH - THRESHOLD
                                ),
                                set(
                                    transX,
                                    MAX_WIDTH - (THRESHOLD + CURSOR_SIZE)
                                ),
                                set(transX, add(offsetX, x))
                            ),
                        ]),
                        cond(eq(state, State.END), [
                            set(offsetX, add(offsetX, x)),
                        ]),
                    ]),
            },
        ]);
    }, [transX, offsetX]);

    return { transX, onGestureHandle };
}

// const transX = useSharedValue<number>(0);
// const offsetX = useSharedValue<number>(0);

// const onGestureHandle =
//     useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
//         onActive: (ev) => {
//             transX.value = ev.translationX;
//             const x = ev.translationX;

//             if (offsetX.value + x < 0) {
//                 transX.value = 0;
//             } else if (offsetX.value > x) {
//                 transX.value = MAX_WIDTH - 20;
//             } else {
//                 transX.value = offsetX.value + x;
//             }
//         },
//         onEnd: (ev) => {
//             offsetX.value += ev.translationX;
//         },
//     });
