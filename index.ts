const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

<<<<<<< HEAD
import dotenv from 'dotenv';
// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

=======
>>>>>>> 381d4fdf35b31f5d6247057044bbcbda8943d8c4
const port = 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
console.log('JSON Server is running on port \x1b[1;32m' + port + '\x1b[1;30m \n');
