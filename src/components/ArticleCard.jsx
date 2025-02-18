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

    const formattedDate = new Date(created_at).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    return (
        <>
            <h3 className="title">{title}</h3>
            <img src={article_img_url} />
            <p className="author">by: {author}</p>
            <p className="created-at">{formattedDate}</p>
            <p className="topic">
                <i className="fa-solid fa-hashtag articles-icon"></i>
                {topic}
            </p>
            <p className="comment-count">
                <i className="fa-solid fa-comment articles-icon"></i>
                {comment_count}
            </p>
            <p className="votes">
                <i className="fa-solid fa-thumbs-up articles-icon"></i>
                {votes}
            </p>
        </>
    );
}
