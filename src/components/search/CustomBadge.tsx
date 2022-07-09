import React from 'react';
import { Text, Badge } from 'native-base';

interface IProps {
    text: string;
    uppercase?: boolean;
    active?: boolean;
}

export default function CustomBadge({ text, uppercase, active }: IProps) {
    return (
        <Badge
            px={5}
            py={3.5}
            mx={1}
            opacity={active ? 1 : 0.3}
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
    );
}
