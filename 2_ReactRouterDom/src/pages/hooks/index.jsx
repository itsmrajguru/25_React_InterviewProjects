import { use, useEffect, useRef } from "react";


function HooksComponent() {

    //Referencing to particular Elememt
    const DivRef = useRef()

    useEffect(() => {
        Object.assign(DivRef.current.style, {
            fontSize: "20px",
            padding: "10px",
        });

            setTimeout(() => {
                DivRef.current.style.color = "#FF0000"
            }, 500);
            
            setTimeout(() => {
                DivRef.current.style.color = "#B026FF"
            }, 1000);
            
            setTimeout(() => {
                DivRef.current.style.color = "#FFD700"
            }, 1500);

    }, []);

    // useEffect(()=>{
    //     DivRef.current.style.color="aqua"
    // },[])
    return (
        <div>
            <h1>useRef(), useCallback(), useMemo()</h1>
            <div ref={DivRef}>
                <h1>Hello Guys,This Mangesh is a skilled Programmer and Developer</h1>
            </div>
        </div>
    );
}

export default HooksComponent;