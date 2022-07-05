import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from '../utils/constants';

const getBrands = async () => {
    const { data } = await axios.get(
        `${API_URL}/browse?productCategory=sneakers`,
        {
            withCredentials: true,
        }
    );

    const brands = Object.keys(data.Facets.brand);

    return brands;
};

export default function useBrands() {
    return useQuery('brands', getBrands);
}
