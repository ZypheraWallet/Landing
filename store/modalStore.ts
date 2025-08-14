import { create } from 'zustand';

type ModalStore = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const useLanguageModal = create<ModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));

export const useOpenWalletModal = create<ModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));