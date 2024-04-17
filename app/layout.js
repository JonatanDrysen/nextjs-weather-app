import { Providers } from "./components/client/Providers"

export const metadata = {
    title: "Weather App",
    description: "Generated by create next app",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>{ children }</Providers>
            </body>
        </html>
    )
}
