import express from 'express';
import siteController from '../app/controllers/SiteController.js';

const route = express.Router();

route.get('/search', siteController.search);
route.get('/', siteController.index);

export default route;