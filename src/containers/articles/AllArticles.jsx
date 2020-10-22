import React, { Component } from 'react';
import Loading from '../../components/loading/Loading';
import ArticleList from '../../components/articles/ArticleList';
import Controls from '../../components/news-search/Controls';
import { getArticles } from '../../services/news-api';

export default class AllArticles extends Component {
  state = {
    text: '',
    loading: false,
    articles: []
  }

    handleChange = ({ target }) => {
      this.setState({ text: target.value });
    }

    handleSubmit = e => {
      e.preventDefault();
      this.setState({ loading: true });

      getArticles(this.state.text)
        .then(articles => {
          this.setState({ articles });
        })
        .then(this.setState({ loading: false }));
    }
     
    render() {
      const { text, loading, articles } = this.state;
      if(loading) return <Loading />;
      return (
        <>
          <Controls text={text}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} />
          <ArticleList articles={articles} />
        </>
      );
    }
}
