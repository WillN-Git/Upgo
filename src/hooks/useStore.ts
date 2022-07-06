import create from 'zustand';

const useStore = create((set) => ({
    // Brand Selection
    brandSelected: 'Nike',
    changeBrand: (brand: string) => set(() => ({ brandSelected: brand })),
}));

export default useStore;
