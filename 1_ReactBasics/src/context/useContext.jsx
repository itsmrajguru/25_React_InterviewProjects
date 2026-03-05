import { createContext, useState } from "react"


//Empty Context Box
export const GlobalContext=createContext(null)

// Provider Function including state Values
export function GlobalState({children}){


    // Variables to change the theme
    const[theme,setTheme]=useState('yellow')

    //function to make changes
    function ChangeThemeOnToggle() {
        setTheme(theme==='yellow'?'red':'yellow')
    }

    return(
        /*The provider supplies variables globally and the consumer
        can access them anywhere using destructuring.
        There's no need to import them explicitly, unlike props. */

        <GlobalContext.Provider  value={{theme,ChangeThemeOnToggle}}>
            {children}
        </GlobalContext.Provider>
    )
} 

