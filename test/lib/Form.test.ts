import '@testing-library/jest-dom'
import { describe, expect, it, vi} from "vitest"
import { render, fireEvent, screen, act, waitFor } from '@testing-library/svelte';
import Form from "./../../src/lib/Form.svelte"



describe('Form', () => {
    let inputs;
    let component;
    beforeEach(() => {

            component = render(Form);
            // component = render(Form, { accessors: true });
            const titleInput = component.getByPlaceholderText('podaj tytuł');
            const textArea = component.getByPlaceholderText('podaj treść');
            const linkInput = component.getByPlaceholderText('podaj url');
            inputs = { titleInput, textArea, linkInput}
    });
    it("display all fields and values", () => {
            
            const {titleInput, textArea, linkInput} = inputs
            expect(titleInput).toBeInTheDocument();
            expect(textArea).toBeInTheDocument();
            expect(linkInput).toBeInTheDocument();
        })
    it('dispatch with values from props', async () => {
        const dispatchMock = vi.fn();
        const {titleInput, textArea, linkInput} = inputs
        const submitButton = component.getByText('Dodaj wpis');
        component.component.$on('addEntry', function (event) {
            dispatchMock(event.detail);
        });

        await fireEvent.input(titleInput, { target: { value: 'Test title' } });
        await fireEvent.input(textArea, { target: { value: 'Test text' } });
        await fireEvent.input(linkInput, { target: { value: 'http://example.com' } });
        await fireEvent.submit(submitButton);

        expect(dispatchMock).toHaveBeenCalledWith({
        error: { error: false, message: '' },
        topic: {
            link: 'http://example.com',
            text: 'Test text',
            title: 'Test title',
        }
        });
    })
    it('dispatch error msg when at least one field is empty', async () => {
        const dispatchMock = vi.fn();
        const {titleInput, textArea, linkInput} = inputs
        const submitButton = component.getByText('Dodaj wpis');
        component.component.$on('addEntry', function (event) {
            dispatchMock(event.detail);
        });

        await act(() => fireEvent.input(titleInput, { target: { value: "" } }));
        await act(() =>fireEvent.input(textArea, { target: { value: 'Test text' } }));
        await act(() =>fireEvent.input(linkInput, { target: { value: 'http://example.com' } }));



        await fireEvent.submit(submitButton);

        expect(dispatchMock).toHaveBeenCalledWith({
            error: { error: true, message: "Należy wypełnić wszystkie pola" },
            topic: null
            });
    })

})