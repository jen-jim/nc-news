import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchArticleByArticleId } from "../api";
import Loading from "../components/Loading";
import Article from "../components/Article";

export default function ArticlePage() {
    const { article_id } = useParams();
    const [currArticle, setCurrArticle] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchArticleByArticleId(article_id).then((articleFromApi) => {
            setCurrArticle(articleFromApi);
            setIsLoading(false);
        });
    }, [article_id]);

    if (isLoading) {
        return <Loading />;
    }

    return <Article article={currArticle} />;
}
