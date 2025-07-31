import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { within } from '@testing-library/dom'


import { InputItem } from './InputItem';
import { ItemList } from './ItemList';
import { TodoListProvider } from './contex';


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

  it("item deve estar desmarcado ao ser inserido na lista", async () => {
    renderWithProvider(
      <>
        <InputItem/>
        <ItemList/>
      </>
    );

    const input = screen.getByTestId('input-item')
    const botao = screen.getByTestId("button-add")
    
    await userEvent.type(input, "jotaro")
    await userEvent.click(botao)

    const listItemJotaro = screen.queryAllByTestId('list-item')[0]
    expect(listItemJotaro).toHaveAttribute('aria-checked', "false")

    const totalTarefas = screen.getByTestId("total-tarefas")
    expect(totalTarefas).toHaveTextContent("1")

    const totalConcluidas = screen.getByTestId("total-concluidas")
    expect(totalConcluidas).toHaveTextContent("0")

    await userEvent.type(input, "dio")
    await userEvent.click(botao)


    const totalTarefas2 = screen.getByTestId("total-tarefas")
    expect(totalTarefas2).toHaveTextContent("2")


    const totalConcluidas2 = screen.getByTestId("total-concluidas")
    expect(totalConcluidas2).toHaveTextContent("0")
    
    const listItemDio = screen.queryAllByTestId('list-item')[1]
    expect(listItemDio).toHaveAttribute('aria-checked', "false")

  })


  it.only("insira 3 items e marque o 2°", async () => {
    renderWithProvider(
      <>
        <InputItem/>
        <ItemList/>
      </>
    );

    const input = screen.getByTestId('input-item')
    const botao = screen.getByTestId("button-add")
    
    await userEvent.type(input, "jotaro")
    await userEvent.click(botao)
    await userEvent.type(input, "dio")
    await userEvent.click(botao)
    await userEvent.type(input, "iggy")
    await userEvent.click(botao)

 
    const dioListItem = screen.getAllByTestId('list-item')[1]
    await userEvent.click(dioListItem)
    const dioListItemAfterClick = screen.getAllByTestId('list-item')[1]

    expect(dioListItemAfterClick).toHaveAttribute('aria-checked', "true")

  })
});
