import { useContext } from "react";
import { UserAccount } from "../contexts/UserAccount";

export default function LoginSuccess() {
    const { loggedUser, setLoggedUser } = useContext(UserAccount);

    return (
        <section className="login-form-container">
            <h2 className="login-header">Hello {loggedUser.username}!</h2>
            <p>You have successfully logged in</p>
            <button
                className="login-button"
                onClick={() => {
                    setLoggedUser(null);
                }}
            >
                Log out
            </button>
        </section>
    );
}
