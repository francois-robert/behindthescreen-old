import { NavLink } from "react-router-dom";
import TopBar from "../components/TopBar";

const Home = () => {
    return (
        <div className="home">
            <TopBar/>
            <NavLink exact to="/a-propos" activeClassName="nav-active">A propos</NavLink>
        </div>
    );
};

export default Home;