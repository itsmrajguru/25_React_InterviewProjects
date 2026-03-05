// import { createContext } from "react";

import { createContext, useEffect, useState } from "react";

//create a Context

export const ShoppingCartContext=createContext(null)

//provide a state to Context
function ShoppingCartProvider({children}) {

    //Api Logic
    const [listofProducts,setListofProducts]=useState([])
    const [loading,setLoading]=useState(false)
    const [productDetails,setProductDetails]=useState()
    
    //function to store the data of the indivisual data item

    function handleAddToCart(productDetails) {
        console.log(productDetails);
        
    }
    //api function
    async function fetchProductList() {
        try {
            setLoading(true)
            const apiRes= await fetch('https://dummyjson.com/products')
            const apiResult= await apiRes.json() 
            
            if(apiResult && apiResult.products?.length>0){
                setListofProducts(apiResult?.products)
            }
            
        } catch (e) {
            console.log(e);
        } finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchProductList()
    },[])
    
    console.log(listofProducts);

    return (
        <ShoppingCartContext.Provider 
        value={{
            listofProducts,
            loading,
            setLoading,
            productDetails,
            setProductDetails,
            handleAddToCart}}>
            
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;