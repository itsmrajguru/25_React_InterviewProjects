import { useEffect, useState } from "react";
import './styles.css'
function LoadMoreComponent() {

    //states
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loadCount, setLoadCount] = useState(0)
    const [disableButton,setDisableButton]=useState(false)


    //load more button
    function handleLoadButton() {
        setLoadCount(prev =>products.length!==100?prev+1:prev)
        setDisableButton(products.length===100?true:false)
    }

    //fetchApi Logic
    async function fetchProducts() {
        try {
            setLoading(true)
            const apiRes = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${loadCount === 0 ? 0 : loadCount * 20}`)
            const apiResult = await apiRes.json()
            if (apiResult && apiResult.products && apiResult.products.length > 0) {
                setProducts((prevData) => [...prevData, ...apiResult.products])
            }
        }
        catch (e) {
            console.log(e);
            setErrorMsg(e.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [loadCount])

    console.log(products);

    //loading Functions
    if (errorMsg) return <h3>Error:{errorMsg}</h3>
    return (
        <div className="load-more-container">
            <h1>Load More button Project</h1>
            <div className="product-container">
                {
                    products && products.length
                        ? products.map(singleProduct => (
                            <div className="product" key={singleProduct.id}>
                                <img
                                    src={singleProduct.thumbnail}
                                    alt={singleProduct.title} />
                                <p>{singleProduct.title}</p>
                            </div>
                        ))
                        : null
                }
                {loading && <p>Loading more products...</p>}
                <div>
                    <button
                        onClick={handleLoadButton}
                        disabled={disableButton===true}>
                        Load More Products
                    </button>
                    {disableButton===true?<p>You are reached to limit of 100 products</p>:null}
                </div>
            </div>
        </div>
    );
}

export default LoadMoreComponent;

