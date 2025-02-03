
import React, { useState } from 'react'
import { User, Weather } from '../types/user.type'
import weatherService from '../shared/services/weather.service';
import useSetWeather from '../hooks/useSetWeather';
import { useModalStore } from '../shared/store/modal.store';
import useModal from '../hooks/useModal';
import { WindowList } from '../types/windows.enum';
import { LOCALSTORAGE_KEYS } from '../shared/keys';
import useUser from '../hooks/useUsers';
interface UserComponentProps {
  data: User; 
}
function UserComponent({data}:UserComponentProps) {
  const {fetchWeather} = useSetWeather();

  const {openModal} = useModal();
  const users = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.USERS)!) || [];
  const userExists = users.some((user: User) => user.login.uuid === data.login.uuid);
  const [addedUser, setAddedUser] = useState<boolean>();
  const {setSavedUsers} = useUser();

  const getWeather = () =>{
    fetchWeather(data);
    openModal(WindowList.WeatherWindow);
  }


  const addSavedUsers = () =>{
    if (!userExists) {
      const newUsers = [data, ...users];
      localStorage.setItem(LOCALSTORAGE_KEYS.USERS, JSON.stringify(newUsers));
      setSavedUsers(newUsers);
      setAddedUser(true);
    }
  }

  const removeSavedUser = () =>{
    if (userExists) {
      const newUsers = users.filter((user:User)=>{return user.login.uuid!==data.login.uuid})
      localStorage.setItem(LOCALSTORAGE_KEYS.USERS, JSON.stringify(newUsers));
      setSavedUsers(newUsers);
    } 
  }

  return (
    <div className="relative flex flex-col sm:flex-row items-center p-6 bg-[#F6F6F6] rounded-lg shadow-md mx-auto w-full max-w-lg">
      <div className="w-full sm:w-40 h-auto rounded-md overflow-hidden border border-gray-300">
        <img 
          src={data.picture.large} 
          alt={data.name.first} 
          className="w-full h-full object-cover" 
        />
      </div>
  
      <div className="flex flex-col flex-1 mt-4 sm:mt-0 sm:ml-6 space-y-2 text-center sm:text-left">
        <span className="text-lg font-semibold">
          Name: {[data.name.title, data.name.first, data.name.last].filter(Boolean).join(" ")}
        </span>
        <span className="text-gray-600">Gender: {data.gender}</span>
        <span className="text-gray-600">Location: {`${data.location.city}, ${data.location.state}`}</span>
        <span className="text-gray-600">Email: {data.email}</span>
  
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center sm:justify-start">
          <button
            className={`${userExists || addedUser ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white px-6 py-2 rounded-lg shadow-md transition`}
            onClick={() => userExists ? removeSavedUser() : addSavedUsers()}
          >
            {userExists ? 'Remove' : 'Save'}
          </button>
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
            onClick={() => getWeather()}
          >
            Show Weather
          </button>
        </div>
      </div>
    </div>
  );
  
}

export default UserComponent