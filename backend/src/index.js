const express = require('express');
const cors = require('cors');
const routes = require('./routes');
//const connection = require('./database/connection');

const app = express();

app.use(cors()); //modulo de segurança, identifica quem pode acessar o backend.
app.use(express.json());
app.use(routes);

 app.listen(3333);