import { Heading } from "@chakra-ui/react"
import Forecast from "./components/server/Forecast"
import Background from "./components/client/Background"
import ForecastContainer from "./components/client/ForecastContainer"

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
