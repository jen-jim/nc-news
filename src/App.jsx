import { Route, Routes } from "react-router";
import UserAccountProvider from "./contexts/UserAccountProvider";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ArticlePage from "./pages/ArticlePage";
import TopicPage from "./pages/TopicPage";
import Error from "./components/Error";

export default function App() {
    return (
        <>
            <UserAccountProvider>
                <NavBar />
                <Routes>
                    <Route path="/*" element={<Error />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/users/login" element={<LoginPage />} />
                    <Route
                        path="/articles/:article_id"
                        element={<ArticlePage />}
                    />
                    <Route path="/topics/:topic" element={<TopicPage />} />
                </Routes>
            </UserAccountProvider>
        </>
    );
}
