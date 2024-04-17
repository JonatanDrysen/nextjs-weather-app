export default function checkPrecipitation(data) {
    if (Object.values(data.current.rain)) {
        return data.current.rain["1h"].toString()
    } else if (Object.values(data.current.snow)) {
        return data.current.snow["1h"].toString()
    }
}
