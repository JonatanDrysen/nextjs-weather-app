"use client"
import { Grid } from "@chakra-ui/react"
import getBackgroundImgColors from "../utils/getBackgroundImgColors"
import { useState, useEffect } from "react"

export default function Background({ children }) {
    const [colors, setColors] = useState([])
    const imagePath = "/weather-snowySky.jpg"

    useEffect(() => {
        getBackgroundImgColors(imagePath)
            .then(mainTwoColors => {
                setColors(mainTwoColors)
            })
    }, [imagePath])

    return (
        <Grid w="100vw" h="100vh" bgGradient={`linear(to-tr, ${colors[0]}, ${colors[1]})`}>
            {children}
        </Grid>
    )
}
