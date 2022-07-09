export interface Shoe {
    id: string;
    brand: string;
    category: string;
    gender: string;
    description: string;
    countryOfManufacture: string;
    media: ShoeMediaImage;
    name: string; // Shoe Category's name
    releaseDate: string;
    releaseTime: number;
    retailPrice: number;
    shoe: string; // Shoe name
    year: number;
    market: ShoeMarket;
    _tags: Array<string>;
    selling_countries: Array<string>;
}

export interface ShoeMediaImage {
    imageUrl: string;
    smallImageUrl: string;
    thumbUrl: string;
}

export interface ShoeMarket {
    numberOfAsks: number;
    createdAt: string;
    lastSale: number;
}
