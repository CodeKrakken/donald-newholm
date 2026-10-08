import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Hero from './Hero';

describe('Hero', () => {

  it('displays a primary professional title or description', () => {
    render(<Hero />);

    expect(screen.getByText(/software developer|software engineer/i)).toBeInTheDocument();
  });

  it('provides a link to the Work section', () => {
    render(<Hero />);

    expect(screen.getByRole('link', { name: /work/i })).toHaveAttribute('href', '#work');
  });

  it('provides a GitHub link', () => {
    render(<Hero />);

    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', expect.stringContaining('github.com'));
  });

  it('provides a LinkedIn link', () => {
    render(<Hero />);

    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
  });

  it('provides a CV link', () => {
    render(<Hero />);

    expect(screen.getByRole('link', { name: /cv/i })).toHaveAttribute('href', expect.stringContaining('.pdf'));
  });
});
