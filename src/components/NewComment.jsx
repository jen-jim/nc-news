import { useContext, useState } from "react";
import { UserAccount } from "../contexts/UserAccount";
import { ArticleComments } from "../contexts/ArticleComments";
import { fetchCommentsByArticleId, postComment } from "../api";

export default function NewComment({ articleId }) {
    const { loggedUser } = useContext(UserAccount);
    const { setComments } = useContext(ArticleComments);
    const [commentInput, setCommentInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleNewComment(e) {
        e.preventDefault();

        if (commentInput) {
            setIsLoading(true);
            postComment(articleId, commentInput, loggedUser.username)
                .then(() => fetchCommentsByArticleId(articleId))
                .then((commentsFromApi) => {
                    setComments(commentsFromApi);
                    setCommentInput("");
                    setIsLoading(false);
                });
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
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <i className="fa-solid fa-circle-notch loading-spinner"></i>
                            ) : (
                                <i className="fa-solid fa-paper-plane new-comment-icon"></i>
                            )}{" "}
                            Post comment
                        </button>
                    </div>
                )}
            </label>
        </form>
    );
}
