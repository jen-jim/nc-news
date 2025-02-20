import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-app-5r8g.onrender.com/api"
});

export function fetchArticles(topic) {
    return newsApi
        .get("/articles", { params: { topic: topic } })
        .then(({ data }) => data.articles);
}

export function fetchArticleByArticleId(articleId) {
    return newsApi
        .get(`/articles/${articleId}`)
        .then(({ data }) => data.article);
}

export function fetchCommentsByArticleId(articleId) {
    return newsApi
        .get(`/articles/${articleId}/comments`)
        .then(({ data }) => data.comments);
}

export function patchArticleVotes(articleId, voteAmount) {
    return newsApi.patch(`/articles/${articleId}`, { inc_votes: voteAmount });
}

export function fetchUsers() {
    return newsApi.get("/users").then(({ data }) => data.users);
}

export function postComment(articleId, body, author) {
    return newsApi.post(`/articles/${articleId}/comments`, { body, author });
}

export function deleteComment(commentId) {
    return newsApi.delete(`/comments/${commentId}`);
}
