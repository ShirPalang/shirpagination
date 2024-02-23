import { useEffect, useState } from "react"

export default function UseFetch(url) {

    const [datas, setDatas] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async param => {
        try {
            const res = await fetch(param)
            const data = await res.json()

            setDatas(data)
            setIsPending(false)
            setError(null)
        } catch (err) {
            setError(err)
            setIsPending(false)
        }
    }

    useEffect(() => {
        fetchData(url)
    }, [])

    return [datas, isPending, error]
}