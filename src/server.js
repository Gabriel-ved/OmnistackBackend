const express = require('express');//importar express
const routes = require('./routes');//. para referenciar o diretorio atual
const mongoose = require('mongoose');
const cors = require('cors');

//express é uma função
//que quando chamada cria um novo servidor/porta de entrada

const server = express();

mongoose.connect('mongodb+srv://fpdeploy:fooddeploy@teste-b8h6q.mongodb.net/Omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());//p express nao usa json por padrao
server.use(routes);

server.listen(process.env.PORT || 3000);
//yarn add nodemon -D
//em package.json fazemos uma alteração chamada "dev"
//a dev tera o link do script
//sempre q usarmos yarn dev iremos rodar o server
//esse server ira atualizar automaticamente
