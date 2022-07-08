import React, { useMemo, useState } from 'react';
import {
    Actionsheet,
    Badge,
    Center,
    HStack,
    Text,
    Box,
    Select,
    useDisclose,
} from 'native-base';
import { Feather as Icon, Entypo as CheckIcon } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { MotiPressable } from 'moti/interactions';
import InputRange from './InputRange';

const { height: HEIGHT } = Dimensions.get('screen');

export default function Filter() {
    const { isOpen, onOpen, onClose } = useDisclose();
    const [service, setService] = useState('');
    const [language, setLanguage] = React.useState<string>('');

    return (
        <>
            <MotiPressable
                style={{
                    padding: 13,
                    borderRadius: 8,
                    borderColor: 'gray',
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={onOpen}
                animate={useMemo(
                    () =>
                        ({ pressed }) => {
                            'worklet';

                            return {
                                scale: pressed ? 0.7 : 1,
                            };
                        },
                    []
                )}
            >
                <Icon
                    name="sliders"
                    color="black"
                    size={25}
                    style={{ transform: [{ rotateZ: '90deg' }] }}
                />
            </MotiPressable>

            <Actionsheet
                isOpen={isOpen}
                onClose={onClose}
                disableOverlay={false}
            >
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
                        {/* <Actionsheet.Item display="flex" alignItems="center"> */}
                        {/* Title */}
                        <Center>
                            <Text fontSize="lg" fontFamily="Inter_700Bold">
                                Genres
                            </Text>
                        </Center>

                        {/* Badges */}
                        <HStack flexWrap="wrap" justifyContent="space-between">
                            <Badge
                                px={5}
                                py={3.5}
                                mx={1}
                                borderColor="black"
                                borderWidth={1}
                                borderRadius="lg"
                            >
                                <Text>Hommes</Text>
                            </Badge>
                            <Badge
                                px={5}
                                py={3.5}
                                mx={1}
                                opacity={0.3}
                                borderColor="black"
                                borderWidth={1}
                                borderRadius="lg"
                            >
                                <Text>Femmes</Text>
                            </Badge>
                            <Badge
                                px={5}
                                py={3.5}
                                mx={1}
                                opacity={0.3}
                                borderColor="black"
                                borderWidth={1}
                                borderRadius="lg"
                            >
                                <Text>Enfants</Text>
                            </Badge>
                        </HStack>
                    </Box>

                    {/* Brand section */}
                    <Box>
                        {/* Title */}
                        <Center>
                            <Text fontSize="lg" fontFamily="Inter_700Bold">
                                Marque
                            </Text>
                        </Center>

                        {/* Badges */}
                        <HStack flexWrap="wrap" justifyContent="space-between">
                            <Badge
                                px={5}
                                py={3.5}
                                mx={1}
                                borderColor="black"
                                borderWidth={1}
                                borderRadius="lg"
                            >
                                <Text>NIKE</Text>
                            </Badge>
                            <Badge
                                px={5}
                                py={3.5}
                                mx={1}
                                opacity={0.3}
                                borderColor="black"
                                borderWidth={1}
                                borderRadius="lg"
                            >
                                <Text>ADIDAS</Text>
                            </Badge>
                            <Badge
                                px={5}
                                py={3.5}
                                mx={1}
                                opacity={0.3}
                                borderColor="black"
                                borderWidth={1}
                                borderRadius="lg"
                            >
                                <Text>JORDAN</Text>
                            </Badge>
                        </HStack>
                    </Box>

                    {/* Price Range */}
                    <Box>
                        {/* Title */}
                        <Center>
                            <Text fontSize="lg" fontFamily="Inter_700Bold">
                                Prix
                            </Text>
                        </Center>

                        <InputRange
                            minValue={0}
                            maxValue={100}
                            onChangeMin={() => console.log('Change min')}
                            onChangeMax={() => console.log('Change max')}
                        />
                    </Box>

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

                    {/* <Actionsheet.Item> */}
                    <Box h={100} />
                    {/* </Actionsheet.Item> */}
                </Actionsheet.Content>
            </Actionsheet>
        </>
    );
}
