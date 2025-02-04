import { Weather } from "../types/user.type";

export const transformWeatherResponse = (apiResponse: any): Weather => {
    return {
      iconCode: apiResponse.current.weathercode,
      description: getWeatherDescription(apiResponse.current.weathercode), 
      temperature: {
        current: apiResponse.current.temperature_2m, 
        lowest: apiResponse.daily.temperature_2m_min[0], 
        highest: apiResponse.daily.temperature_2m_max[0], 
      },
    };
  };

  const getWeatherDescription = (code: number): string => {
    const weatherMap: Record<number, string> = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing rime fog",
      51: "Drizzle: Light",
      53: "Drizzle: Moderate",
      55: "Drizzle: Dense",
      61: "Rain: Slight",
      63: "Rain: Moderate",
      65: "Rain: Heavy",
      80: "Rain showers: Slight",
      81: "Rain showers: Moderate",
      82: "Rain showers: Violent",
      95: "Thunderstorm: Slight",
      96: "Thunderstorm with hail: Moderate",
      99: "Thunderstorm with hail: Heavy",
    };
    return weatherMap[code] || "Unknown Weather";
  };

  export const transformHourlyWeatherResponse = (data: any): HourlyWeather => {
    return {
        time: data.hourly.time, 
        temperature_2m: data.hourly.temperature_2m,
    };
};