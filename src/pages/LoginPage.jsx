import { useContext } from "react";
import { UserAccount } from "../contexts/UserAccount";
import LoginForm from "../components/LoginForm";
import LoginSuccess from "../components/LoginSuccess";
import "../css/login.css";

export default function LoginPage() {
    const { loggedUser } = useContext(UserAccount);

    return <>{loggedUser ? <LoginSuccess /> : <LoginForm />}</>;
}
