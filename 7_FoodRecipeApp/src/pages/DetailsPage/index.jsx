// import { useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { GlobalContext } from "../../context";

// function DetailsPage() {
//     const { id } = useParams();
//     const { 
//         recipeDetailsData, 
//         setRecipeDetailsData, 
//         favoritesList,         
//         handleAddToFavorite
//     } = useContext(GlobalContext);

//     useEffect(() => {
//         async function fetchRecipeDetails() {
//             const apiRes = await fetch(
//                 `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
//             );
//             const apiResult = await apiRes.json();
//             setRecipeDetailsData(apiResult.data.recipe);
//         }
//         fetchRecipeDetails();
//     }, [id]);

//     return (
//         <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
//             <div className="row-start-2 lg:row-start-auto">
//                 <div className="h-96 overflow-hidden rounded-xl group">
//                     <img
//                         src={recipeDetailsData?.image_url} 
//                         className="w-full h-full object-cover block group-hover:scale-105 duration-300"
//                     />
//                 </div>
//             </div>
//             <div className="flex flex-col gap-3">
//                 <span className="text-sm text-cyan-700 font-medium">
//                     {recipeDetailsData?.publisher} 
//                 </span>
//                 <h3 className="font-bold text-2xl truncate text-black">
//                     {recipeDetailsData?.title}  {/* ✅ removed extra .recipe */}
//                 </h3>
//                 <div>
//                     <button
//                         onClick={() => handleAddToFavorite(recipeDetailsData)} 
//                         className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
//                     >
//                         {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
//                             (item) => item.id === recipeDetailsData?.id 
//                         ) !== -1
//                             ? "Remove from favorites"
//                             : "Add to favorites"}
//                     </button>
//                 </div>
//                 <div>
//                     <span className="text-2xl font-semibold text-black">Ingredients:</span>
//                     <ul className="flex flex-col gap-3">
//                         {recipeDetailsData?.ingredients.map((ingredient, index) => (
//                             <li key={index}> 
//                                 <span className="text-2xl font-semibold text-black">
//                                     {ingredient.quantity} {ingredient.unit}
//                                 </span>
//                                 <span className="text-2xl font-semibold text-black">
//                                     {ingredient.description}
//                                 </span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default DetailsPage;


import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

function DetailsPage() {
    const { id } = useParams();
    const {
        recipeDetailsData,
        setRecipeDetailsData,
        favoritesList,
        handleAddToFavorite
    } = useContext(GlobalContext);

    useEffect(() => {
        async function fetchRecipeDetails() {
            const apiRes = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
            );
            const apiResult = await apiRes.json();
            setRecipeDetailsData(apiResult.data.recipe);
        }
        fetchRecipeDetails();
    }, [id]);

    const isFavorite = favoritesList?.findIndex(
        (item) => item.id === recipeDetailsData?.id
    ) !== -1;

    return (
        <div className="max-w-4xl mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Image */}
            <div className="h-96 overflow-hidden rounded-2xl shadow-lg">
                <img
                    src={recipeDetailsData?.image_url}
                    alt={recipeDetailsData?.title}
                    className="w-full h-full object-cover hover:scale-105 duration-500"
                />
            </div>

            {/* Details */}
            <div className="flex flex-col gap-4 justify-center">

                <span className="text-xs uppercase tracking-widest text-cyan-600 font-semibold">
                    {recipeDetailsData?.publisher}
                </span>

                <h3 className="font-bold text-3xl text-gray-900 leading-snug">
                    {recipeDetailsData?.title}
                </h3>

                <button
                    onClick={() => handleAddToFavorite(recipeDetailsData)}
                    className={`self-start px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow transition-all duration-300
                        ${isFavorite
                            ? "bg-red-100 text-red-600 hover:bg-red-200"
                            : "bg-gray-900 text-white hover:bg-gray-700"
                        }`}
                >
                    {isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
                </button>

                <hr className="border-gray-200" />

                <h4 className="font-semibold text-gray-700 text-sm uppercase tracking-widest">
                    Ingredients
                </h4>

                <ul className="flex flex-col gap-2">
                    {recipeDetailsData?.ingredients?.map((ingredient, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-cyan-500 mt-0.5">✦</span>
                            <span>
                                <span className="font-semibold text-gray-900">
                                    {ingredient.quantity} {ingredient.unit}
                                </span>{" "}
                                {ingredient.description}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DetailsPage;