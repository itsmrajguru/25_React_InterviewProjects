import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

function Navbar() {

    //importing states from GlobalContext
    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext)

    return (
        <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
            <h2 className="text-2xl font-semibold">
                <NavLink
                    to={"/"}
                    className="px-6 py-2 border-1 border-black rounded-full inline-block hover:bg-black hover:text-white transition-all duration-300"
                >
                    FoodRecipe_MSR
                </NavLink>
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="ItemName"
                    placeholder="Enter Items"
                    value={searchParam}
                    onChange={(e) => setSearchParam(e.target.value)}
                    className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
                />
            </form>
            <ul className="flex gap-5">
                <li>
                    <NavLink to={'/'}
                                    className="px-3 py-1 text-xs border border-black rounded-full inline-block hover:bg-black hover:text-white transition-all duration-300 self-start mt-1"
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/fav'}
                               className="px-3 py-1 text-xs border border-black rounded-full inline-block hover:bg-black hover:text-white transition-all duration-300 self-start mt-1"
                    >Favourites</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;