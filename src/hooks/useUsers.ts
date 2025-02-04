import { useEffect } from "react";
import { useUserStore } from "../shared/store/user.store";
import userService from "../shared/services/user.service";
import { useLoadigStore } from "../shared/store/loading.store";
import { User } from "../types/user.type";

const useUser = () => {
    const addUser = useUserStore((state) => state.addUser);

    const setSaved = useUserStore((state)=>state.setSavedUsers);
    const setCurrentUser = useUserStore((state)=>state.setCurrentUser);
    const setLoading = useLoadigStore((state)=>state.setLoading);

    const fetchUser = async () => {
      setLoading(true);
      const newUser = await userService.getRandomUser();
      if(newUser){
        setLoading(false);
      }
      addUser(newUser);
    };

    const setSavedUsers = (users:User[]) => {
      setSaved(users);
    };

    const setCurrent = (user:User) => {
      setCurrentUser(user)
    };
  
    return { fetchUser, setSavedUsers, setCurrent};
  };

export default useUser;