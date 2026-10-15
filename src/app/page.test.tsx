import { render, screen, within } from '@testing-library/react';
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

  it('renders the page sections in the expected order', () => {
    renderHome();

    const orderedSections = [
      screen.getByRole('banner'),
      screen.getByRole('region', { name: 'Hero' }),
      screen.getByRole('region', { name: 'Selected Work' }),
      screen.getByRole('region', { name: 'Experience' }),
      screen.getByRole('region', { name: 'About' }),
      screen.getByRole('region', { name: 'Technical Skills' }),
      screen.getByRole('region', { name: 'Contact' }),
      screen.getByRole('contentinfo'),
    ];

    for (let index = 1; index < orderedSections.length; index += 1) {
      expect(
        orderedSections[index - 1].compareDocumentPosition(orderedSections[index]) &
          Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy();
    }
  });

  it('has header navigation links to existing sections', () => {
    renderHome();

    const links = within(
      screen.getByRole('navigation', { name: 'Primary navigation' }),
    ).getAllByRole('link');

    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '#work',
      '#experience',
      '#about',
      '#contact',
    ]);
    links.forEach((link) => {
      expect(document.getElementById(link.hash.slice(1))).toBeInTheDocument();
    });
  });

  it('provides repository and deployment links for each project', () => {
    renderHome();

    const projects = within(
      screen.getByRole('region', { name: 'Selected Work' }),
    ).getAllByRole('article');

    projects.forEach((project) => {
      expect(
        within(project).getByRole('link', { name: /github repository/i }),
      ).toBeInTheDocument();
      expect(
        within(project).getByRole('link', { name: /deployment/i }),
      ).toBeInTheDocument();
    });
  });

  it('contains exactly three project articles and two experience articles', () => {
    renderHome();

    expect(
      within(screen.getByRole('region', { name: 'Selected Work' })).getAllByRole(
        'article',
      ),
    ).toHaveLength(3);
    expect(
      within(screen.getByRole('region', { name: 'Experience' })).getAllByRole(
        'article',
      ),
    ).toHaveLength(2);
  });

  it('contains the site footer', () => {
    renderHome();

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
