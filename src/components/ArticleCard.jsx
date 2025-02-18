import { formatDate } from "../utils";

export default function ArticleCard({ article }) {
    const {
        title,
        topic,
        author,
        created_at,
        votes,
        article_img_url,
        comment_count
    } = article;

    return (
        <>
            <h3 className="title">{title}</h3>
            <img src={article_img_url} />
            <p className="author">by: {author}</p>
            <p className="created-at">{formatDate(created_at)}</p>
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
