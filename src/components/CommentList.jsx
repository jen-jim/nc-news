import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../api";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";

export default function CommentList({ articleId }) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchCommentsByArticleId(articleId).then((commentsFromApi) => {
            setComments(commentsFromApi);
            setIsLoading(false);
        });
    }, [articleId]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className="comments-list-container">
            <NewComment
                articleId={articleId}
                onNewComment={() => {
                    fetchCommentsByArticleId(articleId).then(
                        (commentsFromApi) => {
                            setComments(commentsFromApi);
                        }
                    );
                }}
            />
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
