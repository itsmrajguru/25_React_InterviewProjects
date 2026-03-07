import menus from "./data";
import MenuList from "./Menu-list";
import './styles.css'

function TreeMenu() {
    return (
        <div  className="tree-view-container">
            <h1>Menu UI</h1>
            <MenuList list={menus}/>
        </div>

    );
}

export default TreeMenu;