import { useContext, useState } from "react";
import { UserAccount } from "../contexts/UserAccount";
import { postComment } from "../api";

export default function NewComment({ articleId, onNewComment }) {
    const { loggedUser } = useContext(UserAccount);
    const [commentInput, setCommentInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleNewComment(e) {
        e.preventDefault();

        if (commentInput) {
            setIsLoading(true);
            postComment(articleId, commentInput, loggedUser.username).then(
                () => {
                    onNewComment();
                    setCommentInput("");
                    setIsLoading(false);
                }
            );
        } else return;
    }

    return (
        <form className="comment-form">
            <label>
                <i className="fa-solid fa-pen-clip new-comment-icon"></i>{" "}
                {loggedUser ? loggedUser.username : "please log in to comment"}
                {loggedUser && (
                    <div>
                        <textarea
                            className="new-comment-input"
                            rows="2"
                            placeholder="Write a new comment..."
                            onChange={(e) => {
                                setCommentInput(e.target.value);
                            }}
                            value={commentInput}
                        />
                        <button
                            className="post-comment-button"
                            onClick={handleNewComment}
                        >
                            <i className="fa-solid fa-paper-plane new-comment-icon"></i>{" "}
                            Post comment
                        </button>{" "}
                        {isLoading && (
                            <i className="fa-solid fa-circle-notch loading-spinner"></i>
                        )}
                    </div>
                )}
            </label>
        </form>
    );
}
