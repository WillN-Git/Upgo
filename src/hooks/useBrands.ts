import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from '../utils/constants';
import { Brand } from '../types';

const getBrands = async () => {
    const { data } = await axios.get(
        `${API_URL}/browse?productCategory=sneakers`,
        {
            withCredentials: true,
        }
    );

    const brands: Brand[] = Object.entries(data.Facets.brand).map((value) => {
        return {
            name: value[0],
            qty: parseInt('' + value[1]),
        };
    });

    return brands;
};

export default function useBrands() {
    return useQuery('brands', getBrands);
}
