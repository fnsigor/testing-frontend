# Laboratório de Testes com Next.js 14


Este projeto é um laboratório prático com o objetivo principal de aprofundar e aplicar conceitos de **testes automatizados** em um ambiente de front-end moderno. Além dos testes, o projeto serve como um campo de provas para explorar e integrar tecnologias atuais como **Zod, Zustand e Material UI** no ecossistema Next.js.

O repositório é dividido em três "mini-projetos", cada um em uma página distinta, com níveis de complexidade crescentes. Essa estrutura foi pensada para criar um roteiro de aprendizado prático, partindo de testes de componentes simples e evoluindo para cenários complexos envolvendo estado global e chamadas de API.

## 🎯 Estrutura dos Mini-Projetos

### Página 1: To-Do List (Nível de Complexidade: Fácil)

Uma aplicação clássica de lista de tarefas. O foco aqui é dominar os fundamentos dos testes de componentes com a React Testing Library.

* **Funcionalidades:**
    * Adicionar uma nova tarefa.
    * Marcar uma tarefa como concluída.
    * Remover uma tarefa da lista.
* **Tecnologias em Foco:**
    * React (useState, Callbacks).
    * Material UI (Componentes de UI como `TextField`, `Button`, `Checkbox`, `List`).
* **Objetivos de Teste:**
    * **Testes de Componente:** Garantir que os componentes renderizam corretamente com base nas props.
    * **Testes de Interação:** Simular ações do usuário (digitar, clicar) com `@testing-library/user-event` para verificar se o estado do componente responde como esperado.
    * **Testes de Acessibilidade:** Checagens básicas de acessibilidade nos elementos do formulário e da lista.

### Página 2: Formulário de Cadastro e Tabela (Nível de Complexidade: Médio)

Este projeto simula um cenário de CRUD (Create, Read, Update, Delete) mais realista, com validação de formulário e comunicação com uma API (mockada).

* **Funcionalidades:**
    * Um formulário para cadastrar novos usuários (ou produtos).
    * Validação de dados em tempo real e na submissão.
    * Uma tabela que exibe os dados cadastrados.
    * (Opcional) Funcionalidades de editar e deletar na tabela.
* **Tecnologias em Foco:**
    * **React Hook Form:** Para gerenciamento eficiente do estado do formulário.
    * **Zod:** Para declaração de schemas e validação robusta dos dados.
    * **TanStack Query (React Query):** Para gerenciar o estado do servidor (chamadas de API), incluindo cache, loading, error, e mutações.
    * **Material UI:** Para componentes de formulário (`<TextField>`, `<Select>`) e a tabela de dados (`<Table>`).
* **Objetivos de Teste:**
    * **Testes de Validação:** Garantir que a integração entre React Hook Form e Zod funciona, exibindo mensagens de erro corretas.
    * **Mocking de API:** Usar `jest.mock` e `mockImplementation` para simular as chamadas de API (hooks `useQuery` e `useMutation