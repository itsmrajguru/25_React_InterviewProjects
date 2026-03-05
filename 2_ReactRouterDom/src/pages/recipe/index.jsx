import useFetch from "../../components/hooks";

function RecipeComponents() {

    const { data, loading, error } = useFetch("https://dummyjson.com/recipes")

    if (loading) return <h1>Fetching Data, Please Wait!</h1>
    return (
        <div>
            <h2>This is Recipe Page</h2>

            <ul>
                {data?.recipes?.length > 0
                    ? data?.recipes.map((recipeItem) =>(
                        <div>
                            <img
                            src={recipeItem?.image}
                            style={{ width: "150px", height: "150px" }} />
                            <label>{recipeItem.name}</label>
                        </div>
                    ))
                    : null
                }
            </ul>
        </div>
    );
}

export default RecipeComponents;