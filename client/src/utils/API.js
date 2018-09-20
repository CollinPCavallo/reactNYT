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
    },
    deleteArticle : (id) => {
        return axios.delete('/api/article/' + id)
    }
}