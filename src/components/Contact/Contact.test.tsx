import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Contact from './Contact';

const renderContact = () => render(<Contact />);

describe('Contact', () => {
  it('has a heading named Contact', () => {
    renderContact();

    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument();
  });

  it('provides an email link', () => {
    renderContact();

    expect(screen.getByRole('link', { name: /email/i })).toBeInTheDocument();
  });

  it('uses a mailto URL for the email link', () => {
    renderContact();

    expect(screen.getByRole('link', { name: /email/i })).toHaveAttribute(
      'href',
      expect.stringMatching(/^mailto:/),
    );
  });
});
