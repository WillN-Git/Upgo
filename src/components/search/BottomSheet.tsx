import React, { useEffect, useState } from 'react';
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
import { useBrands, useStore } from '../../hooks';
import { toMonthName } from '../../utils/helpers';

interface IProps {
    onClose: () => void;
    isOpen: boolean;
}

export default function BottomSheet({ onClose, isOpen }: IProps) {
    const [language, setLanguage] = useState('');

    // Brands data
    const { data, error, isSuccess, isLoading } = useBrands();

    // Filters
    const setFilter = useStore((state) => state.setFilter);
    const [gendersFilter, setGendersFilter] = useState<Gender[]>([]);
    const [brandsFilter, setBrandsFilter] = useState<string[]>([]);

    useEffect(() => {
        setFilter(gendersFilter[gendersFilter.length - 1]);
    }, [gendersFilter]);

    useEffect(() => {
        setFilter(brandsFilter[brandsFilter.length - 1]);
    }, [brandsFilter]);

    useEffect(() => {
        console.log('LANGAGE => ', language);
        setFilter(language);
    }, [language]);

    return (
        <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay={false}>
            <Actionsheet.Content>
                {/* Header */}
                <Box>
                    <Center>
                        <Text fontSize="3xl" fontFamily="Inter_900Black">
                            Filters
                        </Text>
                    </Center>
                </Box>

                {/* Gender section */}
                <Box>
                    {/* Title */}
                    <Title text="Genders" />

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
                    <Title text="Brands" />

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
                                maxToRenderPerBatch={40}
                                initialNumToRender={10}
                                updateCellsBatchingPeriod={0}
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
                    <Title text="Range" />

                    <InputRange
                        minValue={0}
                        maxValue={722}
                        onChangeMin={() => {}}
                        onChangeMax={() => {}}
                    />
                </Box>

                <Box>
                    {/* Title */}
                    <Title text="Date" />

                    <HStack justifyContent="space-between">
                        <Select
                            mr={1}
                            placeholder="Year"
                            selectedValue={language}
                            width={150}
                            onValueChange={(itemValue: string) =>
                                setLanguage(itemValue)
                            }
                        >
                            {[...new Array(5)].map((_, index) => (
                                <Select.Item
                                    key={`select-item-year-${2022 - index}`}
                                    label={`${2022 - index}`}
                                    value={`${2022 - index}`}
                                />
                            ))}
                        </Select>

                        <Select
                            placeholder="Month"
                            selectedValue={language}
                            width={150}
                            onValueChange={(itemValue: string) => {
                                console.log('CHANGE !');
                                setLanguage(itemValue);
                            }}
                        >
                            {[...new Array(12)].map((_, index) => (
                                <Select.Item
                                    key={`select-item-month-${12 - index}`}
                                    label={toMonthName(12 - index)}
                                    value={
                                        index < 10
                                            ? `0${12 - index}`
                                            : `${12 - index}`
                                    }
                                />
                            ))}
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
