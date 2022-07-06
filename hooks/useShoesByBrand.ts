import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import { useStore } from '.';
import { Shoes } from '../types/Shoes';
import { API_URL } from '../utils/constants';

const getShoesByBrand = async () => {
    const brandSelected = useStore((state) => state.brandSelected);

    console.log('SLED => ', brandSelected);

    const { data } = await axios.get(
        `${API_URL}/browse?productCategory=sneakers&brand=${brandSelected}`,
        {
            withCredentials: true,
        }
    );

    const shoes = data.Products;

    return shoes;
};

export default function useShoesByBrand(
    brand = 'Vans'
): UseQueryResult<Shoes[], unknown> {
    return useQuery(['brand', brand], getShoesByBrand);
}
