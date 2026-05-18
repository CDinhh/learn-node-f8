import express from 'express';
import aboutController from '../app/controllers/AboutController.js';

const route = express.Router();

route.get('/detail', aboutController.detail);
route.get('/', aboutController.index);

export default route;