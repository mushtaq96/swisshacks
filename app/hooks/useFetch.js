import { useState } from 'react'


export default function useFetch(method, endpoint) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const options = {
        method,
    }

    async function fetchData() {
        try {
            const response = await fetch(`http://127.0.0.1:8000${endpoint}`, options)
            const data = await response.json()
            setData(data)
        }
        catch (error) {
            alert(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    return [data, loading, fetchData]
}
