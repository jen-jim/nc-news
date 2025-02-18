import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchArticleByArticleId } from "../api";
import Loading from "../components/Loading";

export default function Article() {
    const { article_id } = useParams();
    const [currArticle, setCurrArticle] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchArticleByArticleId(article_id).then((articleFromApi) => {
            // console.log(articleFromApi);
            setCurrArticle(articleFromApi);
            setIsLoading(false);
        });
    }, [article_id]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <p>in article page</p>
            {console.log(currArticle)}
        </div>
    );
}
