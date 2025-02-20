import { Route, Routes } from "react-router";
import UserAccountProvider from "./contexts/UserAccountProvider";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import LoginPage from "./pages/LoginPage";

export default function App() {
    return (
        <>
            <UserAccountProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/articles/:article_id"
                        element={<ArticlePage />}
                    />
                    <Route path="/users/login" element={<LoginPage />} />
                </Routes>
            </UserAccountProvider>
        </>
    );
}
