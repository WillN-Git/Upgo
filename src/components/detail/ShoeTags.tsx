import React from 'react';
import { View } from 'react-native';
import { Text, Badge } from 'native-base';

interface IProps {
    tags: Array<string>;
}

export default function ShoeTags({ tags }: IProps) {
    return (
        <>
            <Text fontSize="md" my={3} fontFamily="Inter_700Bold">
                Tags
            </Text>
            {/* Tags */}
            <View
                style={{
                    borderRadius: 100,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {tags.map((item, index) => (
                    <Badge
                        key={`tag-${index}`}
                        bg="gray.100"
                        px={5}
                        py={1}
                        mt={1}
                        borderRadius={100}
                        borderColor="black"
                        borderWidth={2}
                        mx={1}
                    >
                        <Text textAlign="center">{item}</Text>
                    </Badge>
                ))}
            </View>
        </>
    );
}
