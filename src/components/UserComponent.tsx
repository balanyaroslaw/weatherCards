import { useEffect, useState } from 'react';
import { User } from '../types/user.type';
import useWeather from '../hooks/useWeather';
import useModal from '../hooks/useModal';
import { WindowList } from '../types/windows.enum';
import { LOCALSTORAGE_KEYS, ROUTER_KEYS } from '../shared/keys';
import useUser from '../hooks/useUsers';
import { useNavigate } from 'react-router-dom';

interface UserComponentProps {
  data: User;
}

function UserComponent({ data }: UserComponentProps) {
  const { fetchWeather } = useWeather();
  const { openModal } = useModal();
  const [addedUser, setAddedUser] = useState<boolean>(false); 
  const [userExists, setUserExists] = useState<boolean>(false); 

  const users = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.USERS)!) || [];

  const { setSavedUsers, setCurrent } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    setUserExists(users.some((user: User) => user.login.uuid === data.login.uuid));
    console.log(users)
  }, [users, data, addedUser]);

  const getWeather = () => {
    fetchWeather(data);
    openModal(WindowList.WeatherWindow);
    setCurrent(data);
  };

  const addSavedUsers = () => {
    const users = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.USERS)!) || [];
    
    if (!users.some((user: User) => user.login.uuid === data.login.uuid)) {
      const newUsers = [data, ...users];
      localStorage.setItem(LOCALSTORAGE_KEYS.USERS, JSON.stringify(newUsers));
      setSavedUsers(newUsers);
      setAddedUser(true);
      setUserExists(true);
    }
  };
  
  const removeSavedUser = () => {
    const users = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.USERS)!) || [];
    
    if (users.some((user: User) => user.login.uuid === data.login.uuid)) {
      const newUsers = users.filter((user: User) => user.login.uuid !== data.login.uuid);
      localStorage.setItem(LOCALSTORAGE_KEYS.USERS, JSON.stringify(newUsers));
      setSavedUsers(newUsers);
      setAddedUser(false);
      setUserExists(false);
    }
  };

  const onMapClick = () => {
    setCurrent(data);
    navigate(ROUTER_KEYS.MAP);
  };

  return (
    <div className="relative flex flex-col sm:flex-row items-center p-10 bg-[#F6F6F6] rounded-lg shadow-lg mx-auto w-full max-w-2xl h-auto">
      <div className="w-full sm:w-64 h-auto rounded-md overflow-hidden border border-gray-300">
        <img
          src={data.picture.large}
          alt={data.name.first}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 mt-8 sm:mt-0 sm:ml-10 space-y-4 text-center sm:text-left">
        <span className="text-2xl font-semibold">
          Name: {[data.name.title, data.name.first, data.name.last].filter(Boolean).join(' ')}
        </span>
        <span className="text-gray-600 text-lg">Gender: {data.gender}</span>
        <span className="text-gray-600 text-lg">Location: {`${data.location.city}, ${data.location.state}`}</span>
        <span className="text-gray-600 text-lg">Email: {data.email}</span>

        <div className="flex flex-col gap-3 mt-6 justify-center sm:justify-start">
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              className={`${
                userExists
                  ? 'bg-red-500 hover:bg-red-600 px-5 sm:px-8'
                  : 'bg-blue-500 hover:bg-blue-600 px-8 sm:px-10'
              } text-white py-2 text-xl sm:text-2xl rounded-lg shadow-lg transition transform hover:scale-105`}
              onClick={() => (userExists ? removeSavedUser() : addSavedUsers())}
            >
              {userExists ? 'Remove' : 'Save'}
            </button>
            <button
              className="bg-green-500 text-white px-8 sm:px-10 py-2 text-xl sm:text-2xl rounded-lg shadow-lg hover:bg-green-600 transition transform hover:scale-105"
              onClick={() => getWeather()}
            >
              Show Weather
            </button>
          </div>
          <button
            className="bg-yellow-500 text-white px-8 sm:px-10 py-2 text-lg sm:text-xl rounded-lg shadow-lg hover:bg-yellow-600 transition transform hover:scale-105"
            onClick={() => onMapClick()}
          >
            Show on Map
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserComponent;
