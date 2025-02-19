import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../api";
import { UserAccount } from "../contexts/UserAccount";
import Loading from "../components/Loading";
import "../css/login.css";

export default function LoginPage() {
    const [users, setUsers] = useState([]);
    const [usernameInput, setUsernameInput] = useState("");
    const { loggedUser, setLoggedUser } = useContext(UserAccount);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchUsers().then((usersFromApi) => {
            setUsers(usersFromApi);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    function handleLogin(e) {
        e.preventDefault();

        const foundUser = users.find((user) => user.username === usernameInput);

        if (foundUser) {
            setLoggedUser(foundUser);
        } else {
            setIsError(true);
        }
    }

    return (
        <>
            {loggedUser ? (
                <div className="login-form-container">
                    <h2 className="login-header">
                        Hello {loggedUser.username}!
                    </h2>
                    <p>You have successfully logged in</p>
                    <button
                        className="login-button"
                        onClick={() => {
                            setLoggedUser(null);
                        }}
                    >
                        Log out
                    </button>
                </div>
            ) : (
                <div className="login-form-container">
                    <h2 className="login-header">Log In</h2>
                    <form className="login-form">
                        <label>
                            username:{" "}
                            <input
                                className="login-input"
                                type="text"
                                value={usernameInput}
                                onChange={(e) => {
                                    setUsernameInput(e.target.value);
                                }}
                                required
                            />
                        </label>
                        <label>
                            password:{" "}
                            <input className="login-input" type="password" />
                        </label>
                        <button className="login-button" onClick={handleLogin}>
                            Submit
                        </button>
                        {isError && (
                            <p className="login-err">username not found</p>
                        )}
                    </form>
                </div>
            )}
        </>
    );
}
