import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../api";
import Loading from "./Loading";
import CommentCard from "./CommentCard";

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
        <div className="comments-list-container">
            <ul className="comments-list">
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_id} className="comment-card">
                            <CommentCard comment={comment} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
