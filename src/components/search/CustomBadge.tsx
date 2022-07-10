import React, { useState } from 'react';
import { Text, Badge, Pressable } from 'native-base';

interface IProps {
    name: string;
    text: string;
    uppercase?: boolean;
    checked?: boolean;
    filter: string[];
    setFilter: (arg: string[]) => void;
}

export default function CustomBadge({
    name,
    text,
    checked,
    filter,
    setFilter,
    uppercase,
}: IProps) {
    const [active, setActive] = useState(false);

    const onPress = () => {
        let arr: Array<string>;

        if (!active) {
            arr = [...filter, name];
        } else {
            arr = [...filter];
            const locationIndex = filter.indexOf(name);

            arr.splice(locationIndex, 1);
        }

        setFilter(arr);
        setActive(!active);
    };

    return (
        <Pressable onPress={onPress}>
            <Badge
                px={5}
                py={3.5}
                mx={1}
                opacity={active || checked ? 1 : 0.3}
                borderColor="black"
                borderWidth={1}
                borderRadius="lg"
            >
                {uppercase ? (
                    <Text textTransform="uppercase">{text}</Text>
                ) : (
                    <Text>{text}</Text>
                )}
            </Badge>
        </Pressable>
    );
}
