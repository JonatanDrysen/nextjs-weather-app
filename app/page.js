import { Heading } from "@chakra-ui/react"
import Forecast from "./components/Forecast"
import Background from "./components/Background"
import ContentBox from "./components/ContentBox"

export default function Home() {
    return (
        <Background>
            <Heading textAlign="center" p="5vh">
                Weather App
            </Heading>

            <ContentBox>
                <Forecast />
            </ContentBox>
        </Background>
    )
}
