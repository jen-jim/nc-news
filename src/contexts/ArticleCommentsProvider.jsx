import { useState } from "react";
import { ArticleComments } from "./ArticleComments";

export default function ArticleCommentsProvider({ children }) {
    const [comments, setComments] = useState([]);

    return (
        <ArticleComments.Provider value={{ comments, setComments }}>
            {children}
        </ArticleComments.Provider>
    );
}
