import { API_LINKS } from "../keys";
import { Weather } from "../../types/user.type";
import { HttpService } from "./http.service";

class WeatherService extends HttpService {
  constructor(apiUrl:string) {
    super(apiUrl); 
  }

  public async getWeatherByLocation(lat:string, lon:string): Promise<Weather> {
    return this.get<Weather>(`/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min&timezone=auto`);
  }

  public async getHourlyWeatherByLocation(lat:string, lon:string): Promise<Weather> {
    const today = new Date().toISOString().split("T")[0];
    return this.get<Weather>(`/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&timezone=auto&start_date=${today}&end_date=${today}`);
  }


}
const weatherService = new WeatherService(API_LINKS.WEATHER_API);
export default weatherService;