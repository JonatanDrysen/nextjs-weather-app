"use client"
import { Grid } from "@chakra-ui/react"

export default function Background({ children }) {
    
    return (
        <Grid w="100vw" h="100vh" bgGradient="linear(to-tr, #042356, #9b9394)">
            {children}
        </Grid>
    )
}
