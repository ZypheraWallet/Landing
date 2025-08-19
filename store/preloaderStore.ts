import { create } from 'zustand';

type PreloaderStore = {
    loaded: boolean;
    compliteLoad: () => void;
};

export const usePreloaderStore = create<PreloaderStore>((set) => ({
    loaded: false,
    compliteLoad: () => set({ loaded: true }),
}));