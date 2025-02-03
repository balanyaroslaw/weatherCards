import weatherService from "../shared/services/weather.service";
import { useUserStore } from "../shared/store/user.store";
import { User } from "../types/user.type";
import { transformWeatherResponse } from "../utilities/transformWeather";

const useSetWeather = () => {
    const setWeather = useUserStore((state)=>state.setWeather);
    const fetchWeather = async (data:User) => {
      const weatherData = await weatherService.getWeatherByLocation(data.location.coordinates.latitude, data.location.coordinates.longitude);
      setWeather(transformWeatherResponse(weatherData));
    };
  
    return { fetchWeather };
  };

export default useSetWeather;