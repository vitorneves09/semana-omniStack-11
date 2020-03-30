const express = require('express');
const cryto  = require('crypto');
const connection = require('./database/connection');
const ongController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');




const routes  = express.Router();

/**
 * Router Ongs 
 */
routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);

/**
 * Routers incidents
 */
routes.post('/incidents',IncidentController.create)
routes.get('/incidents',IncidentController.index)
routes.delete('/incidents/:id',IncidentController.delete)

/**
 * Routers Profile
 */
routes.get('/profile',ProfileController.index)

/**
 * Routers Login 
 */
routes.post('/sessions',SessionController.create)

module.exports = routes;