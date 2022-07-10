import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Pressable } from 'native-base';
import {
    API_BROWSE_URL,
    INITIAL_TIMESTAMP,
    MAX_WIDTH,
} from '../../utils/constants';
import { Shoe } from '../../types/Shoes';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList, RootStackParamList } from '../../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ShoeBox from './ShoeBox';
import { useShoesByBrand } from '../../hooks';

interface IProps {
    brand: string;
    navigation: CompositeNavigationProp<
        BottomTabNavigationProp<RootBottomTabParamList, 'Home', undefined>,
        NativeStackNavigationProp<RootStackParamList, 'Root', undefined>
    >;
}

export default function ShoesList({ brand, navigation }: IProps) {
    const [offset, setOffset] = useState(1); // It's like page number
    const { data: shoes, error, isSuccess, isLoading } = useShoesByBrand(brand); // The Whole data
    const [dataSource, setDataSource] = useState<Shoe[]>([]); // Contains limited number of data
    const windowSize = shoes && shoes.length > 50 ? shoes.length / 4 : 21;
    const num = 15; // How many data will be loaded for every 'onReachEnd'
    const initialLoadNumber = 10; // How many data will be loaded on the first open

    // Set data on first open
    useEffect(() => {
        if (shoes && dataSource.length < shoes?.length) {
            if (offset === 1) {
                setDataSource(shoes.slice(0, offset * initialLoadNumber));
            }
        }
    }, [shoes, brand]);

    const getDataSource = () => {
        if (shoes && dataSource.length < shoes.length && shoes.length != 0) {
            setOffset(offset + 1);
            setDataSource(shoes.slice(0, offset * num));
        }
    };

    const THUMB_BOX_SIZE = MAX_WIDTH * 0.5 + 30;
    const THUMB_BOX_MARGIN = (MAX_WIDTH - THUMB_BOX_SIZE) / 2;
    const THUMB_SIZE = THUMB_BOX_SIZE * 0.9;

    const renderItem = ({ item }: { item: Shoe }) => (
        <Pressable
            onPress={() => navigation.push('Detail', item)}
            w={THUMB_BOX_SIZE}
        >
            {shoes && <ShoeBox item={item} thumbsize={THUMB_SIZE} />}
        </Pressable>
    );

    console.log(3);

    return (
        <>
            {shoes && shoes.length != 0 && (
                <FlatList
                    data={dataSource}
                    renderItem={renderItem}
                    horizontal
                    bounces={false}
                    keyExtractor={(item) => `shoe-${brand}-${item.id}`}
                    style={{ flexGrow: 0 }}
                    decelerationRate="fast"
                    snapToInterval={THUMB_BOX_SIZE}
                    contentContainerStyle={{
                        paddingHorizontal: THUMB_BOX_MARGIN,
                        paddingVertical: 5,
                    }}
                    initialNumToRender={initialLoadNumber}
                    windowSize={windowSize}
                    maxToRenderPerBatch={num}
                    updateCellsBatchingPeriod={num / 2}
                    onEndReachedThreshold={
                        offset < 10 ? offset * (offset == 1 ? 2 : 2) : 20
                    } // While you scolling the offset number and your data number will increases. So endReached will be triggered earlier because our data will be too many
                    onEndReached={getDataSource}
                    removeClippedSubviews={true}
                    showsHorizontalScrollIndicator={false}
                />
            )}
        </>
    );
}
