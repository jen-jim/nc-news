import Header from "./Header";
import HomeButton from "./HomeButton";
import SearchBar from "./SearchBar";
import UserButton from "./UserButton";
import "../css/nav-bar.css";

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <HomeButton />
                </li>
                <li>
                    <Header />
                </li>
                <li>
                    <SearchBar />
                </li>
                <li>
                    <UserButton />
                </li>
            </ul>
        </nav>
    );
}
