
import React, { useEffect, useState } from 'react'
import ListComponent from '../shared/components/ListComponent'
import WeatherWindow from '../shared/windows/WeatherWindow'
import { useUserStore } from '../shared/store/user.store'
import useModal from '../hooks/useModal'
import useUser from '../hooks/useUsers'
import { WindowList } from '../types/windows.enum'
import { useWeatherStore } from '../shared/store/weather.store'

function FetchPage() {
    const {isOpen, window} = useModal();
    const weather = useWeatherStore((state)=>state.weather);
    const users = useUserStore((state)=>state.users);
    const {fetchUser} = useUser();
    console.log(weather)
    useEffect(()=>{
      if(users.length===0){
        fetchUser();
      }
    },[])

  return (
    <div>
        {isOpen&&weather&&window===WindowList.WeatherWindow&&<WeatherWindow isOpenStatus={isOpen} data={weather!}/>}
        <ListComponent data={users}/>
    </div>
  )
}

export default FetchPage