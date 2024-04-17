import fetchWeather from "../../Api"
import checkPrecipitation from "@/app/utils/checkPrecipitation"

async function Forecast() {
    const response = await fetchWeather()
    const data = response.data

    const weatherItems = data.current.weather.flatMap((item) => Object.values(item))
    const weatherMain = weatherItems[1]
    const weatherDescription = weatherItems[2]
    const weatherIcon = `https://openweathermap.org/img/wn/${weatherItems[3]}@2x.png`

    return (
        <div>
            {data && (
                <>
                    <p>Current weather: {weatherDescription}</p>
                    <br />
                    <p>Current location: {data.timezone}</p>
                    <p>Current temperature: {data.current.temp}°C</p>
                    <p>It feels like {data.current.feels_like}°C</p>
                    <p>Humidity: {data.current.humidity}%</p>

                    <div>
                        {(data.current.snow || data.current.rain) && (
                            <p>Precipitation (One hour): {checkPrecipitation(data)}mm</p>
                        )}
                        <img src={weatherIcon} alt={weatherMain} />
                    </div>
                </>
            )}
        </div>
    )
}

export default Forecast
