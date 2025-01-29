import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('Todo Tests', () => {
  it('Should render app', async () => {
    render(<App />);

    const headline = screen.getByText('Todos!!');
    expect(headline).toBeInTheDocument();
    // screen.debug()
    // const button = screen.getByRole('button', {name: 'huhu'})
    // expect(button).toBeInTheDocument()

    const todosBeforeAdd = screen.getAllByRole('listitem')
    expect(todosBeforeAdd).toHaveLength(3)

    const input = screen.getByRole('textbox')
    const submitBtn = screen.getByRole('button', {name: 'Add'})

    await userEvent.type(input, 'Hello Class')
    await userEvent.click(submitBtn)

    const todosAfterAdd = screen.getAllByRole('listitem')
    expect(todosAfterAdd).toHaveLength(4)

  });

  it('Should not add a todo if no value', async () => {
    render(<App />);

    const todosBeforeAdd = screen.getAllByRole('listitem')
    expect(todosBeforeAdd).toHaveLength(3)

    const submitBtn = screen.getByRole('button', {name: 'Add'})

    await userEvent.click(submitBtn)

    const todosAfterAdd = screen.getAllByRole('listitem')
    // console.log(todosAfterAdd)
    expect(todosAfterAdd).toHaveLength(3)

  });
});
