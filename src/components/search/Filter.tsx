import React, { useMemo } from 'react';
import { useDisclose } from 'native-base';
import { Feather as Icon } from '@expo/vector-icons';
import { MotiPressable } from 'moti/interactions';
import BottomSheet from './BottomSheet';

export default function Filter() {
    const { isOpen, onOpen, onClose } = useDisclose();

    return (
        <>
            <MotiPressable
                style={{
                    padding: 13,
                    borderRadius: 8,
                    borderColor: 'gray',
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={onOpen}
                animate={useMemo(
                    () =>
                        ({ pressed }) => {
                            'worklet';

                            return {
                                scale: pressed ? 0.7 : 1,
                            };
                        },
                    []
                )}
            >
                <Icon
                    name="sliders"
                    color="black"
                    size={25}
                    style={{ transform: [{ rotateZ: '90deg' }] }}
                />
            </MotiPressable>

            <BottomSheet onClose={onClose} isOpen={isOpen} />
        </>
    );
}
