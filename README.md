# ⚛️ Frontend - Sistema de Gerenciamento de Itens

## 📝 Descrição

Interface web moderna desenvolvida para consumo da API de gerenciamento de itens, incluindo:

- **Dashboard intuitivo**: Visualizacao clara de todos os itens cadastrados em formato de tabela.
- **Formulario dinamico**: Criacao e edicao de itens com validacao em tempo real.
- **Feedback visual**: Sistema de alertas para erros e confirmacoes.
- **Estatisticas em tempo real**: Contadores automaticos de total de itens e quantidade.
- **Estados de loading**: Indicadores visuais durante operacoes assincronas.
- **Confirmacao de exclusao**: Dialogo de seguranca antes de remover itens.


## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- [React](https://react.dev) (v. 19) com hooks e StrictMode.
- [TypeScript](https://www.typescriptlang.org) para tipagem estatica completa.
- [Vite](https://vitejs.dev) (v. 7) para build ultrarrapido com SWC.
- [Axios](https://axios-http.com) para requisicoes HTTP a API.
- [ESLint](https://eslint.org) com plugins React para qualidade de codigo.


## 🚀 Como Usar

Siga os passos abaixo para instalar e rodar o projeto localmente:

0. Caso nao tenha, instale o [Node.js](https://nodejs.org) em uma versao >=18.x

1. Certifique-se de que o backend esteja rodando em http://localhost:5000

2. Clone ou navegue ate a pasta do frontend:
   cd frontend

3. Instale as dependencias:
   npm install

4. Execute o projeto:
   npm run dev

5. Acesse a aplicacao no navegador:
   http://localhost:5173


> Certifique-se de que a porta 5173 esteja disponivel e o backend esteja acessivel.

## 📋 Funcionalidades

- Listagem completa de itens com indicadores visuais para quantidade zero.
- Cadastro de novos itens com validacao de campos obrigatorios.
- Edicao inline com preenchimento automatico dos dados existentes.
- Exclusao com confirmacao de seguranca via modal nativo.
- Estatisticas dinamicas que atualizam automaticamente apos operacoes.
- Tratamento de erros com mensagens claras e botao de fechar alerta.
- Responsividade basica para diferentes tamanhos de tela.

## 🎯 Motivacao

O projeto foi criado para demonstrar uma integracao completa entre frontend moderno e API REST, utilizando as ultimas versoes do React com Vite. A escolha de ferramentas leves e performaticas visa proporcionar uma experiencia de desenvolvimento agil e uma aplicacao final rapida para o usuario.

## 📈 Futuras Funcionalidades

- **Paginacao na listagem** para melhor performance com grandes volumes de dados.
- **Filtros e busca** por nome ou faixa de quantidade.
- **Ordenacao de colunas** na tabela (clicar no header para ordenar).
- **Modo escuro/claro** toggle de tema.
- **Testes E2E** com Playwright ou Cypress.
- **React Query/TanStack Query** para cache inteligente de requisicoes e gerenciamento de estado servidor, reduzindo chamadas desnecessarias a API e melhorando a experiencia offline.
- **Zod para validacao de schemas**: Implementar validacao de tipos e schemas no frontend com Zod, garantindo type safety entre frontend e backend e previnindo erros de dados antes do envio a API.

## 📜 Licenca

Licenca a definir.