import create from 'zustand';
import { Shoe } from '../types';

const useStore = create((set) => ({
    // Brand Selection
    brandSelected: 'Nike',
    changeBrand: (brand: string) => set(() => ({ brandSelected: brand })),

    // Brand Store
    shoesStoredBrand: [],
    setShoesStoreBrand: (brand: string, shoes: Shoe[]) =>
        set((state) => ({
            shoesStoreBrand: [
                ...state.shoesStoredBrand,
                { name: brand, shoes },
            ],
        })),
}));

export default useStore;
