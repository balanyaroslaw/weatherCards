import { create } from "zustand";

interface StoreState {
    loading:boolean;
    setLoading: (status:boolean)=> void;
}

export const useLoadigStore = create<StoreState>((set) => ({
    loading:false,
    setLoading:(status:boolean) => set({loading:status}),
}));