import React, { Component } from 'react';
import ArticleContainer from '../../Components/ArticleContainer/ArticleContainer';
import API from '../../utils/API'

class SavedArticle extends Component {
    state={
        savedArticles: [],
    }
    componentDidMount() {
        API.getArticles()
            .then(res => this.setState({ savedArticles: res.data}))
    }
    deleteArticleHandler = (id) => {
        API.deleteArticle(id)
            .then(res => console.log(res))
            .then(() => API.getArticles()
                .then(res => this.setState({ savedArticles : res.data})))
    }
    
    render() {
        return (
            <div>
            <ArticleContainer 
                articles={this.state.savedArticles}
                deleteArticleHandler={this.deleteArticleHandler}
            />
            </div>
        
        )
    }
}
export default SavedArticle;