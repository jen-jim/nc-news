import { useState } from "react";

export default function Drawer({ children, commentCount }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="drawer">
            <button
                className="drawer-button"
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <p className="comment-count">
                    <i className="fa-solid fa-comment articles-icon"></i>
                    {commentCount} View/Hide Comments
                </p>
            </button>
            {open ? children : null}
        </div>
    );
}
