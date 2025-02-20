import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";

export default function ArticleList({ topic }) {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchArticles(topic).then((articlesFromApi) => {
            setArticles(articlesFromApi);
            setIsLoading(false);
        });
    }, [topic]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className="article-list-container">
            <ul className="article-list">
                {articles.map((article) => (
                    <li key={article.article_id} className="article-card">
                        <ArticleCard article={article} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
