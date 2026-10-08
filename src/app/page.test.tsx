import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from './page';

const renderHome = () => render(<Home />);

describe('Home page', () => {
  it('contains the site name Donald Newholm', () => {
    renderHome();

    expect(screen.getByRole('heading', { name: 'Donald Newholm' })).toBeInTheDocument();
  });

  it('contains the Selected Work section', () => {
    renderHome();

    expect(screen.getByRole('heading', { name: 'Selected Work' })).toBeInTheDocument();
  });

  it('contains the Experience section', () => {
    renderHome();

    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument();
  });

  it('contains the About section', () => {
    renderHome();

    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
  });

  it('contains the Technical Skills section', () => {
    renderHome();

    expect(screen.getByRole('heading', { name: 'Technical Skills' })).toBeInTheDocument();
  });

  it('contains the Contact section', () => {
    renderHome();

    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument();
  });

  it('contains the site footer', () => {
    renderHome();

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
