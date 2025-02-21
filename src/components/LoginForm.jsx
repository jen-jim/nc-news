import { useContext, useEffect, useState } from "react";
import { UserAccount } from "../contexts/UserAccount";
import { fetchUsers } from "../api";
import Loading from "./Loading";
import Error from "./Error";

export default function LoginForm() {
    const [users, setUsers] = useState([]);
    const [usernameInput, setUsernameInput] = useState("");
    const { setLoggedUser } = useContext(UserAccount);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userNotFound, setUserNotFound] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchUsers()
            .then((usersFromApi) => {
                setUsers(usersFromApi);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <Error error={error.response} />;
    }

    function handleLogin(e) {
        e.preventDefault();

        const foundUser = users.find((user) => user.username === usernameInput);

        if (foundUser) {
            setLoggedUser(foundUser);
        } else {
            setUserNotFound(true);
        }
    }

    return (
        <section className="login-form-container">
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
                    password: <input className="login-input" type="password" />
                </label>
                <button className="login-button" onClick={handleLogin}>
                    Submit
                </button>
                {userNotFound && <p className="login-err">user not found</p>}
            </form>
        </section>
    );
}
