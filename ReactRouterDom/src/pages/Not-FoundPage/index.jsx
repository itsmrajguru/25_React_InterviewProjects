import {Link } from "react-router-dom";

function Not_FoundPage(){
    return (
        <div>
            <h2>This Page Doesn't Exist</h2>
            <Link to={'/home/recipe'}>Go To Recipe Page</Link>
        </div>
    );
}

export default Not_FoundPage;