import React from 'react';
import './Article.css'

const article = (props) => (
    <div className={'Article'}>
        <p >{props.title}</p>
        <button onClick={() => props.saveArticle(props.article)}>save article</button>
    </div>
)
export default article;