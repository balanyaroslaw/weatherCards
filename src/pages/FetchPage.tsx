
import React, { useEffect, useState } from 'react'
import ListComponent from '../shared/components/ListComponent'
import WeatherWindow from '../shared/windows/WeatherWindow'
import { useModalStore } from '../shared/store/modal.store'
import { useUserStore } from '../shared/store/user.store'
import useModal from '../hooks/useModal'
import useUser from '../hooks/useUsers'

function FetchPage() {
    const {isOpen} = useModal();
    const weather = useUserStore((state)=>state.weather);
    const users = useUserStore((state)=>state.users);
    const {fetchUser} = useUser();

    useEffect(()=>{
      if(users.length===0){
        fetchUser();
      }
    },[])

  return (
    <div>
        {isOpen&&weather&&<WeatherWindow isOpenStatus={isOpen} data={weather!}/>}
        <ListComponent data={users}/>
    </div>
  )
}

export default FetchPage