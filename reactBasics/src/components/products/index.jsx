import ProductItem from "./components/product-item"

//importing useState() hook
import {useEffect, useState } from "react";

function ProductList({ name, dummyData }) {
    const[flag,setFlag]=useState(false)
    const[count,setCount]=useState(0)
    const[changeStyle,setChangeStyle]=useState(false)

    function handleEvent() {
        setFlag(prev => !prev) 
    }
    function countFunction() {
        setCount(prev => prev+1)
    }

    useEffect(()=>{
        setFlag(prev => !prev)
    },[count])

    useEffect(()=>{
        if(count===10){
            return setChangeStyle(prev => !prev)
        }
    },[count])
    const renderOnCondition=flag?<h2>{name} is a Good Guy</h2>:<h2>Hello {name}</h2>
    return (
        <>
            <button onClick={handleEvent}>Toggle Text</button>
            {renderOnCondition}
            <h4><b><i>Count:</i></b>{count}</h4>
            <button style={{backgroundColor:changeStyle ?"aqua":"white", color:changeStyle?"black":"black"}} onClick={countFunction}>Click me</button>
            <h3>E-Commerce Project</h3>

            {/* Rendering Dummy data in list */}
            <ul>
                {dummyData.map((item, index) => (
                    <ProductItem singleProductItem={item} key={index} />
                    // <li key={index}>{item}</li>
                ))}

            </ul>
        </>
    )
}
export default ProductList