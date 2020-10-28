import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  afterEach(() => cleanup());

  it('renders Article', () => {
    const { asFragment } = render(<Article
      source="Test Source"
      author="Test Author"
      title="Test Title"
      content="Test Content"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
