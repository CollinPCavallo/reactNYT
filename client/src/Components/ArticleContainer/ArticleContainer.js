import React from 'react';
import Article from './Article/Article'
import './ArticleContainer.css'
const ArticleContainer = (props) => (
    <div id='ArticleContainer'>
        {props.articles.map(article => {
            return (
                <Article
                    key={article._id}
                    title={article.headline ? article.abstract ? article.abstract : article.headline.main : article.title}
                    article={article}
                    saveArticle={props.saveArticleHandler}
                    deleteArticle={props.deleteArticleHandler}
                />
            )
        })}
    </div>
)
export default ArticleContainer;