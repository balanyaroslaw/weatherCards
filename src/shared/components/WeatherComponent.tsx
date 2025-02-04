import { Weather } from '../../types/user.type'
import Rain from '../../assets/rain.png';
import Sun from '../../assets/sun.png';
import Fog from '../../assets/fog.png';
import Thunderstorm from '../../assets/thunderstorm.png';
import Clouds from '../../assets/clouds.png';
import Unknown from '../../assets/unknown.png';

const weatherMap: Record<number, string> = {
  0: Sun,
  1: Clouds,
  2: Clouds,
  3: Clouds,
  45: Fog,
  48: Fog,
  51: Rain,
  53: Rain,
  55: Rain,
  61: Rain,
  63: Rain,
  65: Rain,
  80: Rain,
  81: Rain,
  82: Rain,
  95: Thunderstorm,
  96: Thunderstorm,
  99: Thunderstorm,
};

interface WeatherProps{
    data:Weather
}
function WeatherComponent({data}:WeatherProps) {
    return (
        <div className="flex flex-col items-center space-y-4 p-6">
          <img 
            src={weatherMap[data.iconCode] || Unknown} 
            alt="" 
            className="w-36 h-36" 
          />
          <p className="text-2xl font-semibold">{data.description}</p>
          <p className="text-xl text-gray-600">Current: {data.temperature.current}°C</p>
          <p className="text-xl text-gray-600">Low: {data.temperature.lowest}°C</p> 
          <p className="text-xl text-gray-600">High: {data.temperature.highest}°C</p> 
        </div>
      );
      
}

export default WeatherComponent