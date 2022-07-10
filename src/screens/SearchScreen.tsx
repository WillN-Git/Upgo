import React, { useMemo, useState } from 'react';
import { Box, HStack } from 'native-base';
import { Searchbar, Filter } from '../components';
import { RootBottomTabScreenProps, Shoe } from '../types';
import SearchShoeList from '../components/search/SearchShoeList';
import { dollarToEuro } from '../utils/helpers';

export default function SearchScreen({
    navigation,
    route,
}: RootBottomTabScreenProps<'Search'>) {
    const [dataSource, setDataSource] = useState<Shoe[]>([]); // The data that will be rendered

    // Search system
    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = useMemo(() => {
        if (searchTerm != '') {
            const conditions = searchTerm
                .split(' ')
                .map((term) => term.toLowerCase());

            return [
                ...new Set(
                    dataSource.filter((shoe) => {
                        // Shoe name
                        const includeName = conditions.some((term) =>
                            shoe.name.toLowerCase().includes(term)
                        );

                        // Shoe brand
                        const includeBrand = conditions.some((term) =>
                            shoe.brand.toLowerCase().includes(term)
                        );

                        // Shoe gender
                        const includeGender = conditions.some((term) =>
                            shoe.gender.toLowerCase().includes(term)
                        );

                        // Shoe date
                        const includeDate = conditions.some((term) =>
                            shoe.releaseDate.toLowerCase().includes(term)
                        );

                        // Shoe price
                        const includePrice = conditions.some((term) =>
                            ('' + dollarToEuro(shoe.retailPrice)).includes(term)
                        );

                        return (
                            includeBrand ||
                            includeDate ||
                            includeGender ||
                            includeName ||
                            includePrice
                        );
                    })
                ),
            ];
        } else {
            return dataSource;
        }
    }, [searchTerm, dataSource]);

    return (
        <Box pt="16">
            {/* Header */}
            <HStack px={5}>
                <Searchbar handleChange={setSearchTerm} />

                <Filter />
            </HStack>

            {/* Shoes List */}
            {filteredData && (
                <SearchShoeList
                    filteredData={filteredData}
                    navigation={navigation}
                    dataSource={dataSource}
                    setDataSource={setDataSource}
                />
            )}
        </Box>
    );
}
