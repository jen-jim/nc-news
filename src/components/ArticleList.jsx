import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";
import SortDropdown from "./SortDropdown";
import { useSearchParams } from "react-router";

export default function ArticleList({ topic }) {
    const [searchParams] = useSearchParams();
    const sort_by = searchParams.get("sort_by");
    const order = searchParams.get("order");
    const [articles, setArticles] = useState([]);
    const [sortValue, setSortValue] = useState(sort_by || "created_at");
    const [orderValue, setOrderValue] = useState(order || "desc");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (sort_by) {
            setSortValue(sort_by);
        }
        if (order) {
            setOrderValue(order);
        }
    }, [sort_by, order]);

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
