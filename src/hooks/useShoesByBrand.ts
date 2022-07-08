import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import useStore from './useStore';
import { Shoe } from '../types';
import { API_URL } from '../utils/constants';

const getShoesByBrand = async () => {
    const brandSelected = useStore((state) => state.brandSelected);

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
): UseQueryResult<Shoe[], unknown> {
    return useQuery(['brand', brand], getShoesByBrand);
}
