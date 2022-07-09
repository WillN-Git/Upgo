import React from 'react';
import { Input, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

interface IProps {
    handleChange: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ handleChange }: IProps) {
    return (
        <Input
            placeholder="Rechercher..."
            width="80%"
            m="auto"
            borderRadius="4"
            py="3"
            px="1"
            fontSize="14"
            focusOutlineColor="black"
            onChange={(ev) => handleChange(ev.nativeEvent.text)}
            InputLeftElement={
                <Icon
                    m="2"
                    ml="3"
                    size="6"
                    color="gray.400"
                    as={<MaterialIcons name="search" />}
                />
            }
        />
    );
}
