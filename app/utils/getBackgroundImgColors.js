export default function getBackgroundImgColors(imgPath) {
    console.log("getBackgroundImgColors() triggered.", imgPath)

    const img = new Image()
    img.crossOrigin = "Anonymous"

    img.onload = function() {
        const canvas = document.createElement("canvas")
        const context = canvas.getContext("2d")
        canvas.width = imgElement.width
        canvas.height = imgElement.height
        const contextImage = context.drawImage(imgElement, 0, 0)
        const imageData = contextImage.getImageData(0, 0, imgElement.width, imgElement.height)
     
        console.log("imageData: ", imageData)
    }
    img.src = imgPath
}
