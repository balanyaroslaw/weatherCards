import { create } from "zustand";
import { HourlyWeather, Weather } from "../../types/user.type";

interface WeatherStoreState {
    weather: Weather | null;
    hourlyWeather: HourlyWeather | null;
    setWeather: (weather: Weather | null) => void;
    setHourlyWeather: (hourlyData: HourlyWeather | null) => void;
  }
  
export const useWeatherStore = create<WeatherStoreState>((set) => ({
    weather: null,
    hourlyWeather:null,
    setWeather: (weatherData: Weather | null) => set({ weather: weatherData }),
    setHourlyWeather: (hourlyData: HourlyWeather | null) => set({ hourlyWeather: hourlyData }),
}));