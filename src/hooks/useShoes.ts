import axios from 'axios';
import { useQuery } from 'react-query';
import { API_BROWSE_URL } from '../utils/constants';
import { Shoe } from '../types';

const LAST_3_MOUNTH_TIMESTAMP = 1646694004;

const getShoes = async () => {
    const { data } = await axios.get(
        `${API_BROWSE_URL}&releaseTime=gte-${LAST_3_MOUNTH_TIMESTAMP}`,
        {
            withCredentials: true,
        }
    );

    const shoes: Shoe[] = data.Products;

    return shoes;
};

export default function useShoes() {
    return useQuery('recent_three_mount_shoes', getShoes);
}
