import { useState } from "react";
import { patchArticleVotes } from "../api";

export default function Votes({ article_id, votes }) {
    const [votesToUpdate, setVotesToUpdate] = useState(0);

    function handleVote(amount) {
        if (votesToUpdate === 0) {
            setVotesToUpdate(amount);
            patchArticleVotes(article_id, amount).catch(() => {
                setVotesToUpdate(0);
            });
        }
    }

    return (
        <div className="votes-container">
            <i className="fa-solid fa-thumbs-up articles-icon"></i>
            <button
                className="votes-button"
                onClick={() => {
                    handleVote(-1);
                }}
                disabled={Boolean(votesToUpdate)}
            >
                <i className="fa-solid fa-minus"></i>
            </button>
            {votes + votesToUpdate}
            <button
                className="votes-button"
                onClick={() => {
                    handleVote(1);
                }}
                disabled={Boolean(votesToUpdate)}
            >
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
}
