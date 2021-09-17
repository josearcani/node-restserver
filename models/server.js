// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
  constructor () {
    this.app = express();
    this.port = process.env.PORT;
    this.pathUsers = '/api/users';

    // DB conecction
    this.connectToDB();

    // Middlewares
    this.middlewares()

    // Rutas de aplicacion
    this.routes()
  }

  async connectToDB () {
    await dbConnection()
  } 

  middlewares() {
    // CORS
    this.app.use(cors());
    // parse json
    this.app.use(express.json());
    // directorio público
    this.app.use(express.static('public'));
  }

  routes () {
    this.app.use(this.pathUsers, require('../routes/users'));
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`App listening at localhost:${this.port}`);
    })
  }
}

module.exports = Server;
