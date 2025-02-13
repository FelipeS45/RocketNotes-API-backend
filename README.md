<h1 align = "center">
  <img src = "./src/assets/Home.png">
</h1>

## Sobre o projeto

O projeto Rocket Notes é uma aplicação Web desenvolvida para o usuários que desejam guardar notas importantes para suas atividades diárias em um sistema web. Na aplicação, os usuários devem se cadastrar e se autenticar para que possam criar suas notas. Assim, todas as notas ficam salvas em um banco de dados e são exibidas apenas ao usuário que a criou. Além disso, todos os usuários podem alterar as informações de seus perfis (nome, e-mail e senha), para mellhor uso da aplicação. Por fim, o sistema desenvolvido conta com telas responsivas a aparelhos mobile e desktop para melhor experiência do usuário.

## Como utilizar o projeto

### Link do deploy da aplicação

https://siterocketnotess.netlify.app/

Obs.: como a API está sendo hospedada em um provedor gratuito, após um período de inatividade ela é desligada, o que pode gerar um certo delay nas requisições. Diante disso, basta aguardar o reinício da mesma e utilizar a aplicação normalmente.
 
### Executando o Backend do projeto

```bash

  # Vá até o diretório do projeto
  $ cd api_node

  # Instale a dependência node_modules
  $ npm install

  # Inicie o servidor 
  $ npm run dev / npm start

  # Agora, com o frontend também aberto, basta utlizar a aplicação normalmente 

```

## Tecnologias utilizadas 

- [NodeJS](https://nodejs.org/en)
- [Javascript]()
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [Express Async Errors](https://www.npmjs.com/package/express-async-errors)
- [Insomnia](https://insomnia.rest/download)
- [SQLite](https://www.sqlite.org/)
- [Beekeeper Studio](https://www.beekeeperstudio.io/)
- [KnexJS](https://knexjs.org/)
- [BcryptJS](https://www.npmjs.com/package/bcryptjs)
- [JSON Web Token (JWT)](https://www.npmjs.com/package/jsonwebtoken)
- [Multer](https://www.npmjs.com/package/multer)
- [Cors](https://www.npmjs.com/package/cors)

### - NodeJS

É um ambiente de execução (ou Framework) JavaScript voltado ao lado do servidor (backend). 

### - Javascript

Linguagem de programação de tipagem fraca (não exige que o tipo de uma variável ou função seja declarado quando ela é criada) amplamente utilizada para a criação de páginas Web. Pode ser utilizada tanto no frontend (ex.: ReactJS) quanto no backend (ex.: NodeJS).

### - Nodemon

Ferramenta de linha de comando utilizada para o desenvolvimento de aplicações NodeJS. Sua função é monitorar a aplicação e reiniciá-la quando forem detectadas alterações.

### - Express

Framework NodeJS criado para otimizar a criação de aplicativos e APIs Web.

### - Express Async Errors

Pacote responsável pelo tratamento de erros em aplicações Web.

### - Insomnia

Aplicativo Web que permite o envio de solicitações HTTP a APIs Web para a otimização de sua testagem.

### - SQLite

É um banco de dados relacional de código aberto capaz de funcionar em aplicações Web e Mobile.

### - Beekeeper Studio

Ferramenta de gerenciamento de bancos de dados que permite a criação e a realização de consultas, gerenciar conexões e visualizar dados.

### - KnexJS

É um Query Builder SQL para JavaScript que permite acessar e executar ações em bancos de dados.

### - BcryptJS

É uma biblioteca voltada à criação de hashes seguros para a proteção de senhas, principalmente.

### - JSON Web Token (JWT)

É um padrão de autenticação que permite a transmissão de informações de forma segura entre duas partes em uma aplicação Web. 

### - Multer

Biblioteca NodeJS voltada à realização do upload de arquivos.  

### - Cors

Biblioteca NodeJS fundamental para garantir a interação entre o frontend e o backend de forma eficiente.
