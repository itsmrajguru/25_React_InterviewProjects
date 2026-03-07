import MenuItem from "./Menu-item";

function MenuList({list = [] }) {
    return (
        <ul className="menu-list-container">
            {
                list && list.length
                ?list.map(ListItem=>
                    <MenuItem item={ListItem}/>)
                :null
            }
        </ul>
    );
}

export default MenuList;