# Carrinho de Compras

Projeto Desenvolvido com [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponíveis

Para poder rodar a aplicaçao faça o clone desse projeto em https://github.com/thihuli/shoppingcart.git com o comando git clone.

Depois de ter feito o clone entre na pasta raiz e rode o comando `yarn` ou `npm install` para baixar as dependências do projeto.

### `json-server --watch db.json --port 5000`

Para aplicação funcionar será necessário o `Json-Server` [Json-Server](https://www.npmjs.com/package/json-server) para prover a api.

No seu terminal rode o comando `npm install -g json-server`

Depois entre na pasta src\Server, dentro da pasta rode o comando json-server --watch db.json --port 5000 com a flag `--port 5000` para fazer uso da api.

Depois disso o servidor da aplicação estará rodando.

### `yarn start`

Para inciar a aplicação no seu navegador, abra outro terminal na pasta main do projeto shopping-cart e rode o comando yarn start.

O servidor subirá sua aplicação web no navegador padrão no http://localhost:3000 consumindo a api na porta http://localhost:5000/items

### `Ferramentas`

Para esse projeto foi utlizado o `npx create-react-app`, `EcmaScript ES6`, `styled-components`, `react-icons`, `react-router-dom`, `json-server` e `axios`.

# Desenvolvido por Thiago Fernandes!

