import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Shoe } from './Shoes';

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    Detail: Shoe;
    NotFound: undefined;
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
>;

export type RootBottomTabParamList = {
    Home: undefined;
    Search: undefined;
    Calendar: undefined;
    Favorite: undefined;
};

export type RootBottomTabScreenProps<Screen extends keyof RootBottomTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<RootBottomTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
>;