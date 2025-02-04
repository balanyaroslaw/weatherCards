import { useState } from "react";
import weatherService from "../shared/services/weather.service";
import { HourlyWeather, User } from "../types/user.type";
import { transformHourlyWeatherResponse, transformWeatherResponse } from "../utilities/transformWeather";
import { useWeatherStore } from "../shared/store/weather.store";
const useWeather = () => {
    const setWeather = useWeatherStore((state)=>state.setWeather);
    const setHourlyWeather = useWeatherStore((state)=>state.setHourlyWeather);
    const fetchWeather = async (data:User) => {
      const weatherData = await weatherService.getWeatherByLocation(
        data.location.coordinates.latitude, 
        data.location.coordinates.longitude
      );

      setWeather(transformWeatherResponse(weatherData));
    };

    const fetchHourlyWeather = async (data:User) => {
      const weatherHourlyData = await weatherService.getHourlyWeatherByLocation(
        data.location.coordinates.latitude, 
        data.location.coordinates.longitude
      ) ;

      const transformedHourlyData = transformHourlyWeatherResponse(weatherHourlyData);
      setHourlyWeather(transformedHourlyData);
    };

    const restartCurrentWeather = () => {
      setHourlyWeather(null);
    }
  
    return { fetchWeather, fetchHourlyWeather, restartCurrentWeather};
  };

export default useWeather;