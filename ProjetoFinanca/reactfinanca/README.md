# Instruções Iniciais

- De um npm i para instalar todas as dependencias presentes no package.json
- De um npm start para iniciar a aplicação React.

# Diretórios e arquivos em src

## pages

- Utilidades: Onde se encontra todas as paginas da aplicação React.

### pages-404

- Utilidades: Renderiza a pagina de erro 404, em caso do usuario inserir uma url invalida.

- Funções:

> Pagina404() - Returna um h1 avisando o usuario que a pagina na url não existe.

### pages-consulta

- Utilidades: Renderiza a pagina de consultas dos dados gerais presentes no banco com a estilização presente no arquivo styleconsu.js

- Funções:

> Consulta() - Utiliza useEffect para quando carregar a pagina enviar um axios com o metodo get para o back-end puxando assim os dados desejados e renderizar na tela para o usuario.

### pages-delete

- Utilidades: faz o envio do id para deletar do banco de dados

- Funções:

> deletes() - Faz o envio de um axios usando post com o id para deletar no banco, é carregado pelo useEffect para assim que carregar a pagina ser enviado o axios.

### pages-edit

- Utilidades: Carrega a pagina com os valores de edição que o usuario selecionou e permite a edição dos mesmos

- Funções:

> Edit() - Retorna para o usuario a pagina com os dados requisitados e permitindo a modificação dos mesmos

> Submits() - Faz um axios de metodo post com os dados atualizados e retorna se foi editado com sucesso

> useEffect() - Faz com que assim que carregue a pagina com a url contendo o id ja envie um axios get para o back-end e puxe os dados selecionados

> Change() - Permite que seja atualizado os dados assim que os mesmos são alterados

### pages-menu

- Utilidades: Exibe/renderiza a pagina de menu da aplicação

- Funções: 

> Menu() - Renderiza para o usuario a tela de Menu 

### pages-registros

- Utilidades: Permite ao usuario inserir dados e enviar para o back-end

- Funções:

> Registrar() - Renderiza a pagina para o usuario inserir os dados

> Change() - Permite que o usuario faça o preenchimento dos campos e atualize em tempo real

> Submits() - Faz o envio do formulario preenchido com um axios post e retorna se o envio foi bem sucedido para o usuario

## routes

- Utilidades: Onde se encontra o arquivo Js com as rotas.

- Funções:

> Routers() - Define quais url estao presentes na aplicação, qual ação tomar em caso de determinada pagina e define o que fazer caso seja digitada uma url não definida.

## service

- Utilidades: Cria uma nova instancia do historico navegador.

## styleglob

- Utilidades: Contem a estilização global da aplicação.

## App.js

- Funções: 

> App() - Permite a renderização das rotas e do estilo global

## index.js

- Utilidades: Renderiza a aplicação react baseada da na importação de App


## --> DEPENDENCIAS <--

### dependencies:

- axios: ^1.6.7 - "https://www.npmjs.com/package/axios"
- history: ^4.10.1 - "https://www.npmjs.com/package/history
- react: ^18.2.0 - "https://react.dev/"
- react-dom: ^18.2.0 - "https://www.npmjs.com/package/react-dom"
- react-icons: ^5.0.1 - "https://www.npmjs.com/package/react-icons"
- react-router-dom: ^5.2.0 - "https://www.npmjs.com/package/react-router-dom"
- react-scripts: ^5.0.1 - "https://www.npmjs.com/package/react-scripts"
- styled-components: ^6.1.8 - "https://www.npmjs.com/package/styled-components"
- web-vitals: ^2.1.4 - "https://github.com/GoogleChrome/web-vitals"