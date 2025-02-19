import { useContext } from "react";
import { NavLink } from "react-router";
import { UserAccount } from "../contexts/UserAccount";

export default function UserButton() {
    const { loggedUser } = useContext(UserAccount);

    return (
        <NavLink to="/users/login" className="user-button-container">
            <button className="user-button">
                {loggedUser ? (
                    <span className="user-button-contents">
                        {loggedUser.username}
                    </span>
                ) : (
                    <span className="user-button-contents">Log In</span>
                )}
                <i className="fa-solid fa-circle-user user-icon"></i>
            </button>
        </NavLink>
    );
}
