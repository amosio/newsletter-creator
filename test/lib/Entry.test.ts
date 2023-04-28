import '@testing-library/jest-dom'
import { describe, expect, it, vi} from "vitest"
import { render, fireEvent, screen } from '@testing-library/svelte';
import Entry from "./../../src/lib/Entry.svelte"

describe('Entry', () => {
    it('renders the title, text, and link', () => {
      const title = 'My Title';
      const text = 'My Text';
      const link = 'https://example.com';
      const { getByText } = render(Entry, { props: { title, text, link } });
      expect(getByText(title)).toBeInTheDocument();
      expect(getByText(text)).toBeInTheDocument();
      expect(getByText(link)).toBeInTheDocument();
    });
  
    it('emits the delEntry event when the "Usuń wpis" button is clicked', () => {
      const title = 'My Title';
      const text = 'My Text';
      const link = 'https://example.com';
      const result  = render(Entry, { props: { title, text, link } });
      let mockEvent = vi.fn();
      result.component.$on('delEntry', function (event) {
        mockEvent(event.detail);
      });
      const button = result.getByText('Usuń wpis');
      fireEvent.click(button);
      expect(mockEvent).toHaveBeenCalledWith(title);
    });
  });