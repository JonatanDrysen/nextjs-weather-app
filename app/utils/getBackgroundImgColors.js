export default function getBackgroundImgColors(imgPath) {
    return new Promise((resolve, _reject) => {
        const img = new Image()
    
        img.onload = function() {
            // create a canvas element, a 2d context, set with & height, and draw the image onto the canvas. 
            const canvas = document.createElement("canvas")
            const context = canvas.getContext("2d")
            canvas.width = img.width
            canvas.height = img.height
            context.drawImage(img, 0, 0, img.width, img.height) 
    
            // get the data from the image and access the pixel data in Array format.
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
            const pixels = imageData.data
    
            // loop through pixel color values (r, g, b, a), put each color in the colorCount object
            // to store and count repeating colors.
            const colorCount = {}
            for (let i = 0; i < pixels.length; i += 4) {
                const red = pixels[i]
                const green = pixels[i + 1]
                const blue = pixels[i + 2]
                const color = `rgb(${red}, ${green}, ${blue})`
                colorCount[color] = (colorCount[color] || 0) + 1
            }
    
            // extract the keys from the colorCount object & sort them by checking if one 
            // colors count is larger than another and sorting them accordingly.
            const sortedColors = Object.keys(colorCount).sort((a, b) => colorCount[b] - colorCount[a])
            const firstColor = sortedColors.slice(0, 1)
            const lastColor = sortedColors.slice(-1)
            const mainTwoColors = [firstColor, lastColor]
            resolve(mainTwoColors)
        }
        img.onerror = function(error) {
            console.error(`An error occured while trying to fetch the colors from the background image: ${error}`)
            resolve(["#000000", "#FFFFFF"])
        }

        img.src = imgPath
    })
}
