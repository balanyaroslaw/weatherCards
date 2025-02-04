
import { HourlyWeather } from '../../types/user.type'

interface HourlyWeatherProps{
    data:HourlyWeather
}

function HourlyWeatherComponent({data}:HourlyWeatherProps) {
    if (!data) {
        return <p className="text-gray-500 text-center">No hourly weather data available.</p>;
      }
    
      return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Hourly Weather</h2>
          <div className="overflow-y-auto max-h-60"> 
            <table className="w-full border-collapse border border-gray-300 text-base"> 
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Time</th> 
                  <th className="border border-gray-300 px-4 py-2">Temperature (°C)</th>
                </tr>
              </thead>
              <tbody>
                {data.time.map((time, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">
                      {new Date(time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{data.temperature_2m[index]}°C</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );      
}

export default HourlyWeatherComponent