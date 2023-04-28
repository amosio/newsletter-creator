import '@testing-library/jest-dom'
import { describe, expect, it, vi} from "vitest"
import { render, fireEvent, screen } from '@testing-library/svelte';
import Entries from "./../../src/lib/Entries.svelte"


describe('Entries', () => {
  it('renders without crashing', () => {
    const entries = [
      { title: 'Entry 1', text: 'Lorem ipsum', link: 'https://example.com/1' },
      { title: 'Entry 2', text: 'Dolor sit amet', link: 'https://example.com/2' },
    ];

    const { container } = render(Entries, { props: { entries } });

    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders the correct number of Entry components with the correct props', () => {
    const entries = [
      { title: 'Entry 1', text: 'Lorem ipsum', link: 'https://example.com/1' },
      { title: 'Entry 2', text: 'Dolor sit amet', link: 'https://example.com/2' },
    ];

    const { getAllByText } = render(Entries, { props: { entries } });

    const entryComponents = getAllByText(/Entry \d/);
    console.log("Znalezione komponenty", entryComponents)

    expect(entryComponents).toHaveLength(entries.length);
  });
});
