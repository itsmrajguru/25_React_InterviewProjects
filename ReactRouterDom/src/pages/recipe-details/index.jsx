import { useParams } from "react-router-dom";

function RecipeDetailsComponent() {

    //extracting Dynamic ID using Params
    const {id}=useParams()

    return (
        <h2>Recipe Details page of Recipe --~~{id}</h2>
    );
}

export default RecipeDetailsComponent;