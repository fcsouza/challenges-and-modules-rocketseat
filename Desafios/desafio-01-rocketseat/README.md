<p align="center">
  <a href="" rel="noopener">
 <img width=200px src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" alt="Project logo"></a>
</p>

<h3 align="center">Desafio 01: Conceitos do NodeJs</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/languages/count/fcsouza/challenges-and-modules-rocketseat)]()
[![GitHub Pull Requests](https://img.shields.io/github/last-commit/fcsouza/challenges-and-modules-rocketseat)]()
[![Made By](https://img.shields.io/badge/Made%20By-Fabricio%20Cavalcante-brightgreen)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> API RESTful que manipula um array de projetos e suas tarefas usando Node.Js + Express simulando operações de CRUD.
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

Resolução do desafio 01 da Gostack 10º, onde deveríamos criar um CRUD utilizando Node.Js e Express e utilizar middlewares de validações nas rotas.

## 🏁 Getting Started <a name = "getting_started"></a>

Instruções de como acessar as rotas e instalação.

### Installing

```
yarn install
yarn dev
```

## 🎈 Usage <a name="usage"></a>

- `POST /projects`: A rota deve receber `id` e `title` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota deve alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deve deletar o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@fcsouza](https://github.com/fcsouza)
