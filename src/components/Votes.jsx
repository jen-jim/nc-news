import { useState } from "react";
import { patchArticleVotes } from "../api";

export default function Votes({ article_id, votes }) {
    const [currVotes, setCurrVotes] = useState(0);

    function handleVotes() {
        if (currVotes === 0) {
            setCurrVotes(1);
            patchArticleVotes(article_id).catch(() => {
                setCurrVotes(0);
            });
        }
    }

    return (
        <div className="votes-container">
            <i className="fa-solid fa-thumbs-up articles-icon"></i>
            <button className="votes-button">
                <i className="fa-solid fa-minus"></i>
            </button>
            {votes + currVotes}
            {!currVotes ? (
                <button className="votes-button" onClick={handleVotes}>
                    <i className="fa-solid fa-plus"></i>
                </button>
            ) : (
                <button className="votes-button" disabled>
                    <i className="fa-solid fa-plus"></i>
                </button>
            )}
        </div>
    );
}
