import React, { useState } from 'react';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { MotiPressable } from 'moti/interactions';

export default function LikeBtn() {
    type inameType = 'heart' | 'heart-o';
    const [iname, setIname] = useState<inameType>('heart-o');

    return (
        <MotiPressable
            onPress={() => setIname(iname === 'heart' ? 'heart-o' : 'heart')}
            animate={({ pressed }) => {
                'worklet';

                return {
                    scale: pressed ? 0.7 : 1,
                    opacity: pressed ? 0.4 : 1,
                };
            }}
        >
            <Icon name={iname} size={25} color="black" />
        </MotiPressable>
    );
}
