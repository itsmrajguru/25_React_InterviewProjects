import { useState } from "react";
import ModalPopup from "./modal-test";
import './styles.css'


function ModalTest() {
    const [openToggle,setOpenToggle]=useState(false)
    

    function handleToggleButton() { 
        setOpenToggle(!openToggle)
    }
    console.log(openToggle);
    return (
        <div>
            <h1>Modal Test</h1>
            <button onClick={handleToggleButton}>Open Modal PopUp</button>
            {
                openToggle && <ModalPopup  body={<div><b>This Mangesh is a Mad Guy..Dont Trust Him</b></div>}/>
            }
            </div>
    );
}

export default ModalTest;