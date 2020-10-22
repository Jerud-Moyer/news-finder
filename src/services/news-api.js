export const getArticles = text => {
  // eslint-disable-next-line max-len
  return fetch(`https://newsapi.org/v2/everything?q=
  ${text}&apiKey=e87d32e59f9a4846be060f46555c13b3`)
    .then(res => res.json())
    .then(json => json.articles)
    .then(articles => articles.map(article => ({
      source: article.source.name,
      author: article.author,
      title: article.title,
      content: article.content
    })))
    .then(console.log);
};
