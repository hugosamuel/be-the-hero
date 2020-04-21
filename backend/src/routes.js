const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/IncidentController') //importando controller
const SessionController = require('./controllers/SessionController') //importando controller

const routes = express.Router();

routes.post('/sessions', SessionController.create); //criando rota que incia uma sessao

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index); //criando rota 

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;