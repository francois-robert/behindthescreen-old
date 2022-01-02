import { NavLink } from "react-router-dom";
import TopBar from "../components/topbar/TopBar";

const Home = () => {
    return (
        <div data-cy="home">
            <TopBar/>
            <NavLink exact to="/a-propos" activeClassName="nav-active">A propos</NavLink>
        </div>
    );
};

export default Home;