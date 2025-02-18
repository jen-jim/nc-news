import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchArticles().then((articlesFromApi) => {
            setArticles(articlesFromApi);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="article-list-container">
            <h2>Most recent articles:</h2>
            <ul className="article-list">
                {articles.map((article) => (
                    <li key={article.article_id} className="article-card">
                        <ArticleCard article={article} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
