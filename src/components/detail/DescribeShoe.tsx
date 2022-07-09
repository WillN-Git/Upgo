import React, { useState } from 'react';
import { Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

interface IProps {
    description: string;
}

export default function DescribeShoe({ description }: IProps) {
    const [readMore, setReadMore] = useState(false);

    return (
        <>
            {description != '' && (
                <>
                    <Text fontSize="md" mb={3} fontFamily="Inter_700Bold">
                        Description
                    </Text>

                    {readMore ? (
                        <Text>{description}</Text>
                    ) : (
                        <Text numberOfLines={4}>{description}</Text>
                    )}

                    <TouchableOpacity
                        onPress={() => setReadMore(!readMore)}
                        style={{ marginVertical: 10 }}
                    >
                        <Text
                            fontFamily="Roboto_500Medium"
                            textDecorationLine="underline"
                            textDecorationColor="black"
                        >
                            {readMore ? 'Réduire.' : 'Lire plus...'}
                        </Text>
                    </TouchableOpacity>
                </>
            )}
        </>
    );
}
