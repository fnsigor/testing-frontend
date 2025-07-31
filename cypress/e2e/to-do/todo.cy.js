class ToDoList {
  elements = {
    input: () => cy.getByTestId('input-item'),
    btSubmit: () => cy.getByTestId('button-add'),
    noItemsMessage: () => cy.getByTestId('no-items-alert'),
    itemsOnList: () => cy.getByTestId('list-item'),
  }

  typeItemName(text) {
    if (!text) return
    this.elements.input().type(text)
  }

  submitItem() {
    this.elements.btSubmit().click()
  }

  addItem(text) {
    this.typeItemName(text)
    this.submitItem()
  }
}

const todoList = new ToDoList()

describe('Todo List', () => {


  describe('adicionar elementos', () => {

    const items = [
      'banana',
      'laranja',
    ]

    it('ao acessar a pagina de todo list', () => {
      cy.visit('/todo-list')
    })

    it('deve aparecer a mensagem de lista vazia', () => {
      todoList.elements.noItemsMessage().should('be.visible')
    })

    it(`deve escrever "${items[0]}" no input`, () => {
      todoList.typeItemName(items[0])
    })

    it(`deve clicar no botao de submit`, () => {
      todoList.submitItem()
    })

    it(`o item "${items[0]}" deve estar na lista`, () => {
      todoList.elements.itemsOnList().should('have.length', 1)
      cy.get('[data-testid="list-item"]').eq(0).should('have.text', items[0])
    })

    it('no topo da lista deve ter o total de uma tarefa', () => {
      cy.get('[data-testid="total-tarefas"]').should('have.text', '(1)')
    })

    it('no topo da lista deve ter 0 tarefas marcadas como concluidas', () => {
      cy.get('[data-testid="total-concluidas"]').should('have.text', '0 concluídas')
    })

    it(`deve escrever "${items[1]}" no input`, () => {
      todoList.typeItemName(items[1])
    })

    it(`deve clicar no botao de submit`, () => {
      todoList.submitItem()
    })

    it(`o item "${items[1]}" deve estar na lista`, () => {
      todoList.elements.itemsOnList().should('have.length', 2)
      cy.get('[data-testid="list-item"]').eq(1).should('have.text', items[1])
    })

    it('no topo da lista deve ter o total de 2 tarefas', () => {
      cy.get('[data-testid="total-tarefas"]').should('have.text', '(2)')
    })

    it('no topo da lista deve ter 0 tarefas marcadas como concluidas', () => {
      cy.get('[data-testid="total-concluidas"]').should('have.text', '0 concluídas')
    })


  })


  describe('remover elementos', () => {
    const items = [
      'jotaro',
      'polnareff',
      'iggy',
    ]

    it('ao acessar a pagina de todo list', () => {
      cy.visit('/todo-list')
    })

    it('e adicionar 3 elementos', () => {
      todoList.addItem(items[0])
      todoList.addItem(items[1])
      todoList.addItem(items[2])
    })

    it(`devo clicar no botao de excluir do item "${items[1]}"`, () => {
      cy.get('[data-testid="list-item"]').eq(1).find('button').click()
    })

    it(`apenas os items "${items[0]}" e "${items[2]}" devem estar na lista`, () => {
      cy.get('[data-testid="list-item"]').should('have.length', 2)
      cy.get('[data-testid="list-item"]').eq(0).should('have.text', items[0])
      cy.get('[data-testid="list-item"]').eq(1).should('have.text', items[2])
    })


  })


  describe.only('marcar elementos como concluido', () => {
    const items = [
      'jotaro',
      'polnareff',
      'iggy',
    ]

    it('ao acessar a pagina de todo list', () => {
      cy.visit('/todo-list')
    })

    it('e adicionar 3 elementos', () => {
      todoList.addItem(items[0])
      todoList.addItem(items[1])
      todoList.addItem(items[2])
    })

    it(`devo marcar o item "${items[1]}" como marcado`, () => {
      cy.get('[data-testid="list-item"]').eq(1).find('input[type="checkbox"]').check()
    })

    it('no topo da lista, deve ter uma tarefa marcada como concluida', () => {
      cy.get('[data-testid="total-concluidas"]').should('have.text', '1 concluídas')
    })


  })
})