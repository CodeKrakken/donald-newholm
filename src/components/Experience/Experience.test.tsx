import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Experience from './Experience';

const renderExperience = () => render(<Experience />);

const getCodeAndWanderEntry = () =>
  within(screen.getByRole('article', { name: 'Code and Wander' }));

const getKendraioEntry = () => within(screen.getByRole('article', { name: 'Kendraio' }));

describe('Experience', () => {
  it('has a heading named Experience', () => {
    renderExperience();

    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument();
  });

  it('contains an entry for Code and Wander', () => {
    renderExperience();

    expect(screen.getByRole('heading', { name: 'Code and Wander' })).toBeInTheDocument();
  });

  it('identifies the Code and Wander role as Software Developer', () => {
    renderExperience();

    expect(getCodeAndWanderEntry().getByText('Software Developer')).toBeInTheDocument();
  });

  it('contains an entry for Kendraio', () => {
    renderExperience();

    expect(screen.getByRole('heading', { name: 'Kendraio' })).toBeInTheDocument();
  });

  it('identifies the Kendraio role as Software Developer', () => {
    renderExperience();

    expect(getKendraioEntry().getByText('Software Developer')).toBeInTheDocument();
  });
});
