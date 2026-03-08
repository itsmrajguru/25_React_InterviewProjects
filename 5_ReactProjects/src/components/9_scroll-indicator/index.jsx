import { useEffect, useState } from "react";
import './styles.css'
function ScrollComponent({ url }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const [scrollPercentage, setScrollPercentage] = useState(0)

    //fetchApi logic
    async function fetchData(getUrl) {
        try {
            setLoading(true)
            const apiRes = await fetch(getUrl)
            const apiResult = await apiRes.json()

            if (apiResult && apiResult.products && apiResult.products.length > 0) {
                setData(apiResult.products)
            }
        } catch (e) {
            console.log(e);
            setErrorMsg("Error:", e.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData(url)
    }, [url])

    //function to handle the Scroll Functionality
    function handleScrollPercentage() {
        // console.log(
        //     document.documentElement.scrollTop, //returns height scrolled
        //     document.documentElement.scrollHeight, //returns total height
        //     document.documentElement.clientHeight //returns visible html body height only
        // )
        const ScrolledHeight = document.documentElement.scrollTop
        const Height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScrollPercentage((ScrolledHeight / Height) * 100)

        console.log(scrollPercentage);

    }
    //creating a useEffect() to run the HandleScrollButton
    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage)
        return () => {
            window.removeEventListener("scroll",handleScrollPercentage)
        }
    },[])

    // console.log(data);

    if (loading) return <h1>Fetching data ! please Wait</h1>

    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div
                        className="current-progress-bar"
                        style={{ width: `${scrollPercentage}%` }}
                    ></div>
                </div>
            </div>
            <div className="data-container">
                {data && data.length > 0
                    ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
                    : null}
            </div>
        </div>
    );
}

export default ScrollComponent;