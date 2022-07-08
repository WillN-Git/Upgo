import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    Detail: undefined;
    NotFound: undefined;
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
>;

export type RootBottomTabParamList = {
    Home: undefined;
    Search: undefined;
    Favorite: undefined;
};

export type RootBottomTabScreenProps<Screen extends keyof RootBottomTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<RootBottomTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
>;