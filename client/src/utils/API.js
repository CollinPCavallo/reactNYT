import axios from 'axios';

export default {
    getNYTArticles: () => {
        return axios.post('/api/nyt')
    },
    saveArticle: (article) => {
        return axios.post('/api/article', article);
    },
    getArticles: () => {
        return axios.get('/api/articles');
    }
}