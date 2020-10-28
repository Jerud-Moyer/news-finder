import React from 'react';
import { render, screen } from '@testing-library/react';
import AllArticles from './AllArticles';
import { getArticles } from '../../services/news-api';

jest.mock('../../services/news-api.js');

describe('AllArticles container', () => {
  it('displays a loading screen at first', () => {
    getArticles.mockResolvedValue([
      {
        source: 'extra, extra!',
        author: 'read',
        title: 'all',
        content: 'about it'
      }
    ]);

    render(<AllArticles />);

    screen.getByAltText('spinning globe');
  });

  it('displays a list of articles', async() => {
    getArticles.mockResolvedValue([
      {
        source: 'extra, extra!',
        author: 'read',
        title: 'all',
        content: 'about it'
      }
    ]);

    render(<AllArticles />);

    setTimeout(() => {
      const articleList = screen.findByTestId('articles');

      expect(articleList).not.toBeEmptyDOMElement();
    }, 3000);
  });
});
