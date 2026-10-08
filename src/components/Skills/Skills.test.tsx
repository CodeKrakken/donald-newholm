import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Skills from './Skills';

const renderSkills = () => render(<Skills />);

const getFrontendCategory = () =>
  within(screen.getByRole('heading', { name: 'Frontend' }).closest('section')!);

const getBackendCategory = () =>
  within(screen.getByRole('heading', { name: 'Backend' }).closest('section')!);

describe('Skills', () => {
  it('has a heading named Technical Skills', () => {
    renderSkills();

    expect(screen.getByRole('heading', { name: 'Technical Skills' })).toBeInTheDocument();
  });

  it('contains a Frontend category', () => {
    renderSkills();

    expect(screen.getByRole('heading', { name: 'Frontend' })).toBeInTheDocument();
  });

  it('identifies React in the Frontend category', () => {
    renderSkills();

    expect(getFrontendCategory().getByText('React')).toBeInTheDocument();
  });

  it('identifies TypeScript in the Frontend category', () => {
    renderSkills();

    expect(getFrontendCategory().getByText('TypeScript')).toBeInTheDocument();
  });

  it('contains a Backend category', () => {
    renderSkills();

    expect(screen.getByRole('heading', { name: 'Backend' })).toBeInTheDocument();
  });

  it('identifies Node.js in the Backend category', () => {
    renderSkills();

    expect(getBackendCategory().getByText('Node.js')).toBeInTheDocument();
  });

  it('identifies a database technology in the Backend category', () => {
    renderSkills();

    expect(getBackendCategory().getByText(/PostgreSQL|MongoDB|MySQL/i)).toBeInTheDocument();
  });
});
