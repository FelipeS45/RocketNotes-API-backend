# Para instalar as dependências do Node.js (node_modules) sempre quando o projeto for puxado do Github

npm install

# Para rodar o servidor com Nodemon (deixar rodando em um terminal e usar outro para comandos)

npm run dev

# Biblioteca Express Async Errors instalada para tratamento de erros

npm install express-async-errors --save

# Testes da API feitos pelo Insomnia (só funciona com o servidor rodando)

usar URL: localhost:3333/users

### Insomnia configurado 

URL (BASE_URL) criada dentro do ambiente (dev) com base na URL mencionada acima para facilitar a testagem

# Para baixar o SQLite 

npm install sqlite3 sqlite --save

### SGBD usado - Beekeeper Studio

# SQLite, Express e Nodemon não precisam ser instalados quando o projeto é puxado do Github, apenas o Node.js precisa

# Comandos SQL usados

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