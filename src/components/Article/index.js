// Article.js

import React from 'react';
import './Article.css'; // Import the CSS for styling

const Article = ({ title, author, description, content, url, urlToImage }) => (
  <div className="article-container">
    <img src={urlToImage} alt="Article" className="article-image" />
    <div className="article-details">
      <h2 className="article-title">
        <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
      </h2>
      <p className="article-author">{author}</p>
      <p className="article-description">{description}</p>
      <p className="article-content">{content}</p>
    </div>
  </div>
);

export default Article;
