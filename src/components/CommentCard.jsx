export default function CommentCard({ comment }) {
    const { body, author, votes, created_at } = comment;

    const formattedDate = new Date(created_at).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    return (
        <>
            <p className="comment-author">{author}</p>
            <p className="comment-created-at">{formattedDate}</p>
            <p className="comment-body">{body}</p>
            <p className="votes">
                <i className="fa-solid fa-thumbs-up comments-icon"></i>
                {votes}
            </p>
        </>
    );
}
