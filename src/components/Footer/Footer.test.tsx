import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from './Footer';

const renderFooter = () => render(<Footer />);

describe('Footer', () => {
  it('contains the site name Donald Newholm', () => {
    renderFooter();

    expect(screen.getByText('Donald Newholm')).toBeInTheDocument();
  });

  it('contains a copyright notice', () => {
    renderFooter();

    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
  });
});
