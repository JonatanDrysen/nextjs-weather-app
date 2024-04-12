import { Grid } from "@chakra-ui/react"

export default function Background({ children }) {
    return (
        <Grid w="100vw" h="100vh" bgGradient="linear(to-tr, teal.300, blue.500)">
            {children}
        </Grid>
    )
}
