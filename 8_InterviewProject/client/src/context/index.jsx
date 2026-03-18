import { callUserAuthApi } from "@/services";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


//create a context
//create a state provider for the context
//save the state in the main.jsx
//consume the state anywhere

export const TaskManagerContext = createContext(null)

function TaskManagerProvider({ children }) {
    const [user, setUser] = useState(null)

    const navigate=useNavigate() //navigates to a route
    const location=useLocation() //returns route 
    

    async function verifyUserCookie() {
        const data=await callUserAuthApi()
        if(data?.userInfo){
            setUser(data?.userInfo)
            /* This means, you are Authenticated and on the login page (or root),
            go to tasks list page */
            if(location.pathname === '/' || location.pathname.includes('/auth')) {
                navigate('/tasks/list')
            }
        } else {
            /* And if you are not Authenticated and on an authenticated page,
            then go to /auth page and be authenticated first */
            if(!location.pathname.includes('/auth')) {
                navigate('/auth')
            }
        }
    }
    /* This useEffect will authenticate the user on every page refresh
    and navigate him on dashboard or direct login page depending
    upon the status of the user */
    useEffect(()=>{
        verifyUserCookie()
    },[navigate,location.pathname])
    return (
        <TaskManagerContext.Provider value={{user,setUser}}>
            {children}
        </TaskManagerContext.Provider>
    )
}
export default TaskManagerProvider