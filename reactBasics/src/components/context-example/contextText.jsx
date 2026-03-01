import { useContext } from "react"
import { GlobalContext } from "../../context/useContext"



export default function ContextText() {

    //destructuing the global varibles without explicit import

    const { theme} = useContext(GlobalContext) //Import
    return (
        <h1 style={{
            fontSize: theme === "yellow" ? '50px' : '50px',
            color: theme === 'yellow' ? 'Yellow' : '#212121',
            backgroundColor: theme === "yellow" ? 'black' : 'red',
            width:'40vw'
        }}>Mangesh Rajguru</h1>
    )
}