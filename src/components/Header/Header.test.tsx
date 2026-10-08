import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('displays the site name', () => {
    render(<Header />);

    expect(screen.getByRole('heading', { name: 'Donald Newholm' })).toBeInTheDocument();
  });

  it('provides navigation links to each page section', () => {
    render(<Header />);

    const navigation = screen.getByRole('navigation');
    const links = within(navigation).getAllByRole('link');

    expect(links).toHaveLength(4);
    expect(within(navigation).getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#work');
    expect(within(navigation).getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience');
    expect(within(navigation).getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about');
    expect(within(navigation).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact');
  });
});
