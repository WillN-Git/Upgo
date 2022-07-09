import React, { useState } from 'react';
import {
    Box,
    Text,
    Badge,
    Center,
    HStack,
    Select,
    Actionsheet,
} from 'native-base';
import InputRange from './InputRange';

interface IProps {
    onClose: () => void;
    isOpen: boolean;
}

export default function BottomSheet({ onClose, isOpen }: IProps) {
    const [language, setLanguage] = useState('');

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
                        <CustomBadge text="Hommes" active />

                        <CustomBadge text="Femmes" />

                        <CustomBadge text="Enfants" />
                    </HStack>
                </Box>

                {/* Brand section */}
                <Box>
                    {/* Title */}
                    <Title text="Marque" />

                    {/* Badges */}
                    <HStack flexWrap="wrap" justifyContent="space-between">
                        <CustomBadge text="Nike" uppercase active />

                        <CustomBadge text="Adidas" uppercase />

                        <CustomBadge text="Jordan" uppercase />
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

function CustomBadge({
    text,
    uppercase,
    active,
}: {
    text: string,
    uppercase?: boolean,
    active?: boolean,
}) {
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
