// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
  constructor () {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      auth:       '/api/auth',
      categories: '/api/categories',
      products:   '/api/products',
      users:      '/api/users',
    }

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
    this.app.use(this.paths.auth, require('../routes/auth'));
    this.app.use(this.paths.categories, require('../routes/categories'));
    this.app.use(this.paths.products, require('../routes/products'));
    this.app.use(this.paths.users, require('../routes/users'));
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`App listening at localhost:${this.port}`);
    })
  }
}

module.exports = Server;
