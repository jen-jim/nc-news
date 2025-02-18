import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/home";

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </>
    );
}
