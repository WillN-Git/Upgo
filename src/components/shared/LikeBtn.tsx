import React, { memo, useState } from 'react';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { MotiPressable } from 'moti/interactions';
import { Shoe } from '../../types';
import { useStore } from '../../hooks';

interface IProps {
    item: Shoe;
}

type inameType = 'heart' | 'heart-o';

function LikeBtn({ item }: IProps) {
    const [iname, setIname] = useState<inameType>('heart-o');
    const addLikedShoe = useStore((state) => state.addLikedShoe);
    const removeLikedShoe = useStore((state) => state.removeLikedShoe);

    const onPress = () => {
        setIname(iname === 'heart' ? 'heart-o' : 'heart');

        if (iname === 'heart') {
            removeLikedShoe(item.id);
        } else {
            addLikedShoe(item);
        }
    };

    return (
        <MotiPressable
            onPress={onPress}
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

export default memo(LikeBtn);
