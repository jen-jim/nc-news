import { formatDate } from "../utils";

export default function CommentCard({ comment }) {
    const { body, author, votes, created_at } = comment;

    return (
        <>
            <p className="comment-author">{author}</p>
            <p className="comment-created-at">{formatDate(created_at)}</p>
            <p className="comment-body">{body}</p>
            <p className="votes">
                <i className="fa-solid fa-thumbs-up comments-icon"></i>
                {votes}
            </p>
        </>
    );
}
