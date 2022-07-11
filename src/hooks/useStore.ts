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

    // Like system
    likedShoes: [],
    addLikedShoe: (shoes: Shoe) =>
        set((state) => ({
            likedShoes: [...new Set([...state.likedShoes, shoes])],
        })),
    removeLikedShoe: (id: string) =>
        set((state) => ({
            likedShoes: state.likedShoes.filter((shoe) => shoe.id != id),
        })),

    // Filters
    filter: [],
    setFilter: (filter: string) => {
        set((state) => {
            if (filter) {
                const cleanFilter = filter.toLowerCase();

                const include = state.filter.includes(cleanFilter);

                if (include) {
                    return {
                        filter: state.filter.filter((f) => f === cleanFilter),
                    };
                } else {
                    return {
                        filter: [...new Set([...state.filter, cleanFilter])],
                    };
                }
            }
        });
    },
    filterRange: [0, 722],
    setFilterRange: (range: number[]) =>
        set((state) => ({ filterRange: range })),
}));

export default useStore;
