import { Heading } from "@chakra-ui/react"
import Forecast from "./components/Forecast"
import Background from "./components/Background"
import ForecastContainer from "./components/ForecastContainer"

export default function Home() {
    return (
        <Background>
            <Heading textAlign="center" p="5vh">
                Weather App
            </Heading>

            <ForecastContainer>
                <Forecast />
            </ForecastContainer>
        </Background>
    )
}
