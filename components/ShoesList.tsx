import React, { useEffect } from 'react';
import { Box } from 'native-base';
import { API_URL } from '../utils/constants';

interface IProps {
    brand: string;
}

export default function ShoesList({ brand }: IProps) {
    const getShoes = async () => {
        await fetch(`${API_URL}/browse?productCategory=sneakers&brand=${brand}`)
            .then((res) => res.json())
            .then((res) => {
                console.log('PRODUCTS => ', res.Products);
            });
    };

    useEffect(() => {
        getShoes();
    }, []);

    return <Box />;
}
