import { formatDate } from "../utils";
import Votes from "./Votes";

export default function Article({ article }) {
    const {
        article_id,
        title,
        topic,
        author,
        body,
        created_at,
        votes,
        article_img_url
    } = article;

    return (
        <section className="article-container">
            <h3 className="title">{title}</h3>
            <p className="author">by: {author}</p>
            <p className="created-at">{formatDate(created_at)}</p>
            <p className="topic">
                <i className="fa-solid fa-hashtag articles-icon"></i>
                {topic}
            </p>
            <Votes article_id={article_id} votes={votes} />
            <div className="img-container">
                <img src={article_img_url} />
            </div>
            <p className="body">{body}</p>
        </section>
    );
}
