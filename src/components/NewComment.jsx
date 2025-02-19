import { useContext } from "react";
import { UserAccount } from "../contexts/UserAccount";

export default function NewComment() {
    const { loggedUser } = useContext(UserAccount);

    return (
        <form className="comment-form">
            <label>
                <i className="fa-solid fa-pen-clip new-comment-icon"></i>{" "}
                {loggedUser ? loggedUser.username : "please log in to comment"}
                <textarea
                    className="new-comment-input"
                    rows="2"
                    placeholder="Write a new comment..."
                />
            </label>
            <button className="post-comment-button">
                <i className="fa-solid fa-paper-plane new-comment-icon"></i>{" "}
                Post comment
            </button>
        </form>
    );
}
