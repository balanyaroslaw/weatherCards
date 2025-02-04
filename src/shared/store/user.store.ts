import { create } from "zustand";
import { User} from "../../types/user.type";

interface UserStoreState {
    users: User[];
    currentUser: User | null;
    savedUsers: User[];
    addUser: (user: User) => void;
    getUsers: () => User[];
    setSavedUsers: (users: User[]) => void;
    setCurrentUser: (user: User) => void;
  }
  
export const useUserStore = create<UserStoreState>((set, get) => ({
    users: [],
    currentUser: null,
    savedUsers: [],
    addUser: (user: User) => set((state) => ({ users: [user, ...state.users] })),
    getUsers: () => get().users,
    setSavedUsers: (savedUsers: User[]) => set({ savedUsers }),
    setCurrentUser: (user: User) => set({ currentUser: user }),
}));