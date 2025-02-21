import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";
import SortDropdown from "./SortDropdown";

export default function ArticleList({ topic }) {
    const [articles, setArticles] = useState([]);
    const [sortValue, setSortValue] = useState("created_at");
    const [orderValue, setOrderValue] = useState("desc");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchArticles(topic, sortValue, orderValue).then((articlesFromApi) => {
            setArticles(articlesFromApi);
            setIsLoading(false);
        });
    }, [topic, sortValue, orderValue]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className="article-list-container">
            <SortDropdown
                sortValue={sortValue}
                setSortValue={setSortValue}
                orderValue={orderValue}
                setOrderValue={setOrderValue}
            />
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
