import { createContext, useContext, useEffect } from "react"
import fetchWeather from "@/app/Api"

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
    // const [weatherData, setWeatherData] = useState(null)
    let weatherData

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const data = await fetchWeather()
                // setWeatherData(data)
                weatherData = data
            } catch(err) {
                console.error("Error fetching weather data: ", err)
            }
        }
        fetchWeatherData
    }, [])
    
    return (
        <WeatherContext.Provider value={weatherData}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeather = () => {
    return useContext(WeatherContext)
}
