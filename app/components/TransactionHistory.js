'use client'
import { useState, useEffect } from 'react'
import { useWallet } from '../context/WalletContext'

export function TransactionHistory() {
  const { wallet } = useWallet()
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(false)
  const [marker, setMarker] = useState(null)

  const fetchTransactions = async () => {
    if (!wallet) return
    setLoading(true)
    
    try {
      const response = await fetch('/api/transaction-history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          account: wallet.address,
          marker
        })
      })
      const data = await response.json()
      setTransactions(prev => [...prev, ...data.transactions])
      setMarker(data.marker)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [wallet])

  return (
    <section className="mt-8 p-6 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left">Type</th>
              <th className="text-left">Amount</th>
              <th className="text-left">Destination</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => (
              <tr key={i} className="border-t">
                <td className="py-2">{tx.tx?.TransactionType || 'N/A'}</td>
                <td className="py-2">
                  {tx.meta?.delivered_amount || 'N/A'}
                </td>
                <td className="py-2">
                  {tx.tx?.Destination || 'N/A'}
                </td>
                <td className="py-2">
                  {tx.meta?.TransactionResult || 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {marker && (
        <button
          onClick={fetchTransactions}
          disabled={loading}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </section>
  )
}