"use client"
import { Box, Heading } from "@chakra-ui/react"
import Forecast from "./components/Forecast"
import Background from "./components/styled/Background"
import ContentBox from "./components/styled/ContentBox"

export default function Home() {
    return (
        <>
            <Background>
                <Heading textAlign="center" p="5vh">
                    Weather App
                </Heading>

                <ContentBox>
                    <Box display="flex" justifyContent="center">
                        <Forecast />
                    </Box>
                </ContentBox>
            </Background>
        </>
    )
}
