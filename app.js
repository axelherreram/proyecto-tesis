const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const initializetables = require('./config/initializetables');
const tesisAssigRoutes = require('./routes/tesisAssigRoutes');
const fileRoutes = require('./routes/fileRoutes');
const userRoutes = require('./routes/userRoutes');

const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors({
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
}));

app.use(bodyParser.json());
app.use('/auth', authRoutes); 
app.use('/api', taskRoutes);
app.use('/api', tesisAssigRoutes);
app.use('/api', fileRoutes);
app.use('/api', userRoutes);
   
   
sequelize.sync({ alter: false, force: false  }) // , force: true  eliminar las tablas si existen
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
