import React, { Component } from 'react';
import axios from 'axios';
import Article from '../Article';
import './Home.css'; // Import CSS file for styling

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      searchQuery: ''
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=981950df2dbd4436a3daf31bdc419ab2');
      this.setState({ articles: response.data.articles });
      console.log(response);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { articles, searchQuery } = this.state;
    const filteredArticles = articles.filter(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="home-container">
        <div className="logo-container">
          <img src="/logoimg.png" alt="Logo" className="logo-image" />
          <img src="/image.png" alt="Image" className="main-image" />
        </div>
        <div className="search-container">
          <div className="search-input-container">
            <input
              type="search"
              value={searchQuery}
              onChange={this.handleSearchChange}
              placeholder="Search..."
              className="search-input"
            />
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>
        <div className="article-list">
          {filteredArticles.length === 0 ? (
            <div className="no-results">
              <img src="https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png" alt="No results" className="no-results-image" />
              <p>No articles found</p>
            </div>
          ) : (
            filteredArticles.map((article, index) => (
              <Article
                key={index}
                title={article.title}
                author={article.author}
                description={article.description}
                content={article.content}
                url={article.url}
                urlToImage={article.urlToImage}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Home;
