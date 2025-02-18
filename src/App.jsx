import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/articles/:article_id" element={<ArticlePage />} />
            </Routes>
        </>
    );
}
