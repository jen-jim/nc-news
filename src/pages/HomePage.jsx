import ArticleList from "../components/ArticleList";
import BrowseTopics from "../components/BrowseTopics";
import "../css/home.css";

export default function HomePage() {
    return (
        <>
            <BrowseTopics />
            <ArticleList />
        </>
    );
}
