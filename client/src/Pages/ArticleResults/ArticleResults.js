import React, {Component} from 'react';
import ArticleContainer from '../../Components/ArticleContainer/ArticleContainer';
import API from '../../utils/API'

class ArticleResults extends Component {
    state = {
        articles: [],
        savedArticles: [],
      }
      getNYTArticles = () => {
        API.getNYTArticles()
        .then(res => this.setState({articles: res.data}));
      }
      saveArticleHandler = (article) => {
        API.saveArticle(article)
          .then(res => this.setState({ savedArticles : [...this.state.savedArticles, res.data]}))
          .catch(err => console.log(err));
    
      }
      render() {
        return (
          <div>
          <button onClick={this.getNYTArticles}>Get Articles</button>
            <ArticleContainer
              articles={this.state.articles}
              saveArticleHandler={this.saveArticleHandler}
            />
          </div>
        );
      }
    }
    export default ArticleResults;