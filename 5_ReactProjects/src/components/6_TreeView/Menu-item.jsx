import { useState } from "react";
import MenuList from "./Menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

function MenuItem({ item }) {

    //state
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState(false)

    function handleDisplayClick() {
        setDisplayCurrentChildren(!displayCurrentChildren);
    }
    return (
        <li>
            <div className="menu-item">
                <p>{item.label}</p>

                {/* toggle Icon */}
                {item && item.children && item.children.length ?
                <span
                onClick={() => handleDisplayClick()}>
                {displayCurrentChildren===true?<FaMinus size={25} color="#fff"/>:<FaPlus size={25} color="#fff"/>}
                </span> : null}
            </div>
            {

                /*This is the most imp logic...
                see above p prints the label of the menus list but now we want 
                to print the speccific children array of the array and so we
                cant directly pass the children array too this same function, as
                this function is getting data from the Menu-list , so we are 
                passing the item.children to the Menu-list , and then Menu-list
                will autonatically send the data to the Menu-Item and
                now this time  p prints the children array 
                
                This concept is called as RECURSION*/

                item && item.children && item.children.length>0 && displayCurrentChildren
                ?<MenuList list={item.children}/>
                :null
            }
        </li>
    );
}

export default MenuItem;