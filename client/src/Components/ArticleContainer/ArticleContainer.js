import React from 'react';
import Button from '../Button/Button'
import Article from './Article/Article'
import './ArticleContainer.css'
const ArticleContainer = (props) => (
    <div className='ArticleContainer'>
    <Button clicked={props.getNYTArticles}/>
        {props.articles.map(article => {
            return (
                <Article
                    key={article._id}
                    title={article.headline.main}
                    article={article}
                    saveArticle={props.saveArticleHandler}
                />
            )
        })}
    </div>
)
export default ArticleContainer;