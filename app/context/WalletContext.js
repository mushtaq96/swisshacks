'use client'
import { createContext, useContext, useState } from 'react'
import xrpl from 'xrpl'

export function WalletProvider({ children }) {
  const [client, setClient] = useState(null)
  const [wallet, setWallet] = useState(null)

  const connect = async () => {
    const newClient = new xrpl.Client(process.env.NEXT_PUBLIC_CLIENT)
    await newClient.connect()
    setClient(newClient)
  }

  const generateWallet = async () => {
    const newWallet = xrpl.Wallet.generate()
    const walletData = {
      address: newWallet.classicAddress,
      seed: newWallet.seed
    }
    setWallet(walletData)
    return walletData
  }

  const mintTicket = async (seed, uri) => {
    if (!client) throw new Error('Client not connected')
    const wallet = xrpl.Wallet.fromSeed(seed)

    const tx = {
      TransactionType: "NFTokenMint",
      Account: wallet.classicAddress,
      URI: xrpl.convertStringToHex(uri),
      Flags: 8,
      NFTokenTaxon: 0,
    }

    return await client.submitAndWait(tx, { wallet })
  }

  return (
    <WalletContext.Provider value={{ client, wallet, connect, generateWallet, mintTicket }}>
      {children}
    </WalletContext.Provider>
  )
}

const WalletContext = createContext()
export function useWallet() {
  const context = useContext(WalletContext)
  if (!context) throw new Error('useWallet must be used within WalletProvider')
  return context
}