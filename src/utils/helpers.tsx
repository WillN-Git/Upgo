export function dollarToEuro(dollar: number) {
    const euro = Math.round(dollar * 0.98);

    return euro;
}

export function checkTheGoodPrice(current: number, last: number) {
    return current === 0 ? last : current;
}

// export function getCleanPrice()
