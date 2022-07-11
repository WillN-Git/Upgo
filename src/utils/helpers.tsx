import { PropsWithChildren } from 'react';
import { Shoe } from '../types';

export function dollarToEuro(dollar: number) {
    const euro = Math.round(dollar * 0.98);

    return euro;
}

export function checkTheGoodPrice(current: number, last: number) {
    return current === 0 ? last : current;
}

export function arePropsEqual<IProps extends { item: Shoe }>(
    prevProps: Readonly<PropsWithChildren<IProps>>,
    nextProps: Readonly<PropsWithChildren<IProps>>
) {
    return prevProps.item.id === nextProps.item.id;
}

export function toMonthName(month: number) {
    const months = [ 'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December' ];

    return months[month - 1];
}
