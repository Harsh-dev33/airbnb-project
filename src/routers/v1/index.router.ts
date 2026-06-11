import express from 'express';
import pingRouter from './ping.router';
import hotelsRouter from './hotel.router';

const v1Router = express.Router();

v1Router.use('/ping', pingRouter);
v1Router.use('/hotels', hotelsRouter);

export default v1Router;