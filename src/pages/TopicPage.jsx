import { useParams } from "react-router";
import ArticleList from "../components/ArticleList";

export default function TopicPage() {
    const { topic } = useParams();

    return <ArticleList topic={topic} />;
}
