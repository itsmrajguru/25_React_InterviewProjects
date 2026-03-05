import { useLayoutEffect, useState } from "react";

const initialDimensions = {
    width: 0,
    height: 0
}
function useWindowResize() {
    const [windowSize, setWindowSize] = useState(initialDimensions)

    /* using useLayoutEffect() hook -->This hook starts
     working before the ReactDOM loads*/

    function WindowResizer() {

        //this returns the ongoing height and width
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    useLayoutEffect(() => {
        WindowResizer()

        /*This Event Listener cinsistently checks
         whether window values changes or not ?  */
        window.addEventListener("resize", WindowResizer)

        //return
        return () => {
            window.removeEventListener("resize", WindowResizer)
        }
    }, [])

    return windowSize;
}

export default useWindowResize;