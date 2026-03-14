import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipeItem";

function HomePage() {
    const { recipeList, loading, ErrorMsg } = useContext(GlobalContext);

    return (
        <div className="py-8 px-4 container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
            {loading && <h1 className="lg:text-4xl text-xl text-center text-black font-extrabold">Loading Data...</h1>}
            {ErrorMsg && <h2>Error Occurred: {ErrorMsg}</h2>}
            {recipeList && recipeList.length > 0
                ? recipeList.map((item) => (
                    <RecipeItem key={item.id} item={item} />
                ))
                : !loading ? <div className="col-span-4">
                    <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        Nothing to show. Please search something
                    </p>
                </div>:null
            }
        </div>
    );
}

export default HomePage;