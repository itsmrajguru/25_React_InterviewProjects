import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import ProductTile from "../../components/productTile";

function ProductListComponent() {

    const { listofProducts, loading } = useContext(ShoppingCartContext)

    if (loading) return <h3>Data Being Fetched..Please wait for some time</h3>

    console.log("Products:", listofProducts);
    console.log("Length:", listofProducts?.length);
    return (
        <section className="py-12 bg-bg sm:py-16 lg:py-20 text-textMain">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-3xl font-extralight text-textMain sm:text-4xl">
                        Our Featured Products
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
                    {listofProducts && listofProducts?.length > 0
                        ? (
                            listofProducts.map((singleProductTile) => (
                                <ProductTile key={singleProductTile.id}
                                    singleProductTile={singleProductTile} />)))
                        : (
                            <h3>No Products Found</h3>)
                    }
                </div>
            </div>
        </section>
        // <div>
        //     <h1>Product List Page </h1>

        //     <ul>
        //         {
        //             listofProducts && listofProducts?.length>0
        //             ?listofProducts.map((singleProduct)=>(
        //                 <li  key={singleProduct.id}>{singleProduct.title}</li>
        //             ))
        //             :<h1>Data Not Found</h1>
        //         }
        //     </ul>
        // </div>
    );
}

export default ProductListComponent;




