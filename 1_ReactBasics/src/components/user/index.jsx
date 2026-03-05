// import { useEffect, useState } from "react"

import { useEffect, useState } from "react"

// function Users() {
//     const [userslist, setUserslist] = useState([])

//     async function fetchAllUsers() {
//         try {
//             const apiResponse = await fetch('https://dummyjson.com/users')
//             const apiResult = await apiResponse.json()

//             if (apiResult?.users) {
//                 setUserslist(apiResult.users)
//             } else {
//                 setUserslist([])
//             }

//         } catch (e) {
//             console.log("Error :", e)
//         }
//     }

//     useEffect(() => {
//         fetchAllUsers()
//     }, [])

//     return (
//         <div>
//             <h1>All Users List</h1>

//             <ul>
//                 {
//                     userslist && userslist.length > 0 ? (
//                         userslist.map((user) => (
//                             <li key={user.id}>
//                                 {user.firstName} {user.lastName}
//                             </li>
//                         ))
//                     ) : (
//                         <h6>Hello World</h6>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }

// export default Users


export default function Users(){
    const[userslist,setUserslist]=useState([])
    const[changeUI,setChangeUI]=useState(false)
    
    //api call
    async function fetchAllUsers() {
        try {
            //api fetch
            const apiRes=await fetch('https://dummyjson.com/users')
            //Convert into JS Object
            const apiResult=await apiRes.json()

            //storing data in the hook
            setUserslist(apiResult.users)
        } catch (e) {
            console.log("Error",e);
        }
    }
    useEffect(()=>{
        if(changeUI){
            fetchAllUsers()
        }else{
            setUserslist([])
        }
    },[changeUI])
    return(
    <>
        <div>
            <h2><b><i>Student Data Administration</i></b></h2>

            <button onClick={()=>setChangeUI(prev=>!prev)}>Fetch Users</button>

            {/* printing api Response */}
            <ul>
            {
                userslist.length > 0 ? (
                userslist.map((user) => (
                    <li key={user.id}>
                    {user.firstName} {user.lastName}
                    </li>
                ))
                ) : (
                <h4><b><i>No User Found</i></b></h4>
                )
            }
            </ul>
        </div>
    </>
    )
}