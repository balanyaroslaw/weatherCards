
import { HourlyWeather } from '../../types/user.type'

interface HourlyWeatherProps{
    data:HourlyWeather
}

function HourlyWeatherComponent({data}:HourlyWeatherProps) {
    if (!data) {
        return <p className="text-gray-500 text-center">No hourly weather data available.</p>;
      }
    
      return (
        <div className="max-w-sm mx-auto p-3 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2 text-center">Hourly Weather</h2>
            <div className="overflow-y-auto max-h-30">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-2 py-1">Time</th>
                            <th className="border border-gray-300 px-2 py-1">Temperature (°C)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.time.map((time, index) => (
                            <tr key={index} className="text-center">
                                <td className="border border-gray-300 px-2 py-1">
                                    {new Date(time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                </td>
                                <td className="border border-gray-300 px-2 py-1">{data.temperature_2m[index]}°C</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      );
}

export default HourlyWeatherComponent