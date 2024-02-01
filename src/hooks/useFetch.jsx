import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(url)
        const info = await response.json()
        setLoading(false)
        setData(info)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchdata(url)
  }, [url])
  return { data, loading }
}

export default useFetch
