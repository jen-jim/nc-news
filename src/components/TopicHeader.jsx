import { useEffect, useState } from "react";
import { fetchTopics } from "../api";
import Loading from "./Loading";

export default function TopicHeader({ topic }) {
    const [currTopic, setCurrTopic] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchTopics().then((topicsFromApi) => {
            const foundTopic = topicsFromApi.find(
                (topicObj) => topicObj.slug === topic
            );
            setCurrTopic(foundTopic);
            setIsLoading(false);
        });
    }, [topic]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className="topic-header-container">
            <h2 className="topic-title">{currTopic?.slug?.toUpperCase()}</h2>
            <p className="topic-desc">{currTopic?.description}</p>
        </section>
    );
}
