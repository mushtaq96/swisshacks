import { Inter } from 'next/font/google'
import './globals.css'
import { WalletProvider } from './context/WalletContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'XRPL Wallet',
    description: 'Hackathon XRPL Wallet',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} h-screen`}>
                <WalletProvider>
                    {children}
                </WalletProvider>
            </body>
        </html>
    )
}
