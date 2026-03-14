// import { useContext } from "react";
// import RecipeItem from "../../components/recipeItem";
// import { GlobalContext } from "../../context";

// export default function Favorites() {
//   const { favoritesList } = useContext(GlobalContext);

//   return (
//     <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
//       {favoritesList && favoritesList.length > 0 ? (
//         favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
//       ) : (
//         <div>
//           <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
//             Nothing is added in favorites.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

import { useContext } from "react";
import RecipeItem from "../../components/recipeItem";
import { GlobalContext } from "../../context";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Favorites</h1>
        <p className="text-sm text-gray-400 mt-1">
          {favoritesList?.length > 0
            ? `${favoritesList.length} recipe${favoritesList.length > 1 ? "s" : ""} saved`
            : "No recipes saved yet"}
        </p>
        <hr className="mt-4 border-gray-200" />
      </div>

      {/* Grid or Empty State */}
      {favoritesList && favoritesList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoritesList.map((item) => (
            <RecipeItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
          <span className="text-6xl">🍽️</span>
          <h2 className="text-xl font-semibold text-gray-700">Nothing saved yet</h2>
          <p className="text-sm text-gray-400">
            Browse recipes and hit <span className="font-medium text-gray-600">"Add to Favorites"</span> to save them here.
          </p>
        </div>
      )}
    </div>
  );
}