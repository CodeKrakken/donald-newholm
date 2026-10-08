import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import About from './About';

const renderAbout = () => render(<About />);

describe('About', () => {
  it('has a heading named About', () => {
    renderAbout();

    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
  });

  it('contains an introductory paragraph', () => {
    renderAbout();

    expect(screen.getByText(/\S/, { selector: 'p' })).toBeInTheDocument();
  });

  it('contains a link to the user GitHub profile', () => {
    renderAbout();

    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      expect.stringContaining('github.com'),
    );
  });

  it('contains a link to the user LinkedIn profile', () => {
    renderAbout();

    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      expect.stringContaining('linkedin.com'),
    );
  });
});
