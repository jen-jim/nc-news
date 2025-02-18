import { formatDate } from "../utils";

export default function Article({ article }) {
    const {
        title,
        topic,
        author,
        body,
        created_at,
        votes,
        article_img_url,
        comment_count
    } = article;

    return (
        <div className="article-container">
            <h3 className="title">{title}</h3>
            <p className="author">by: {author}</p>
            <p className="created-at">{formatDate(created_at)}</p>
            <p className="topic">
                <i className="fa-solid fa-hashtag articles-icon"></i>
                {topic}
            </p>
            <p className="votes">
                <i className="fa-solid fa-thumbs-up articles-icon"></i>
                {votes}
            </p>
            <div className="img-container">
                <img src={article_img_url} />
            </div>
            <p className="body">{body}</p>
            <p className="comment-count">
                <i className="fa-solid fa-comment articles-icon"></i>
                {comment_count}
            </p>
        </div>
    );
}
