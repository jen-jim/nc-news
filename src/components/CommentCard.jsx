import { useContext } from "react";
import { UserAccount } from "../contexts/UserAccount";
import { formatDate } from "../utils";
import RemoveComment from "./RemoveComment";

export default function CommentCard({ comment }) {
    const { loggedUser } = useContext(UserAccount);

    const { comment_id, body, article_id, author, votes, created_at } = comment;

    return (
        <>
            <p className="comment-details">
                <span className="comment-author">{author}</span>{" "}
                <span className="comment-created-at">
                    {formatDate(created_at)}
                </span>
            </p>
            <p className="comment-body">{body}</p>
            <p className="votes">
                <i className="fa-solid fa-thumbs-up comments-icon"></i>
                {votes}
            </p>
            {loggedUser.username === author && (
                <RemoveComment commentId={comment_id} articleId={article_id} />
            )}
        </>
    );
}
