import React from 'react'
import "dotenv/config"

async function GetWeather() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=59.3&lon=17.8&exclude=minutely,hourly,daily&appid=${API_KEY}&units=metric`

  const res = await fetch(url)
  const data = await res.json()

  const weatherItems = data.current.weather.flatMap(item => Object.values(item))
  const weatherMain = weatherItems[1]
  const weatherDescription = weatherItems[2]
  const weatherIcon = `https://openweathermap.org/img/wn/${weatherItems[3]}@2x.png`

  function checkPrecipitation(data) {
    if (Object.values(data.current.rain)) {
      return data.current.rain["1h"].toString()
    } else if (Object.values(data.current.snow)) {
      return data.current.snow["1h"].toString()
    }
  }

  return (
    <div>
      {data && (
        <>
          <p>Current location: {data.timezone}</p>
          <p>Current temperature: {data.current.temp}°C</p>
          <p>It feels like {data.current.feels_like}°C</p>
          <p>Humidity: {data.current.humidity}%</p>
          <br />
          <div>
            <p>Current weather: {weatherDescription}</p>
            {(data.current.rain || data.current.rain) &&
             <p>Precipitation (One hour): {checkPrecipitation(data)}mm</p>
            }
            <img src={weatherIcon} alt={weatherDescription} />
          </div>
        </>
      )}
    </div>
  )
}

export default GetWeather