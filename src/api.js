import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-app-5r8g.onrender.com/api"
});

export function fetchArticles() {
    return newsApi.get("/articles").then(({ data }) => data.articles);
}

export function fetchArticleByArticleId(articleId) {
    return newsApi
        .get(`/articles/${articleId}`)
        .then(({ data }) => data.article);
}
