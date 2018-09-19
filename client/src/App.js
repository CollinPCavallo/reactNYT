import React, { Component } from "react";
import Navbar from './Components/Navbar/Navbar'
import ArticleContainer from './Components/ArticleContainer/ArticleContainer';
import API from './utils/API'
import "./App.css";


class App extends Component {
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
      <div className="App">
        <Navbar />
        <ArticleContainer
          articles={this.state.articles}
          getNYTArticles={() => this.getNYTArticles()}
          saveArticleHandler={this.saveArticleHandler}
        />
      </div>
    );
  }
}

export default App;
