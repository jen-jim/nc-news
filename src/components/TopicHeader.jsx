import { useEffect, useState } from "react";
import { fetchTopics } from "../api";
import Loading from "./Loading";
import Error from "./Error";

export default function TopicHeader({ topic }) {
    const [currTopic, setCurrTopic] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchTopics()
            .then((topicsFromApi) => {
                const foundTopic = topicsFromApi.find(
                    (topicObj) => topicObj.slug === topic
                );
                setCurrTopic(foundTopic);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, [topic]);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <Error error={error.response} />;
    }

    return (
        <section className="topic-header-container">
            <h2 className="topic-title">{currTopic?.slug?.toUpperCase()}</h2>
            <p className="topic-desc">{currTopic?.description}</p>
        </section>
    );
}
