'use client'
import { useState } from 'react'
import { useWallet } from './context/WalletContext'

export default function Home() {
    const { connect, generateWallet, mintTicket } = useWallet()
    const [isConnecting, setIsConnecting] = useState(false)
    const [generatedWallet, setGeneratedWallet] = useState(null)
    const [uri, setUri] = useState('')
    const [isConnected, setIsConnected] = useState(false)

    const handleConnect = async () => {
        setIsConnecting(true)
        try {
            await connect()
            setIsConnected(true)
        } finally {
            setIsConnecting(false)
        }
    }

    const handleGenerate = async () => {
        const wallet = await generateWallet()
        setGeneratedWallet(wallet)
    }

    const handleMint = async () => {
        if (!generatedWallet?.seed) return
        await mintTicket(generatedWallet.seed, uri)
    }

    return (
        <>
            <div class="navbar bg-primary text-primary-content">
                <button class="btn btn-ghost text-xl">daisyUI</button>
            </div>
            <main className="min-h-screen p-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">XRPL Wallet</h1>

                <div className="space-y-6">
                    <section className="p-6 border rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Connection</h2>
                        <button
                            onClick={handleConnect}
                            disabled={isConnecting}
                            className={`px-4 py-2 bg-blue-600 text-white rounded
              ${isConnecting ? 'animate-pulse cursor-not-allowed' : 'hover:bg-blue-700'}
              ${isConnecting ? 'opacity-90' : ''}`}
                        >
                            {isConnecting ? 'Connecting...' : isConnected ? 'Connected!' : 'Connect to XRPL'}
                        </button>
                    </section>

                    {isConnected && (
                        <section className="p-6 border rounded-lg bg-green-50">
                            <h2 className="text-xl font-semibold mb-4">Connected!</h2>
                            <p className="text-green-600">Successfully connected to XRPL Testnet</p>
                        </section>
                    )}

                    <section className="p-6 border rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Wallet</h2>
                        <button
                            onClick={handleGenerate}
                            disabled={!isConnected}
                            className={`px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mb-4
              ${!isConnected ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Generate Wallet
                        </button>

                        {generatedWallet && (
                            <div className="mt-4 space-y-2">
                                <p><span className="font-medium">Address:</span> {generatedWallet.address}</p>
                                <p><span className="font-medium">Seed:</span> {generatedWallet.seed}</p>
                            </div>
                        )}
                    </section>

                    <section className="p-6 border rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Mint NFT</h2>
                        <div className="space-y-4">
                            <input
                                type="text"
                                value={uri}
                                onChange={(e) => setUri(e.target.value)}
                                placeholder="Enter URI (e.g., ipfs://...)"
                                className="w-full p-2 border rounded"
                            />
                            <button
                                onClick={handleMint}
                                disabled={!generatedWallet || !uri || !isConnected}
                                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50"
                            >
                                Mint Ticket
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
