import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Projects from './Projects';

const renderProjects = () => render(<Projects />);

const get = (name: string) =>
  within(screen.getByRole('article', { name: name }));

describe('Projects', () => {
  
  it('has a heading named Selected Work', () => {
    renderProjects();

    expect(screen.getByRole('heading', { name: 'Selected Work' })).toBeInTheDocument();
  });

  it('contains exactly three project articles', () => {
    renderProjects();

    expect(screen.getAllByRole('article')).toHaveLength(3);
  });

  it('contains the Magic Money Tree project', () => {
    renderProjects();

    expect(screen.getByRole('heading', { name: 'Magic Money Tree' })).toBeInTheDocument();
  });

  it('displays a description for Magic Money Tree', () => {
    renderProjects();

    expect(get('Magic Money Tree').getByText(/\S/, { selector: 'p' })).toBeInTheDocument();
  });

  it('identifies the technologies used by Magic Money Tree', () => {
    renderProjects();

    expect(get('Magic Money Tree').getByText(/technologies/i)).toBeInTheDocument();
  });

  it('provides a link to the Magic Money Tree GitHub repository', () => {
    renderProjects();

    expect(
      get('Magic Money Tree').getByRole('link', { name: /github/i }),
    ).toHaveAttribute('href', expect.stringMatching(/^https:\/\/github\.com\//));
  });

  it('provides a link to the Magic Money Tree Heroku deployment', () => {
    renderProjects();

    expect(
      get('Magic Money Tree').getByRole('link', { name: /heroku/i }),
    ).toHaveAttribute('href', expect.stringMatching(/^https:\/\/magic-money-tree\.herokuapp\.com/));
  });

  // add test for link to deployment

  it('contains the Octopus project', () => {
    renderProjects();

    expect(screen.getByRole('heading', { name: 'Octopus' })).toBeInTheDocument();
  });

  it('displays a description for Octopus', () => {
    renderProjects();

    expect(get('Octopus').getByText(/\S/, { selector: 'p' })).toBeInTheDocument();
  });

  it('identifies the technologies used by Octopus', () => {
    renderProjects();

    expect(get('Octopus').getByText(/technologies/i)).toBeInTheDocument();
  });

  it('provides a link to the Octopus GitHub repository', () => {
    renderProjects();

    expect(
      get('Octopus').getByRole('link', { name: /github/i }),
    ).toHaveAttribute('href', expect.stringMatching(/^https:\/\/github\.com\//));
  });

  // add test for link to deployment

  it('contains the Scrynth project', () => {
    renderProjects();

    expect(screen.getByRole('heading', { name: 'Scrynth' })).toBeInTheDocument();
  });

  it('displays a description for Scrynth', () => {
    renderProjects();

    expect(get('Scrynth').getByText(/\S/, { selector: 'p' })).toBeInTheDocument();
  });

  it('identifies the technologies used by Scrynth', () => {
    renderProjects();

    expect(get('Scrynth').getByText(/technologies/i)).toBeInTheDocument();
  });

  it('provides a link to the Scrynth GitHub repository', () => {
    renderProjects();

    expect(
      get('Scrynth').getByRole('link', { name: /github/i }),
    ).toHaveAttribute('href', expect.stringMatching(/^https:\/\/github\.com\//));
  });

  // add test for link to deployment
  
});
