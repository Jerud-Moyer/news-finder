import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ source, author, title, content }) => (
  <>
    <span>{source}</span>
    <span>{title}</span>
    <span>{author}</span>
    <div>{content}</div>
  </>
);

Article.propTypes = {
  source: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};


export default Article;
