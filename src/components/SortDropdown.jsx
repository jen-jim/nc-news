import { useSearchParams } from "react-router";

export default function SortDropdown({
    sortValue,
    setSortValue,
    orderValue,
    setOrderValue
}) {
    const [, setSearchParams] = useSearchParams();

    const options = [
        { value: "created_at", label: "date" },
        { value: "comment_count", label: "comments" },
        { value: "votes", label: "votes" }
    ];

    return (
        <div className="sort-container">
            <div className="dropdown-container">
                <label htmlFor="sort-dropdown">Sort by: </label>
                <select
                    id="sort-dropdown"
                    className="sort-dropdown"
                    defaultValue={sortValue}
                    onChange={(e) => {
                        setSortValue(e.target.value);
                        setSearchParams({
                            sort_by: e.target.value,
                            order: orderValue
                        });
                    }}
                >
                    {options.map((option) => (
                        <option
                            className="dropdown-item"
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className="dropdown-container">
                <label htmlFor="order-dropdown">Order: </label>
                <select
                    id="order-dropdown"
                    className="sort-dropdown"
                    defaultValue={orderValue}
                    onChange={(e) => {
                        setOrderValue(e.target.value);
                        setSearchParams({
                            sort_by: sortValue,
                            order: e.target.value
                        });
                    }}
                >
                    <option className="dropdown-item" value="desc">
                        descending
                    </option>
                    <option className="dropdown-item" value="asc">
                        ascending
                    </option>
                </select>
            </div>
        </div>
    );
}
