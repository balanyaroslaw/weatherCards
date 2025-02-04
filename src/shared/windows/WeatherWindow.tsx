
import React, { useEffect, useState } from 'react'
import { HourlyWeather, User, Weather } from '../../types/user.type'
import { useUserStore } from '../store/user.store';
import { WindowList } from '../../types/windows.enum';
import useModal from '../../hooks/useModal';
import useWeather from '../../hooks/useWeather';
import { useWeatherStore } from '../store/weather.store';
import WeatherComponent from '../components/WeatherComponent';
import HourlyWeatherComponent from '../components/HourlyWeatherComponent';
interface WeatherWindowProps {
    data: Weather;
    isOpenStatus: boolean;
  }

  
  const WeatherWindow: React.FC<WeatherWindowProps> = ({ data, isOpenStatus}) => {
    if (!isOpenStatus) return null; 
    console.log(data)
    const {closeModal} = useModal();
    const {fetchWeather, fetchHourlyWeather, restartCurrentWeather} = useWeather();
    const currentUser = useUserStore((state)=>state.currentUser);
    const hourlyWeatherData = useWeatherStore((state)=>state.hourlyWeather);
    const [hourlyWeather, setHourlyWeather] = useState<HourlyWeather|null>(null);
    const onClose = () => {
        closeModal(WindowList.WeatherWindow);
        restartCurrentWeather();
    }

    const openHourlyWeatherWindow = () =>{
        console.log(currentUser);
        fetchHourlyWeather(currentUser!);
    }

    const onCurrentWeather = () =>{
      setHourlyWeather(null);
      restartCurrentWeather();
    }

    useEffect(()=>{
      setHourlyWeather(hourlyWeatherData);
    },[hourlyWeatherData]);

    useEffect(() => {
      if (currentUser) {
        fetchWeather(currentUser);
  
        const interval = setInterval(() => {
          fetchWeather(currentUser);
        }, 5 * 60 * 1000);
  
        return () => clearInterval(interval);
      }
    }, [currentUser]);

    return (
      <div className="fixed top-0 inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Weather Information</h2>
            <button onClick={()=>onClose()} className="text-gray-500 hover:text-gray-700">
              ✖️
            </button>
          </div>
          {hourlyWeather?
            <HourlyWeatherComponent data={hourlyWeather}/>:
            <WeatherComponent data={data}/>
          }
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Close
            </button>
            <button
              onClick={hourlyWeather?onCurrentWeather:openHourlyWeatherWindow}
              className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition"
            >
              {hourlyWeather?"Current Weather":"Hourly Weather"}
            </button>
          </div>
        </div>
      </div>
    );
  };

export default WeatherWindow