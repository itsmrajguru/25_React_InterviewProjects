import { useNavigate } from "react-router-dom";


function ProductTile({ singleProductTile }) {

    //useNavigate() Hook
    const navigate = useNavigate()
    //function to navigate to indivisual page
    function handleNavigateToDetailsPageEvent(getCurrentPage) {
        console.log(getCurrentPage);
        navigate(`/product-details/${getCurrentPage}`)
    }

    return (
        // <div>
        //     <h2>{singleProductTile?.title}---(MSR)</h2>
        // </div>
        <div className="relative group border border-cyan-700 p-6 cursor-pointer">
            <div className="overflow-hidden aspect-w-1 aspect-h-1">

                {/*Displaying Product Images */}
                <img
                    src={singleProductTile?.thumbnail}
                    alt={singleProductTile?.title}
                    className="oject-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                />

                {/*Displaying Product Title And Price*/}

                <div className="flex items-start justify-between mt-4 space-x-4">
                    {/*Product Title */}

                    <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
                        <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                            {singleProductTile?.title}
                        </p>
                    </div>

                    {/*Product Price */}
                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
                            ${singleProductTile?.price}
                        </p>
                    </div>
                </div>

                {/*View Details Button */}
                <button
                    onClick={() => handleNavigateToDetailsPageEvent(singleProductTile?.id)}
                    className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg"
                > View Details
                </button>
            </div>
        </div >
    );
}
export default ProductTile;


