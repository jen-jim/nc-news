import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticleCommentsProvider from "../contexts/ArticleCommentsProvider";
import { fetchArticleByArticleId } from "../api";
import Loading from "../components/Loading";
import Article from "../components/Article";
import CommentList from "../components/CommentList";
import Drawer from "../components/Drawer";
import "../css/article.css";

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
