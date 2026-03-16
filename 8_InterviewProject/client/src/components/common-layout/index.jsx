import { Outlet } from "react-router-dom";

function CommonLayout() {
    return (
        <div>
            <h1 className=''>Mangesh Rajguru</h1>
            <h2>MERN Stack Project</h2>
            <Outlet />
        </div>
    );
}

export default CommonLayout;