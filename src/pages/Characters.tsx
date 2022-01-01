import { NavLink } from "react-router-dom";
import TopBar from "../components/TopBar";


const Characters = () => {
    return (
        <div className="characters">
            <TopBar/>
            <NavLink exact to="/a-propos" activeClassName="nav-active">A propos</NavLink>
        </div>
    )
}

export default Characters;