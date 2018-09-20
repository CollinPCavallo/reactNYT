import React from 'react';
import './Article.css'

const article = (props) => (
    <div className={'Article'}>
        <p >{props.title}</p>
        <button 
            onClick={props.article.headline ? 
                () => props.saveArticle(props.article)
                : () => props.deleteArticle(props.article._id)}
                >
            {props.article.headline ? 'Save Article' : 'Remove from Saved'}
        </button>
        </div>
)
export default article;