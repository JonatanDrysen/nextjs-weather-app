import axios from "axios"
import "dotenv/config"

async function fetchWeather() {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=59.3&lon=17.8&exclude=minutely,hourly,daily&appid=${API_KEY}&units=metric`

    try {
        const res = await axios.get(url)
        if (res.status === 200) {
            return res
        }
    } catch (err) {
        console.error("Server error: ", err)
        return false
    }
}

export default fetchWeather
