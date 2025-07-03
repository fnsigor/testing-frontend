import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { within } from '@testing-library/dom'


import { InputItem } from './InputItem';
import { ItemList } from './ItemList';
import { TodoListProvider } from './contex';

//testes pra fazer:
/*
1 - adicionar item na lista
2 - remover item da lista 
3 - marcar tarefa como concluida
*/

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <TodoListProvider>
      {component}
    </TodoListProvider>
  );
};


describe('/todo-list/testa os componentes de input e lista', () => {

  
  it('input deve renderizar com valor vazio e lista deve estar vazia', () => {
    renderWithProvider(
      <>
        <InputItem/>
        <ItemList/>
      </>
    );

    const input = screen.getByTestId('input-item')
    expect(input).toHaveValue('')

    const list = screen.queryAllByTestId('list-item')
    expect(list).toHaveLength(0)

  });


  it('input deve adicionar "banana" na lista', async () => {
    renderWithProvider(
      <>
        <InputItem/>
        <ItemList/>
      </>
    );

    const input = screen.getByTestId('input-item')
    await userEvent.type(input, "banana")
    expect(input).toHaveValue("banana")

    const botao = screen.getByTestId("button-add")
    await userEvent.click(botao)

    const list = screen.queryAllByTestId('list-item')
    expect(list).toHaveLength(1)

    const listFirstItem = within(list[0]).getByText("banana")
    expect(listFirstItem).toBeInTheDocument()

  });

  it('deve adicionar 2 items na lista e remover o primeiro', async () => {
    renderWithProvider(
      <>
        <InputItem/>
        <ItemList/>
      </>
    );

    const input = screen.getByTestId('input-item')
    const botao = screen.getByTestId("button-add")
    
    await userEvent.type(input, "banana")
    expect(input).toHaveValue("banana")

    await userEvent.click(botao)

    const listFisrtRender = screen.queryAllByTestId('list-item')
    expect(listFisrtRender).toHaveLength(1)


    await userEvent.type(input, "feijão")
    expect(input).toHaveValue("feijão")

    await userEvent.click(botao)

    const listSecondRender = screen.queryAllByTestId('list-item')
    expect(listSecondRender).toHaveLength(2)



    


    
  })
});
