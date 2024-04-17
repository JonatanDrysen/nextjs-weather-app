"use client"
import { Flex } from "@chakra-ui/react"

export default function ForecastContainer({ children }) {
    const imagePath = "/weather-snowySky.jpg"

    return (
        <Flex id="forecastContainer"
            m="10px"
            h="70vh"
            w="80vw"
            justifySelf="center"
            borderRadius="2xl"
            shadow="dark-lg"
            bgImage={`url(${imagePath})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
        >
            <Flex id="forecastInfoContainer"
                h="90%"
                w="40%"
                m="1rem"
                alignSelf="center"
                justifyContent="center"
                alignItems="center"
                bg="rgba(255, 255, 255, 0.3)"
                borderRadius="2xl"
            >
                {children}
            </Flex>
        </Flex>
    )
}
