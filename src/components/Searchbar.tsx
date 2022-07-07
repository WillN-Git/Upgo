import React from 'react';
import { Input, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export default function SearchBar() {
    return (
        <Input
            placeholder="Rechercher..."
            width="80%"
            m="auto"
            mt={10}
            borderRadius="4"
            py="3"
            px="1"
            fontSize="14"
            InputLeftElement={
                <Icon
                    m="2"
                    ml="3"
                    size="6"
                    color="gray.400"
                    as={<MaterialIcons name="search" />}
                />
            }
            InputRightElement={
                <Icon
                    m="2"
                    mr="3"
                    size="6"
                    color="gray.400"
                    as={<MaterialIcons name="mic" />}
                />
            }
        />
    );
}
