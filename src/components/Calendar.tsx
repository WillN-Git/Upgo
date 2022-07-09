import React, { useState, useEffect } from 'react';
import { Pressable, Image, Text, Center } from 'native-base';
import { Agenda } from 'react-native-calendars';
import { API_BROWSE_URL } from '../utils/constants';
import { RootBottomTabParamList, RootStackParamList, Shoe } from '../types';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function Calendar({
    navigation,
}: {
    navigation: CompositeNavigationProp<
        BottomTabNavigationProp<RootBottomTabParamList, 'Calendar', undefined>,
        NativeStackNavigationProp<RootStackParamList, string, undefined>
    >,
}) {
    const [items, setItems] = useState<{ [key: string]: Shoe[] }>({});

    const getData = async () => {
        const fetchedData = await fetch(`${API_BROWSE_URL}&year=2022`).then(
            (res) => res.json()
        );

        const data: Shoe[] = fetchedData.Products;

        const mappedData = data.map((shoe) => ({ ...shoe }));

        const reduced = mappedData.reduce(
            (acc: { [key: string]: Shoe[] }, currentValue: Shoe) => {
                const { releaseDate, ...rest } = currentValue;

                acc[releaseDate] = [{ releaseDate, ...rest }];

                return acc;
            },
            {}
        );

        setItems(reduced);
    };

    useEffect(() => {
        getData();
    }, []);

    const renderItem = (item: Shoe) => {
        return (
            <Pressable onPress={() => navigation.push('Detail', item)}>
                <Center p={2} mt={17} shadow="9" bg="white">
                    <Image
                        source={{ uri: item.media.thumbUrl }}
                        alt="shoe"
                        w={120}
                        h={120}
                        resizeMode="contain"
                    />
                    <Text fontSize="md" fontFamily="Roboto_400Regular">
                        {item.name}
                    </Text>
                </Center>
            </Pressable>
        );
    };

    return (
        <>
            <Agenda
                items={items}
                selected={'2022-07-07'}
                renderItem={renderItem}
            />
        </>
    );
}
