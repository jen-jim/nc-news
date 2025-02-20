import { useContext, useState } from "react";
import { ArticleComments } from "../contexts/ArticleComments";
import { deleteComment, fetchCommentsByArticleId } from "../api";

export default function RemoveComment({ commentId, articleId }) {
    const { setComments } = useContext(ArticleComments);
    const [isLoading, setIsLoading] = useState(false);

    function handleRemoveComment(e) {
        e.preventDefault();
        setIsLoading(true);
        deleteComment(commentId)
            .then(() => fetchCommentsByArticleId(articleId))
            .then((commentsFromApi) => {
                setComments(commentsFromApi);
                setIsLoading(false);
            });
    }

    return (
        <button
            className="delete-comment-button"
            onClick={handleRemoveComment}
            disabled={isLoading}
        >
            {isLoading ? (
                <i className="fa-solid fa-circle-notch loading-spinner"></i>
            ) : (
                <i className="fa-solid fa-trash-can"></i>
            )}
        </button>
    );
}
