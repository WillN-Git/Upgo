import axios from 'axios';
import { useQuery } from 'react-query';
import { API_BROWSE_URL } from '../utils/constants';
import { Shoe } from '../types';

const getShoes = async (page: number) => {
    const { data } = await axios.get(`${API_BROWSE_URL}&page=${page}`, {
        withCredentials: true,
    });

    const shoes: Shoe[] = data.Products;

    return shoes;
};

export default function useShoes(page: number) {
    return useQuery('query-all-shoes', () => getShoes(page));
}
