import { create } from "zustand";
import { User, Weather } from "../../types/user.type";

interface StoreState {
    loading:boolean;
    setLoading: (status:boolean)=> void;
}

export const useLoadigStore = create<StoreState>((set) => ({
    loading:false,
    setLoading:(status:boolean) => set({loading:status}),
}));