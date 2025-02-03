import { create } from "zustand";
import { User, Weather } from "../../types/user.type";

interface StoreState {
    users: User[] | [];
    savedUsers:User[] | [];
    weather: Weather | null;
    addUser: (user: User) => void;
    getUsers: () => User[];
    setWeather:(weather:Weather | null) => void; 
    setSavedUsers:(users: User[]) => void;
}

export const useUserStore = create<StoreState>((set, get) => ({
    users: [],
    savedUsers:[],
    weather: null,
    addUser: (user:User) => set((state) => ({ users: [user, ...state.users!] })),
    getUsers: () => get().users!,
    setWeather:(weatherData:Weather | null) => set({weather:weatherData}),
    setSavedUsers:(savedUsers:User[])=>set({savedUsers:savedUsers})
}));