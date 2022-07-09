import { useRef, useMemo } from 'react';
import { Dimensions } from 'react-native';
import { State } from 'react-native-gesture-handler';
import {
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
        return event([
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
