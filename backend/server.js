const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const productsRoutes = require('./routes/products.routes');
const ordersRoutes = require('./routes/orders.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', ordersRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ product: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../buid')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

const NODE_ENV = process.env.NODE_ENV;
let dbURI = '';

if(NODE_ENV === 'production') dbURI = 'mongodb+srv://johndoe:admin@cluster0.hjmht.mongodb.net/EcobagStore?retryWrites=true&w=majority';
else if(NODE_ENV === 'test') dbURI = 'mongodb://localhost:27017/EcobagStore';
else dbURI = 'mongodb://localhost:27017/EcobagStore';

/* MONGOOSE */
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+ port);
});
