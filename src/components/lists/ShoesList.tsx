import React, { useState, useEffect } from 'react';
import { Box, Text, Image } from 'native-base';
import { API_URL } from '../../utils/constants';
import { Shoe } from '../../types/Shoes';

interface IProps {
    brand: string;
}

export default function ShoesList({ brand }: IProps) {
    const [shoes, setShoes] = useState<Shoe[]>();

    // Fetch shoes
    const getShoes = async () => {
        await fetch(`${API_URL}/browse?productCategory=sneakers&brand=${brand}`)
            .then((res) => res.json())
            .then((res) => {
                setShoes(res.Products);
            });
    };

    useEffect(() => {
        getShoes();
    }, [brand]);

    return (
        <Box bg="blueGray.200" position="relative">
            {shoes && (
                <>
                    <Image
                        source={{ uri: shoes[0].media.thumbUrl }}
                        alt="shoes"
                        w="100"
                        h="100"
                        resizeMode="contain"
                    />
                    <Text>{shoes[0].name}</Text>
                </>
            )}
        </Box>
    );
}
