<h3 align="center">
  Teste Técnico - React Pleno
</h3>

<blockquote align="center">“Nunca permita que o medo domine sua vontade de vencer.”!</blockquote>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-e-execução">Instalação e execução</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

<p align="center">
  <img alt="Frontend" src=".github/00-login.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [PostgresSQL](https://www.postgresql.org/)

## 💻 Projeto

Esse teste técnico visa mostrar meus conhecimentos em React e tecnologias Frontend.

O projeto trata-se de um Wiki, onde é possível realizar cadastro e login, criar, editar, deletar e listar posts com anexo documentos, visualizar um determinado post e realizar o download do documento caso anexado.

## 📥 Instalação e execução

Faça um clone desse repositório

  ### Backend
  1. A partir da raiz do projeto, entre na pasta rodando `cd backend`;
  2. Inicie os banco de dado postgresql utilizando docker, e crie o banco `wiki` no postgres:
  ```bash
    $ docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11
    $
    $ docker exec -it postgres /bin/sh
    # su postgres
    /$ psql
    postgres=# CREATE DATABASE wiki;
    postgres=# exit
    /$ exit
    # exit
  ```
  3. Crie um arquivo `.env` a partir do arquivo `.env.example` preenchendo todas as variáveis pedidas;
  4. Rode `npm install` para instalar todas as dependências;
  5. Rode `npx sequelize db:migrate` para criar as migrations;
  6. Rode `npx sequelize db:seed:all` para popular o banco;
  7. Rode `npm run build && npm run start` em um novo terminal para compilar e iniciar o servidor node;

  ### Frontend
  1. A partir da raiz do projeto, entre na pasta rodando `cd frontend`;
  2. Rode `npm install` para instalar as dependências;
  3. Rode `npm run start` para iniciar o servidor de desenvolvimento;
  4. Abra `http://localhost:3000` para ver o projeto no navegador.