var Article = require('../models/article');
const request = require('request')


module.exports = (app) => {
    app.post('/api/nyt', (req, res) => {
        request.get({
            url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
            qs: {
                'api-key': '16610b06898d4ee7abec86c84af3e94c'
            },
        }, function (err, response, body) {
            body = JSON.parse(body);
            res.json(body.response.docs);
        })
    })
    app.get('/api/articles', (req, res) => {
        Article.find({}).sort({
                dateAdded: -1
            })
            .then(dbArticles => res.json(dbArticles))
            .catch(err => console.log(err));
    });
    app.post('/api/article', (req, res) => {
        const newArticle = {
            title: req.body.headline.main,
            url: req.body.web_url,
            date: req.body.oub_date
        }
        Article.create(newArticle)
            .then(results => res.json(results))
            .catch(err => console.log(err));
    })
};