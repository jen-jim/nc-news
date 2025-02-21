import { useContext, useState } from "react";
import { ArticleComments } from "../contexts/ArticleComments";
import { deleteComment, fetchCommentsByArticleId } from "../api";

export default function RemoveComment({ commentId, articleId }) {
    const { setComments } = useContext(ArticleComments);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    function handleRemoveComment(e) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        deleteComment(commentId)
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            })
            .then(() => fetchCommentsByArticleId(articleId))
            .then((commentsFromApi) => {
                setComments(commentsFromApi);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }

    return (
        <div>
            <button
                className="comment-button"
                onClick={handleRemoveComment}
                disabled={isLoading}
            >
                {isLoading ? (
                    <i className="fa-solid fa-circle-notch loading-spinner"></i>
                ) : (
                    <i className="fa-solid fa-trash-can"></i>
                )}
            </button>
            {error && (
                <p className="error-msg">
                    Something went wrong, please try again
                </p>
            )}
        </div>
    );
}
