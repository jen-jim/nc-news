export default function SearchBar() {
    return (
        <form className="search-bar-container">
            <input
                className="search-input"
                type="text"
                placeholder="Search topics"
            />
            <button className="search-button">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    );
}
