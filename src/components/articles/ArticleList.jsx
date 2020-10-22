import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
 
  const articleElements = articles.map(article => (
    <li key={ articles.title }>
      <Article {...article}/>
    </li>

  ));
  return (
    <ul>
      {articleElements}
    </ul>
  );

};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    source: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isReqiured,
    content: PropTypes.string.isRequired
  })).isRequired
};


export default ArticleList;
