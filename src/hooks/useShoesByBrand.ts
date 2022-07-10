import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import { Shoe } from '../types';
import { API_BROWSE_URL, INITIAL_TIMESTAMP } from '../utils/constants';

const getShoesByBrand = async (brand: string) => {
    const { data } = await axios.get(
        `${API_BROWSE_URL}&releaseTime=gte-${INITIAL_TIMESTAMP}&brand=${brand}`,
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
    return useQuery(`query-shoes-by-brand-${brand}`, () =>
        getShoesByBrand(brand)
    );
}
