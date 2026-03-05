import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context";


function ProductDetailsComponent() {
    //useParams Hook to fetch the Dynamic id
    const { id } = useParams()

    //navigate()
    const navigate=useNavigate()
    //Fetching Objects from useContext
    const {
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        handleAddToCart } = useContext(ShoppingCartContext)

    //fetching a single product item api
    async function fetchSingleProduct() {
        try {
            setLoading(true)
            const apiRes = await fetch(`https://dummyjson.com/products/${id}`)
            const apiResult = await apiRes.json()

            console.log(apiResult);

            if (apiResult) {
                setProductDetails(apiResult);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false)
        }
    }

    //Navigate to cart page
    function handleAddToCartAndNavigate(product){
        handleAddToCart(product)
        navigate(`/cart`)
    }

    useEffect(() => {
        if (!id) return;  //saves unneccssary data fetch
        fetchSingleProduct()
    }, [id])

    if (loading) return <h3>Loading Product Details...</h3>

    return (
        <div>
            <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
                <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div className="px-4 py-10 border border-cyan-700 relative">
                            <img
                                className="w-4/5 object-cover"
                                src={productDetails?.thumbnail}
                                alt={productDetails?.title}
                            />
                        </div>
                        <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                            {productDetails?.images?.length
                                ? productDetails?.images.map((imageItem) => (
                                    <div className="border border-cyan-700 p-4" key={imageItem}>
                                        <img
                                            src={imageItem}
                                            className="w-24 cursor-pointer"
                                            alt="Product secondary image"
                                        />
                                    </div>
                                ))
                                : null}
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-extrabold text-gray-950">
                            {productDetails?.title}
                        </h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-xl font-bold text-gray-900">${productDetails?.price}</p>
                        </div>
                        <div>
                            <button
                                // disabled={
                                //     productDetails
                                //         ? cartItems.findIndex(
                                //             (item) => item.id === productDetails.id
                                //         ) > -1
                                //         : false
                                // }
                                onClick={()=>handleAddToCartAndNavigate(productDetails)}
                                className="disabled:opacity-65 px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div>
        //     <h1>Details of Product {id}</h1>
        //     <div>
        //         <img src={productDetails?.thumbnail}
        //          alt={productDetails?.title} />
        //     </div>
        // </div>
    );
}

export default ProductDetailsComponent;