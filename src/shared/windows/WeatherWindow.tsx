
import React from 'react'
import { Weather } from '../../types/user.type'
import { useUserStore } from '../store/user.store';
import { useModalStore } from '../store/modal.store';
import { WindowList } from '../../types/windows.enum';
import useModal from '../../hooks/useModal';
import Rain from '../../assets/rain.png';
import Sun from '../../assets/sun.png';
import Fog from '../../assets/fog.png';
import Thunderstorm from '../../assets/thunderstorm.png';
import Clouds from '../../assets/clouds.png';
import Unknown from '../../assets/unknown.png';

const weatherIcon = (code:number) =>{
  if(code<=1){
    return Sun;
  }
  else if(code>1&& code<=3){
    return Clouds;
  }
  else if(code>=45 && code<=48){
    return Fog;
  }
  else if(code >= 51 && code <=82){
    return Rain;
  }
  else if(code >= 83 && code <=99){
    return Thunderstorm;
  }
  else{
    return Unknown;
  }
}

interface WeatherWindowProps {
    data: Weather;
    isOpenStatus: boolean;
  }
  
  const WeatherWindow: React.FC<WeatherWindowProps> = ({ data, isOpenStatus}) => {
    if (!isOpenStatus) return null; 
    console.log(data)
    const {closeModal} = useModal();
    const onClose = () => {
        closeModal(WindowList.WeatherWindow)
    }

    return (
      <div className="fixed top-0 inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Weather Information</h2>
            <button onClick={()=>onClose()} className="text-gray-500 hover:text-gray-700">
              ✖️
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img src={weatherIcon(data.iconCode)} alt="" className='w-20 h-20'/>
            <p className="text-lg font-medium">{data.description}</p>
            <p className="text-gray-600">Current: {data.temperature.current}°C</p>
            <p className="text-gray-600">Low: {data.temperature.lowest}°C</p>
            <p className="text-gray-600">High: {data.temperature.highest}°C</p>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

export default WeatherWindow