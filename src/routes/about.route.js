import express from 'express';
import aboutController from '../app/controllers/AboutController.js';

const route = express.Router();

route.use('/detail', aboutController.detail);
route.use('/', aboutController.index);

export default route;