import { NavLink } from "react-router";

export default function HomeButton() {
    return (
        <NavLink to="/" className="home-button">
            <i className="fa-solid fa-house" alt="home button"></i>
        </NavLink>
    );
}
