export default function ArticleCard({ article }) {
    const {
        article_img_url,
        author,
        comment_count,
        created_at,
        title,
        topic,
        votes
    } = article;

    return (
        <>
            <h2>{title}</h2>
            <img src={article_img_url} />
            <p className="created-at">created at: {created_at}</p>
            <p className="author">by: {author}</p>
            <p className="topic">
                <i className="fa-solid fa-hashtag topic-icon"></i>
                {topic}
            </p>
            <p className="comment-count">
                <i className="fa-solid fa-comment comment-icon"></i>
                {comment_count}
            </p>
            <p className="votes">
                <i className="fa-solid fa-thumbs-up votes-icon"></i>
                {votes}
            </p>
        </>
    );
}
