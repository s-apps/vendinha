# Vendinha

## Bibliotecas, frameworks e banco de dados escolhidos

- Angular (12.0.0)
- NodeJS (v14.16.0)
- Express (4.16.1)
- Sequelize ORM (6.6.2)
- ngx-currency (2.5.2)
- ngx-mask (12.0.0)
- MySQL (mysql Ver 8.0.25-0ubuntu0.20.04.1)

## Sobre as escolhas

- Angular: É possível programar utilizando orientação a objetos e claro usufluir dessas vantagens. Reaproveitamento de componentes. Single Page Application, ou seja, aplicação de tela única que inclusive evita requests desnecessários ao back-end.
- NodeJS: Pela vantagem de apenas uma thread (Event Loop) tratar as requisições. O Event Loop fica em execução aguardando novas requisições. Utiliza JavaScript, foco dos meus estudos ultimamente.
- Express: Framework para se trabalhar com NodeJS facilitando o desenvolvimento ao se trabalhar com rotas por exemplo.
- Sequelize ORM (Object Relational Mapper): A biblioteca abstraiu completamente comandos SQL. Por examplo, ao invés de INSERT `INTO tabela VALUES` bastou escrever `create` passando os dados como objeto JavaScript.  
- ngx-currency: Cria uma máscara para inputs html com valores monetários no Angular.
- ngx-mask: Cria uma máscara para inputs html com valores numéricos no Angular.
- MySQL: É o banco de dados mais utilizado na Web e já o tenho utilizado a algum tempo e que para a Vendinha é mais que suficiente. 

## Para executar a aplicação

Primeiramente é preciso instalar a API da Vendinha. Acesse `https://github.com/s-apps/vendinha-api` para clonar ou fazer download da aplicação. É necessário que sua máquina possua o NodeJS instalado.
Acesse o diretório `vendinha-api` e execute `npm install` para instalar todas as dependências da aplicação. Em seguida execute `npm start`. A aplicação rodará na porta 3000.

Precisamos de um Servidor Web para executar a aplicação desenvolvida com o Angular, ou seja, um Servidor Web que seja capaz de executar arquivos HTML.
Você poderá clonar ou fazer download da aplicação neste link: `https://github.com/s-apps/vendinha`.
No Servidor Web, no diretório root, devem ser copiados todos os arquivos que se encontram dentro do diretório `vendinha/dist/vendinha/`. Link: `https://github.com/s-apps/vendinha/tree/main/dist/vendinha`. Feito isso, basta inserir o endereço no navegador. Ex: `http://localhost/`. Se você tiver o PHP e o Apache em sua máquina acesse o diretório `vendinha` onde você verá o arquivo `index.html` e execute `php -S localhost:8000`. Abra o navegador e informe o endereço `http://localhost:8000`.
