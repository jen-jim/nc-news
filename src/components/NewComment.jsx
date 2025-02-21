import { useContext, useState } from "react";
import { UserAccount } from "../contexts/UserAccount";
import { ArticleComments } from "../contexts/ArticleComments";
import { fetchCommentsByArticleId, postComment } from "../api";

export default function NewComment({ articleId }) {
    const { loggedUser } = useContext(UserAccount);
    const { setComments } = useContext(ArticleComments);
    const [commentInput, setCommentInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    function handleNewComment(e) {
        e.preventDefault();

        if (commentInput) {
            setIsLoading(true);
            setError(null);
            postComment(articleId, commentInput, loggedUser.username)
                .catch((err) => {
                    setError(err);
                    setIsLoading(false);
                })
                .then(() => fetchCommentsByArticleId(articleId))
                .then((commentsFromApi) => {
                    setComments(commentsFromApi);
                    setCommentInput("");
                    setIsLoading(false);
                })
                .catch((err) => {
                    setError(err);
                    setIsLoading(false);
                });
        } else {
            setError({ msg: "Please enter a comment" });
        }
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
                            className="comment-button"
                            onClick={handleNewComment}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <i className="fa-solid fa-circle-notch loading-spinner"></i>
                            ) : (
                                <i className="fa-solid fa-paper-plane new-comment-icon"></i>
                            )}{" "}
                            Post comment
                        </button>
                        {error && (
                            <p className="error-msg">
                                {error.msg ||
                                    "Something went wrong, please try again"}
                            </p>
                        )}
                    </div>
                )}
            </label>
        </form>
    );
}
