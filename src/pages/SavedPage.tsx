
import React, { useEffect, useState } from 'react'
import ListComponent from '../shared/components/ListComponent'
import WeatherWindow from '../shared/windows/WeatherWindow'
import { useModalStore } from '../shared/store/modal.store'
import { useUserStore } from '../shared/store/user.store'
import useModal from '../hooks/useModal'
import { LOCALSTORAGE_KEYS } from '../shared/keys'
import { User } from '../types/user.type'
import useUser from '../hooks/useUsers'

function SavedPage() {
    const {isOpen} = useModal();
    const weather = useUserStore((state)=>state.weather);
    const {setSavedUsers} = useUser();
    const savedUsers = useUserStore((state)=>state.savedUsers);

    useEffect(()=>{
      const usersFromStorage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.USERS)!)||[];
      setSavedUsers(usersFromStorage);
    },[])


  return (
    <div>
        {isOpen&&weather&&<WeatherWindow isOpenStatus={isOpen} data={weather!}/>}
        <ListComponent data={savedUsers}/>
    </div>
  )
}

export default SavedPage