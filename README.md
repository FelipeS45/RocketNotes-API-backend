# SQLite, Express, Bcrypt e Nodemon não precisam ser instalados quando o projeto é puxado do Github, apenas o Node.js precisa

# Para instalar as dependências do Node.js (node_modules) sempre quando o projeto for puxado do Github

### Comando no terminal

npm install

# Para rodar o servidor com Nodemon (deixar rodando em um terminal e usar outro para comandos)

### Comando no terminal

npm run dev

# Biblioteca Express Async Errors instalada para tratamento de erros

### Comando no terminal

npm install express-async-errors --save

# Testes da API feitos pelo Insomnia (só funciona com o servidor rodando)

### Usar URL: localhost:3333/users

### Insomnia configurado 

URL (BASE_URL) criada dentro do ambiente (dev) com base na URL mencionada acima para facilitar a testagem

# Para baixar o SQLite 

### Comando no terminal

npm install sqlite3 sqlite --save

### SGBD usado - Beekeeper Studio

### Comandos SQL usados

CREATE TABLE users (
	id INTEGER PRIMARY KEY AUTOINCREMENT, 
  name VARCHAR,
  email VARCHAR,
  password VARCHAR,
  avatar VARCHAR NULL
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO users 
(name, email, password)
VALUES
('João', 'joaoe@gmail.com', '123');

SELECT * FROM users; // * = todos os elementos da tabela. Poderiam ser usados os atributos do elemento cadastrado: "id, name, email, ..."

UPDATE users SET 
avatar = 'felipe.png',
name = 'Felipe Maciel'
WHERE id = 1;

DELETE FROM users 
WHERE id = 3;

### AUTOINCREMENT => id é sempre autoincrementado. Independente se algum usuário foi excluído ou não, se o id do usuário for configurado como chave primária, ele sempre será único 

# Para criptografar senha do usuário cadastrado - biblioteca Bcryptjs

### Comando no terminal

npm install bcryptjs --save

# Knex.js utilizado como query builder

### Comando no terminal

npm install knex --save

### Para configurar o Knex

npx knex init

Apagar comentários e deixar apenas o comando referente ao BD usado. Ex.: client: 'sqlite3'. Após isso, importar a biblioteca "path" e seguir o exemplo usado nesse projeto. Além disso, usar o "    useNullAsDefault: true", como usado nesse projeto

### Para criar as migrations dentro do Knex (seguir exemplo do projeto nos arquivos knexfile.js e do criado após o comando abaixo)

Migrations - formato de versionar a base de dados. Migrations trabalham na manipulação da base de dados: crianto, alterando ou removendo (alternativa a fazer tudo manualmente).

npx knex migrate:make (nome do arquivo) - para criar o arquivo da tabela

npx knex migrate:latest / npm run migrate (adicionando "migrate": "knex migrate:latest" na aba "scripts" do arquivo .json) - para rodar a tabela e a inserir no BD

Se der erro, apagar as pastas que são criadas no BD (knex_migrations e knex_migrations_lock) e rodar o último comando novamente