import '@testing-library/jest-dom'
import { describe, expect, it, vi} from "vitest"
import { render, fireEvent, screen } from '@testing-library/svelte';
import HtmlRep from "./../../src/lib/HtmlRep.svelte"

const originalClipboard = { ...global.navigator.clipboard };

beforeEach(() => {
    let clipboardData = '' //initalizing clipboard data so it can be used in testingq
    
    const mockClipboard = {
        writeText: vi.fn(
            (data) => {clipboardData = data}
        ),
        readText: vi.fn(
            () => {return clipboardData}  
        ),
    };
    // @ts-ignore
    global.navigator.clipboard = mockClipboard;
    global.navigator.clipboard.writeText("")

});

afterEach(() => {
    vi.resetAllMocks();
    // @ts-ignore
    global.navigator.clipboard = originalClipboard;
});

describe('Clipboard component', async () => {
    it('should render with initial content value', () => {
    const results = render(HtmlRep, { content: 'Hello world!' });
    // container.querySelector("textarea")
        
    expect(() => results.getByRole('textbox')).not.toThrow();
    //Działa też 
    // expect(() => screen.getByRole('textbox')).not.toThrow();

    });

    test('should copy content to clipboard when button is clicked', async () => {
        let content = "World"
        render(HtmlRep, {content})
        const button = screen.getByRole('button')
      
        // Using await when firing events is unique to the svelte testing library because
        // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
        await fireEvent.click(button)
        // expect(() => screen.getByRole('button')).toBeInTheDocument()
        expect(button).toHaveTextContent("Kopiuj wynik")
        expect(global.navigator.clipboard.readText()).not.toBe("")
        expect(global.navigator.clipboard.readText()).toBe(content)
    })

    //********** */
    it('should log a message to the console when the content variable is not empty', async () => {
        let componentText = "World"
        render(HtmlRep, {content : componentText})

        let {container } = render(HtmlRep, {content : componentText})
        const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
        // const button = screen.getByRole('button')
        let button = container.querySelector("button")
        expect(button).not.toBeNull()
        if (button != null) { 
            await fireEvent.click(button)
        }
        expect(consoleSpy).toHaveBeenCalledWith('kopiuje do schowka');
      });

    it('should not copy the content to clipboard when the content variable is empty', async () => {
    let componentText = ""
    let {container } = render(HtmlRep, {content : componentText})
    const writeTextSpy = vi.spyOn(navigator.clipboard, 'writeText')
        .mockImplementation(() => Promise.resolve());
    
    let button = container.querySelector("button")
    expect(button).not.toBeNull()
    if (button != null) { 
        await fireEvent.click(button)
    }
    
    expect(writeTextSpy).not.toHaveBeenCalled();
    });

    it('should render a readonly textarea element with the correct number of columns and rows', () => {
        let componentText = ""
        render(HtmlRep, {content : componentText})
        const textarea = screen.getByRole('textbox');
        expect(textarea).toBeInTheDocument();
        expect(textarea.hasAttribute('readonly')).toBeTruthy();
        expect(textarea).toHaveAttribute('cols', '100');
        expect(textarea).toHaveAttribute('rows', '25');
    });

  });