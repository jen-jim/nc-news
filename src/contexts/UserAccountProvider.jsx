import { useState } from "react";
import { UserAccount } from "./UserAccount";

export default function UserAccountProvider({ children }) {
    const [loggedUser, setLoggedUser] = useState(null);

    return (
        <UserAccount.Provider value={{ loggedUser, setLoggedUser }}>
            {children}
        </UserAccount.Provider>
    );
}
