import { Dimensions } from 'react-native';

export const { width: MAX_WIDTH, height: MAX_HEIGHT } =
    Dimensions.get('screen');

export const API_URL = 'https://stockx.com/api';

export const API_BROWSE_URL = `${API_URL}/browse?productCategory=sneakers`;

export const INITIAL_TIMESTAMP = 1584918000;
