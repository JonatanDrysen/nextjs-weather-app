"use client"

import GetWeather from "./components/Api";

export default function Home() {
  return (
    <div>
      <h2>Weather app</h2>
      <GetWeather />
    </div>
  )
}
