const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const initializetables = require('./config/initializetables');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes);

sequelize.sync({ alter: true, force: true  })
  .then(async () => {
    console.log('Base de datos sincronizada');
    await initializetables(); 
    app.listen(3000, () => {
      console.log('Servidor ejecutándose en el puerto 3000');
    });
  })
  .catch(error => {
    console.log('Error al conectar con la base de datos', error);
  }); 
