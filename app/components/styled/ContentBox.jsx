import { Flex } from "@chakra-ui/react"

export default function ContentBox({ children }) {
    const imgUrl = "/weather-darkClouds.jpg"

    return (
        <Flex
            m="10px"
            h="30rem"
            w="60rem"
            justifySelf="center"
            borderRadius="2xl"
            shadow="dark-lg"
            bgImage={`url(${imgUrl})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
        >
            <Flex
                h="50%"
                w="30%"
                m="1rem"
                justifyContent="center"
                alignItems="center"
                bg="rgba(255, 255, 255, 0.5)"
                borderRadius="2xl"
            >
                {children}
            </Flex>
        </Flex>
    )
}
