// // 1) create a context
// // 2) provide a state function to context
// // 3) set state in the main.jsx
// // 4) use state wherever you want 


// import { createContext, useState } from "react";

// export const GlobalContext = createContext(null)

// function provideRecipe({children}) {

//     //state for searchItem 
//     const[searchParam,setSearchParam]=useState('')
//     const[recipeList,setrecipeList]=useState([])
//     const[loading,setLoading]=useState(false)
//     const[ErrorMsg,setErrorMsg]=useState(null)
//     const[recipeDetailsData,setRecipeDetailsData]=useState(null)         
//     const [favoritesList, setFavoritesList] = useState([])

//     //Calling the api on submit of Form

//     async function handleSubmit(e) {
//         e.preventDefault();
//         try {
//             setLoading(true)
//             const apiRes=await fetch(
//                 `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
//             )
//             const apiResult=await apiRes.json()

//             if(apiResult?.data?.recipes){
//                 setrecipeList(apiResult?.data?.recipes)
//             }
//         } catch (e){
//             console.log(e);
//             setErrorMsg(e.message)
//         } finally{
//             setLoading(false)
//             setSearchParam('')
//         }
//     }

//     console.log(recipeList);


//     return (<GlobalContext.Provider
//         value={{searchParam,setSearchParam,handleSubmit,recipeList, loading, ErrorMsg,recipeDetailsData,
//     setRecipeDetailsData,}}>
//         {children}
//     </GlobalContext.Provider>
//     )
// }

// export default provideRecipe
// 1) create a context
// 2) provide a state function to context
// 3) set state in the main.jsx
// 4) use state wherever you want 

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";  

export const GlobalContext = createContext(null);

function ProvideRecipe({ children }) {  
    // state for searchItem 
    const [searchParam, setSearchParam] = useState('');
    const [recipeList, setRecipeList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ErrorMsg, setErrorMsg] = useState(null);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favoritesList, setFavoritesList] = useState([]);  

    const navigate = useNavigate();   

    // Calling the api on submit of Form
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setLoading(true);
            const apiRes = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
            );
            const apiResult = await apiRes.json();

            if (apiResult?.data?.recipes) {
                setRecipeList(apiResult?.data?.recipes);
                navigate('/'); 
            }
        } catch (e) {
            console.log(e);
            setErrorMsg(e.message);
        } finally {
            setLoading(false);
            setSearchParam('');
        }
    }

    function handleAddToFavorite(getCurrentItem) {
        let cpyFavoritesList = [...favoritesList];
        const index = cpyFavoritesList.findIndex(item => item.id === getCurrentItem.id);

        if (index === -1) {
            cpyFavoritesList.push(getCurrentItem);
        } else {
            cpyFavoritesList.splice(index, 1);   
        }

        setFavoritesList(cpyFavoritesList);
    }

    console.log(recipeList);

    return (
        <GlobalContext.Provider
            value={{
                searchParam,
                setSearchParam,
                handleSubmit,
                recipeList,
                loading,
                ErrorMsg,
                recipeDetailsData,
                setRecipeDetailsData,
                handleAddToFavorite,  
                favoritesList,       
            }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default ProvideRecipe;