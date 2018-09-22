import React, {Component} from 'react';
import ArticleContainer from '../../Components/ArticleContainer/ArticleContainer';
import API from '../../utils/API'

class ArticleResults extends Component {
    state = {
        articles: [],
        savedArticles: [],
      }
      componentDidMount() {
          API.getNYTArticles()
          .then(res => this.setState({articles: res.data}));
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
          <h2>Here's your Latest News</h2>
            <ArticleContainer
              articles={this.state.articles}
              saveArticleHandler={this.saveArticleHandler}
            />
          </div>
        );
      }
    }
    export default ArticleResults;