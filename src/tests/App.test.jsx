import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";
import userEvent from "@testing-library/user-event";



describe('mo', ()=> {
  it('do', async ()=> {
    render(<App/>)

    const todos = screen.getAllByRole('listitem')
    expect(todos).toHaveLength(3)

    const input = screen.getByRole('textbox')
    
    
    const submitBtn = screen.getByRole('button', {name: 'Add'})
    
    await userEvent.type(input, 'Hello world')
    await userEvent.click(submitBtn)

    screen.debug()
    const todosAfter = screen.getAllByRole('listitemj')
    expect(todosAfter).toHaveLength(4)

  })
})