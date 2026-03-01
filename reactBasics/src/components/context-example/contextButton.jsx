import { useContext } from "react"
import { GlobalContext } from "../../context/useContext"

export default function ContextButton() {
    
    //destructuing the global varibles without explicit import
    
    const {theme,ChangeThemeOnToggle}=useContext(GlobalContext) //Import

    return(
        <button onClick={ChangeThemeOnToggle}>Change Theme</button>
    )
}