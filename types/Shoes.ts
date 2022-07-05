export interface Shoes {
    id: string;
    brand: string;
    category: string;
    gender: string;
    countryOfManufacture: string;
    media: ShoesMediaImage;
    name: string; // Shoe Category's name
    releaseDate: string;
    releaseTime: number;
    retailPrice: number;
    shoe: string; // Shoe name
    year: number;
    market: ShoesMarket;
    _tags: Array<string>;
    selling_countries: Array<string>;
}

export interface ShoesMediaImage {
    imageUrl: string;
    smallImageUrl: string;
    thumbUrl: string;
}

export interface ShoesMarket {
    numberOfAsks: number;
    createdAt: string;
}
