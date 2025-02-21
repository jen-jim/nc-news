import { useEffect, useState } from "react";
import { fetchTopics } from "../api";
import Loading from "./Loading";
import Error from "./Error";
import { NavLink } from "react-router";

export default function BrowseTopics() {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchTopics()
            .then((topicsFromApi) => {
                setTopics(topicsFromApi);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <Error error={error.response} />;
    }

    return (
        <section className="topics-container">
            <h2 className="browse-header">Browse topics:</h2>
            <ul className="topics-list">
                {topics.map((topic) => (
                    <li key={topic.slug}>
                        <NavLink
                            to={`/topics/${topic.slug}`}
                            className="topic-button"
                        >
                            {topic.slug}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </section>
    );
}
