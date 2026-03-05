function ButtonComp() {
    return (
        <button>Click</button>
    )
}

function ProductItem({ singleProductItem, key }) {
    return (
        <>
            <div style={{padding:"10px",margin:"10px",border:"1px solid black",width:"100px"}} key={key}>
                <p>{singleProductItem}</p>
                <ButtonComp />
            </div>
        </>
    )
}
export default ProductItem