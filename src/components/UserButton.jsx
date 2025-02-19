import { NavLink } from "react-router";

export default function UserButton() {
    return (
        <NavLink to="/users/login" className="user-button-container">
            <button className="user-button">
                <span className="log-in">Log In</span>
                <i className="fa-solid fa-circle-user user-icon"></i>
            </button>
        </NavLink>
    );
}
