import { useEffect, useState } from "react";
import User from "./user";
import './styles.css'

function GithubProfileFinder() {
    const [userName, setUserName] = useState("")
    const [findUsername, setFindUsername] = useState("itsmrajguru")
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    function handleSearch(getUserName) {
        setFindUsername(getUserName)
    }

    //fetch API function
    async function fetchGithubUserData() {
        if (!findUsername) return;
        
        try {
            setLoading(true)
            const apiRes = await fetch(`https://api.github.com/users/${findUsername}`)
            const apiResult = await apiRes.json()

            if (apiResult) {
                setUserData(apiResult)
            }
        } catch (e) {
            console.log(e);
            setErrorMsg(`error: ${e.message}`)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchGithubUserData()
    }, [findUsername])

    if (loading) return <h1>Loading Data, Please Wait !</h1>
    
    return (
        <div className="github-profile-container">
            <h1>Github Profile Finder</h1>
            <div style={{ display: "flex", gap: "2px", marginBottom: "20px" }} className="input-wrapper">
                {/* Creating an Input Form*/}
                <input
                    type="text"
                    name="github-username"
                    id="github-username"
                    placeholder="Enter Github Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button onClick={() => handleSearch(userName)}>Search</button>
            </div>
            {
                userData !== null ? <User user={userData} /> : null
            }
        </div>
    );
}

export default GithubProfileFinder;