import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticleCommentsProvider from "../contexts/ArticleCommentsProvider";
import { fetchArticleByArticleId } from "../api";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Article from "../components/Article";
import CommentList from "../components/CommentList";
import Drawer from "../components/Drawer";
import "../css/article.css";

export default function ArticlePage() {
    const { article_id } = useParams();
    const [currArticle, setCurrArticle] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchArticleByArticleId(article_id)
            .then((articleFromApi) => {
                setCurrArticle(articleFromApi);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, [article_id]);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <Error error={error.response} />;
    }

    return (
        <>
            <Article article={currArticle} />
            <Drawer commentCount={currArticle.comment_count}>
                <ArticleCommentsProvider>
                    <CommentList articleId={article_id} />
                </ArticleCommentsProvider>
            </Drawer>
        </>
    );
}
