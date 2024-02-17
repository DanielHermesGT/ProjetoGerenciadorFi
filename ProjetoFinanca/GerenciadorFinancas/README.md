# Instruções Iniciais

- De um npm i para instalar todas as dependencias presentes no package.json

- Crie uma DataBase (obs: se o nome for mydb com as configurações de conexão padrão sera apenas executar as migrations)

- De um npx sequelize-cli db:migrate

- Altere as credenciais do banco para ficar de acordo com as suas

- npm run dev 

- !Não esqueça de iniciar o sql 

# Diretórios presentes em src

## controllers

### controllers-apagartable.js

- Utilidades: Apaga os dados referenciados por um where

- Funções: 

> apaga() - Faz o envio para a tabela deletar de acordo com o id

### controllers-atualizandobanc.js

- Utilidades: Realiza um update dos dados enviados de acordo com o id

- Funções: 

> atua() - Envia os dados para atualizar na tabela de acordo com o id

### controllers-buscaespc.js

- Utilidades: Faz uma busca na tabela pelo id

- Funções:

> busc() - Envia o id para realizar busca no banco

### controllers-buscanadb.js

- Utilidades: Faz uma busca geral na tabela

- Funções:

> busc() - Faz a busca no banco inteiro

### controllers-recebedadosController.js

- Utilidades: Adiciona os dados enviados no banco

- Funções: 

> recebe() - recebe os dados enviados pelo usuario e adiciona na tabela


## db

### Possui as Configurações e Migrations da DataBase

## app.js

- Utilidades: Faz a configurações de permissões dos cors, onde ouvir, o que pode receber, utilizar as rotas

## rotas.js

- Utilidades: Faz o gerenciamento de acesso as rotas e o que fazer em cada caso

## --> DEPENDENCIAS <--

### dependencies:

- cors: ^2.8.5 - "https://www.npmjs.com/package/cors"
- express: ^4.18.2 - "https://www.npmjs.com/package/express"
- mysql2: ^3.9.1 - "https://www.npmjs.com/package/mysql2"
- sequelize: ^6.37.0 - "https://www.npmjs.com/package/sequelize"

