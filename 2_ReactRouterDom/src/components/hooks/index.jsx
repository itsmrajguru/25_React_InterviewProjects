import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    //method to Fetch Data
    async function FetchData() {
        setLoading(true)
        try {
            const apiRes = await fetch(url)
            if (!apiRes.ok) throw new Error(apiRes.statusText);

            const apiResult = await apiRes.json()

            if (apiResult) {
                setData(apiResult)
            }

        } catch (e) {
            console.log(e)
            setError("Failed to Fetch Data")
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        FetchData()
    }, [url])


    //return JSX
    return {
        data, loading, error
    }
}

export default useFetch;