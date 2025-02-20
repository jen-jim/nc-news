import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate(`/topics/${searchTerm}`);
        setSearchTerm("");
    }

    return (
        <form className="search-bar-container">
            <input
                className="search-input"
                type="text"
                value={searchTerm}
                placeholder="Search topics"
                onChange={(e) => setSearchTerm(e.target.value)}
                required
            />
            <button
                className="search-button"
                type="submit"
                onClick={handleSubmit}
            >
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    );
}
