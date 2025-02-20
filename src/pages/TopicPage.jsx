import { useParams } from "react-router";
import TopicHeader from "../components/TopicHeader";
import ArticleList from "../components/ArticleList";
import "../css/topic.css";

export default function TopicPage() {
    const { topic } = useParams();

    return (
        <>
            <TopicHeader topic={topic} />
            <ArticleList topic={topic} />
        </>
    );
}
