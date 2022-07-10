import React, { useState } from 'react';
import {
    Box,
    Text,
    Center,
    HStack,
    Select,
    Actionsheet,
    FlatList,
} from 'native-base';
import InputRange from './InputRange';
import CustomBadge from './CustomBadge';
import { Gender } from '../../types';
import { useBrands } from '../../hooks';

interface IProps {
    onClose: () => void;
    isOpen: boolean;
}

export default function BottomSheet({ onClose, isOpen }: IProps) {
    const [language, setLanguage] = useState('');

    // Brands data
    const { data, error, isSuccess, isLoading } = useBrands();

    // Filters
    const [gendersFilter, setGendersFilter] = useState<Gender[]>([]);
    const [brandsFilter, setBrandsFilter] = useState<string[]>([]);

    return (
        <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay={false}>
            <Actionsheet.Content>
                {/* Header */}
                <Box>
                    <Center>
                        <Text fontSize="3xl" fontFamily="Inter_900Black">
                            Filtres
                        </Text>
                    </Center>
                </Box>

                {/* Gender section */}
                <Box>
                    {/* Title */}
                    <Title text="Genres" />

                    {/* Badges */}
                    <HStack flexWrap="wrap" justifyContent="space-between">
                        <CustomBadge
                            name={Gender.Men}
                            text="Hommes"
                            filter={gendersFilter}
                            setFilter={setGendersFilter}
                        />

                        <CustomBadge
                            name={Gender.Women}
                            text="Femmes"
                            filter={gendersFilter}
                            setFilter={setGendersFilter}
                        />

                        <CustomBadge
                            name={Gender.Child}
                            text="Enfants"
                            filter={gendersFilter}
                            setFilter={setGendersFilter}
                        />
                    </HStack>
                </Box>

                {/* Brand section */}
                <Box>
                    {/* Title */}
                    <Title text="Marques" />

                    {/* Badges */}
                    <HStack flexWrap="wrap" justifyContent="space-between">
                        {data && (
                            <FlatList
                                data={data}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingLeft: 20 }}
                                keyExtractor={(item) =>
                                    `badge-filter-${item.name
                                        .split(' ')
                                        .join('-')}`
                                }
                                renderItem={({ item }) => (
                                    <CustomBadge
                                        name={item.name}
                                        text={item.name}
                                        filter={brandsFilter}
                                        setFilter={setBrandsFilter}
                                    />
                                )}
                            />
                        )}
                    </HStack>
                </Box>

                {/* Price Range */}
                <Box>
                    {/* Title */}
                    <Title text="Prix" />

                    <InputRange
                        minValue={0}
                        maxValue={100}
                        onChangeMin={() => console.log('Change min')}
                        onChangeMax={() => console.log('Change max')}
                    />
                </Box>

                <Box>
                    {/* Title */}
                    <Title text="Date de Sortie" />

                    <HStack justifyContent="space-between">
                        <Select
                            mr={1}
                            placeholder="Année"
                            selectedValue={language}
                            width={150}
                            onValueChange={(itemValue: string) =>
                                setLanguage(itemValue)
                            }
                        >
                            <Select.Item label="Année" disabled value="key0" />
                            <Select.Item label="ATM Card" value="key1" />
                            <Select.Item label="Debit Card" value="key2" />
                            <Select.Item label="Credit Card" value="key3" />
                            <Select.Item label="Net Banking" value="key4" />
                        </Select>

                        <Select
                            placeholder="Mois"
                            selectedValue={language}
                            width={150}
                            onValueChange={(itemValue: string) =>
                                setLanguage(itemValue)
                            }
                        >
                            <Select.Item label="Année" disabled value="key0" />
                            <Select.Item label="ATM Card" value="key1" />
                            <Select.Item label="Debit Card" value="key2" />
                            <Select.Item label="Credit Card" value="key3" />
                            <Select.Item label="Net Banking" value="key4" />
                        </Select>
                    </HStack>
                </Box>

                <Box h={100} />
            </Actionsheet.Content>
        </Actionsheet>
    );
}

function Title({ text }: { text: string }) {
    return (
        <Center my={4}>
            <Text fontSize="lg" fontFamily="Inter_700Bold">
                {text}
            </Text>
        </Center>
    );
}
