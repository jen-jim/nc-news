import { formatDate } from "../utils";

export default function CommentCard({ comment }) {
    const { body, author, votes, created_at } = comment;

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
        </>
    );
}
