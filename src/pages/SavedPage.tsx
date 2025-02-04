
import { useEffect} from 'react'
import ListComponent from '../shared/components/ListComponent'
import WeatherWindow from '../shared/windows/WeatherWindow'
import { useUserStore } from '../shared/store/user.store'
import useModal from '../hooks/useModal'
import { LOCALSTORAGE_KEYS } from '../shared/keys'
import useUser from '../hooks/useUsers'
import { WindowList } from '../types/windows.enum'
import { useWeatherStore } from '../shared/store/weather.store'

function SavedPage() {
    const {isOpen, window} = useModal();
    const weather = useWeatherStore((state)=>state.weather);
    const {setSavedUsers} = useUser();
    const savedUsers = useUserStore((state)=>state.savedUsers);

    useEffect(()=>{
      const usersFromStorage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.USERS)!)||[];
      setSavedUsers(usersFromStorage);
    },[])


  return (
    <div>
        {isOpen&&weather&&window===WindowList.WeatherWindow&&<WeatherWindow isOpenStatus={isOpen} data={weather!}/>}
        <ListComponent data={savedUsers}/>
    </div>
  )
}

export default SavedPage