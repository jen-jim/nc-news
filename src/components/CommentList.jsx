import { useContext, useEffect, useState } from "react";
import { ArticleComments } from "../contexts/ArticleComments";
import { fetchCommentsByArticleId } from "../api";
import Loading from "./Loading";
import Error from "./Error";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";

export default function CommentList({ articleId }) {
    const { comments, setComments } = useContext(ArticleComments);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchCommentsByArticleId(articleId)
            .then((commentsFromApi) => {
                setComments(commentsFromApi);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, [articleId, setComments]);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <Error error={error.response} />;
    }

    return (
        <section className="comments-list-container">
            <NewComment articleId={articleId} />
            <ul className="comments-list">
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_id} className="comment-card">
                            <CommentCard comment={comment} />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
