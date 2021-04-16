# TODO list API


## Introdução

TODO list API permite pesquisar, criar itens de tarefas e também agrupá-los. É necessário usar o estilo de chamada RESTful para acessar e editar a API TODO list.

## API Referência e tipos de recursos

| Metodo      	 | HTTP Request  	| Descrição|
| ------------- |:-------------:	| -----:      |
| getGroups     | GET  /groups           | Retorna todas as listas de tarefas / grupos do usuário.|
| getSpecificGroup| GET /group/:groupId | Retorna a lista de tarefas especificada pelo usuário |
| deleteGroup   | DELETE /group/:groupId| Exclui toda a lista de tarefas especificada do usuário. |
| addNewGroup   | POST  /creategroup    | Cria uma lista de tarefas para itens a fazer, por exemplo, "Lista de compras"|
| getGroupItems | GET  /grouptasks/:groupId | Retorna todos os itens de tarefas pendentes de uma lista/grupo específico.| getAllTasks   | GET  /tasks           |Retorna todas as tarefas pendentes de todas as listas / grupos.|
| getSpecificTask| GET  /task/:taskId  | Retorna uma tarefa específica.|
| addNewTask   | POST  /create         | Cria uma nova tarefa dentro de uma lista / grupo específico. 
| deleteTask    | DELETE  /remove/:groupId/:taskId| Exclui o item a fazer especificado do usuário.|


## Inicio

Para construir a API TODO list, foi usado a lista de bibliotecas padrão para colocar o servidor em funcionamento. Com isso, o primeiro é o NodeJS que instalará o Node e o npm que são a base do meu servidor e, junto foi usado com o Express para construir um servidor web em endpoints de API. Express é a estrutura de aplicativo da web Node.js e é usado para construir todos os endpoints da API. Além disso, foi usado o banco de dados mongoDB para armazenar os dados da lista TODO.

Para poder executar este projeto, é necessário:

1. Instalar [Node.js](https://nodejs.org/pt/)
1. Instalar dependencias - `npm install`
1. Executar o - `npm start` (Observação: certifique-se de iniciar seu banco de dados mongoDB usando o comando mongod.)
1. Instalar [mongoDB](https://www.mongodb.com/)
1. Para poder testar os endpoints da API da TODO list, você pode usar ferramentas de front-end, como [Api Tester](https://apitester.com/), [Postman](https://www.getpostman.com/).

## Hierarquia de arquivo ##

Foi seguido o padrão de design MVC para construir este projeto, mas a única letra que não estamos usando é "V", uma vez que não precisa de frontend para nossa API.
 
```
- TODO list API
   - src   				//Arquivos MVC
      -controllers
	      -todoController.js  		//todas as funções que tratam de endpoints de API estão localizadas neste arquivo
      -models
        -todoModel.js     		//schemas de banco de dados estão localizados neste arquivo 
      -routes
        -todoRoutes.js   	//contém todos os endpoints da API e lida com solicitações HTTP
   - .babelrc   			//Arquivo de configuração Babel
   - README.md     			//Documentação
   - index.js      			//O ponto de entrada de nossa API
   - package.json   			//contém vários metadados relevantes para o projeto
```

## Autor

* **Lucas Doti Souza**
