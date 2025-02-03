import { create } from "zustand";
import { WindowList } from "../../types/windows.enum";

interface StoreState {
    isOpen:boolean;
    window:WindowList | null;
    setIsOpen: (status:boolean, windowData:WindowList)=> void;
}

export const useModalStore = create<StoreState>((set) => ({
    isOpen:false,
    window: null,
    setIsOpen:(status:boolean, windowData:WindowList) => set({isOpen:status, window:windowData}),
}));