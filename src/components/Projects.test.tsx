import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Projects from './Projects';

const renderProjects = () => render(<Projects />);

const getMagicMoneyTree = () =>
  within(screen.getByRole('article', { name: 'Magic Money Tree' }));

describe('Projects', () => {
  it('has a heading named Selected Work', () => {
    renderProjects();

    expect(screen.getByRole('heading', { name: 'Selected Work' })).toBeInTheDocument();
  });

  it('contains the Magic Money Tree project', () => {
    renderProjects();

    expect(screen.getByRole('heading', { name: 'Magic Money Tree' })).toBeInTheDocument();
  });

  it('displays a description for Magic Money Tree', () => {
    renderProjects();

    expect(getMagicMoneyTree().getByText(/\S/, { selector: 'p' })).toBeInTheDocument();
  });

  it('identifies the technologies used by Magic Money Tree', () => {
    renderProjects();

    expect(getMagicMoneyTree().getByText(/technologies/i)).toBeInTheDocument();
  });

  it('provides a link to the Magic Money Tree GitHub repository', () => {
    renderProjects();

    expect(
      getMagicMoneyTree().getByRole('link', { name: /github/i }),
    ).toHaveAttribute('href', expect.stringMatching(/^https:\/\/github\.com\//));
  });

  it('contains the Octopus project', () => {
    renderProjects();

    expect(screen.getByRole('heading', { name: 'Octopus' })).toBeInTheDocument();
  });

  it('contains the Kendraio project', () => {
    renderProjects();

    expect(screen.getByRole('heading', { name: 'Kendraio' })).toBeInTheDocument();
  });

  it('contains the Stairway project', () => {
    renderProjects();

    expect(screen.getByRole('heading', { name: 'Stairway' })).toBeInTheDocument();
  });
});
